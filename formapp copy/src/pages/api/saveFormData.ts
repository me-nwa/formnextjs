// src/pages/api/saveFormData.ts
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Get form data from the request body
    const formData = req.body;

    // Define the path to save the JSON file
    const filePath = path.join(process.cwd(), "data", "formData.json");

    // Ensure the data folder exists
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    // Write the data to a JSON file
    fs.writeFileSync(filePath, JSON.stringify(formData, null, 2));

    res.status(200).json({ message: "Form data saved successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
