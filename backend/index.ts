import express, { Request, Response } from "express";
import axios from "axios";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwuaQDIhUfGI5bd9TrZWKlhibOrTD-uhQ26jzJnsz5B6jPZ-gT6XrhTo8omJ3DctINb/exec"; // Replace with your Google Apps Script URL

app.post("/save", async (req: Request, res: Response) => {
    try {
        const response = axios.post(GOOGLE_SCRIPT_URL, req.body, { timeout: 5000 });
        res.json("Saving details");
    } catch (error) {
        res.status(500).json({ success: false, error: (error as Error).message });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
