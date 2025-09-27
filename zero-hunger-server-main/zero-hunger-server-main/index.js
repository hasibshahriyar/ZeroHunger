const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const knowledgeBase = require("./knowledgeBase");
const routes = require("./src/modules/app/routes");
app.use(express.json());
app.use(cors());

app.use("/api/v1", routes);

// chatbot
app.get("/chatbot", async (req, res) => {
  const question = req.query.question;

  const formattedQuestion = question.toLowerCase().trim();

  const formattedQuestionWithQuestionMark = formattedQuestion.endsWith("?")
    ? formattedQuestion
    : formattedQuestion + "?";

  const normalizedKnowledgeBase = {};
  for (const key in knowledgeBase) {
    const normalizeKey = key.trim().toLowerCase();
    const normalizeValue = knowledgeBase[key].trim();
    normalizedKnowledgeBase[normalizeKey] = normalizeValue;
  }
  if (
    normalizedKnowledgeBase.hasOwnProperty(formattedQuestionWithQuestionMark)
  ) {
    res.json(normalizedKnowledgeBase[formattedQuestionWithQuestionMark]);
  } else {
    res.status(404).json("Sorry, I don't have an answer to that question.");
  }
});
// getting chatbot question
app.get("/chatbot/question", async (req, res) => {
  const question = Object.keys(knowledgeBase);
  res.send(question);
});
app.get("/", (req, res) => {
  res.send("running");
});

module.exports = app;
