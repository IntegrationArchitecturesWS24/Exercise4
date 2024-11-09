import express from "express";
import cookieParser from "cookie-parser";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Import routes
import openCRXRoutes from "./routes/opencrx.js";
import openHRMRoutes from "./routes/openhrm.js";

// Use routes
app.use("/opencrx", openCRXRoutes);
app.use("/openhrm", openHRMRoutes);

// Start server
app.listen(port, () => {
  console.log(`App is listening on port ${port}.`);
});
