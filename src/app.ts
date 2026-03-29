import express, { Application } from "express";
const app = express();

app.use(express.json()); //Middleware to parse incoming JSON request bodies

// Health check route — useful for quickly verifying the server is alive
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

export default app;
