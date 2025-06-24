import { createRequire } from "module";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Serve frontend build files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendPath = path.join(__dirname, "../dist");

app.use(cors());
app.use(express.static(frontendPath));

// API route: /currencies
app.get("/currencies", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.currencybeacon.com/v1/currencies?api_key=${process.env.API_KEY}`
    );
    const currencies = await response.json();
    res.json(currencies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API route: /convert
app.get("/convert", async (req, res) => {
  const { base, foreign, amount } = req.query;

  if (!base || !foreign || !amount) {
    return res.status(400).json({ error: "Missing required query parameters" });
  }

  try {
    const response = await fetch(
      `https://api.currencybeacon.com/v1/convert?api_key=${process.env.API_KEY}&from=${base}&to=${foreign}&amount=${amount}`
    );
    const conversion = await response.json();
    res.json(conversion.response);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Fallback: send index.html for any unknown routes (React Router support)
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
