import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { mongoConnect } from "./config/Database";
import messageRouter from "./routes/MessageRouter";
import origins from "./config/Origin";
import helmet from "helmet";
import AuthRouter from "./routes/AuthRouter";
mongoConnect();
const app = express();
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(helmet());
app.use(cors(origins));
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Routes
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/auth", AuthRouter);

app.listen(PORT, () => {
  console.log(`Express is running at 5000! ${PORT}`);
});
