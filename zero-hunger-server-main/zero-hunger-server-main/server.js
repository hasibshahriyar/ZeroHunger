// Import app from a separate file
const app = require(".");
const db = require("./config/db.config");

const port = process.env.PORT || 5000;

// Start the server
<<<<<<< HEAD
const server = app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
  console.log(`📍 Backend URL: http://localhost:${port}`);
  console.log(`🤖 Chatbot URL: http://localhost:${port}/chatbot`);
});

// Handle server errors
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${port} is already in use`);
    process.exit(1);
  } else {
    console.error('❌ Server error:', err);
  }
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('✅ Server closed');
    process.exit(0);
  });
=======
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
>>>>>>> origin/main
});
