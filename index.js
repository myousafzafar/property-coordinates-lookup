import dotenv from "dotenv";
dotenv.config(); //if later on I need to use .env vars here

import express, { json } from "express";
import propertyRoutes from "./routes/propertyRoutes.js";

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //form support

app.use(express.static("public")); //uses index.html in public folder as default - contains my form

app.use("/api/properties", propertyRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
