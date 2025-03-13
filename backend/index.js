"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwuaQDIhUfGI5bd9TrZWKlhibOrTD-uhQ26jzJnsz5B6jPZ-gT6XrhTo8omJ3DctINb/exec"; // Replace with your Google Apps Script URL
app.post("/save", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = axios_1.default.post(GOOGLE_SCRIPT_URL, req.body, { timeout: 5000 });
        res.json("Saving details");
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}));
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
