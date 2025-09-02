import { useQuery } from "@tanstack/react-query";
import { TypeAnimation } from "react-type-animation";
import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import Container from "../../Components/Container";

import chatBanner from "../../assets/chatbot.jpg";
import chatBanner2 from "../../assets/chatbot2.png";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Loader from "../../Components/Loader/Loader";
const Chatbot = () => {
  const axios = useAxios();

  const [response, setResponse] = useState("");

  const [questionData, setQuestionData] = useState("");

  const { data: chat, isLoading } = useQuery({
    queryKey: ["chat"],
    queryFn: async () => {
      const response = await axios.get("/chatbot/question");
      return response.data;
    },
  });

  useEffect(() => {
    if (questionData) {
      const question = questionData.trim().toLowerCase();
      fetchData(question);
    } else {
      setQuestionData("");
    }
  }, [questionData]);

  const fetchData = async (question) => {
    try {
      const response = await axios.get(`/chatbot?question=${question}`);
      setResponse(response.data);
    } catch (err) {
      console.error("Error fetching data:", err);
      setResponse("I'm sorry, I couldn't retrieve the answer at the moment.");
    }
  };
  return (
    <div>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <Container>
          <div
            className="min-h-screen flex justify-center items-center w-full   my-24"
            style={{
              backgroundImage: `url(${chatBanner2})`,

              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-[600px]">
              <h1 className="text-4xl font-bold text-center my-8">Chatbot</h1>
              <div
                className="text-white w-full font-medium min-h-[600px] p-12 rounded-md shadow-2xl "
                key={response}
                style={{
                  backgroundImage: `url(${chatBanner})`,

                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                {response ? (
                  <TypeAnimation
                    sequence={[`${response}`, 1000]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: "2em", display: "inline-block" }}
                    repeat={1}
                  />
                ) : (
                  ""
                )}
              </div>
              <div className="flex justify-center my-8">
                <Autocomplete
                  disablePortal
                  onChange={(e, value) => setQuestionData(value)}
                  id="combo-box-demo"
                  options={chat}
                  sx={{ width: 500, bgcolor: "white" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Question" />
                  )}
                />
              </div>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Chatbot;
