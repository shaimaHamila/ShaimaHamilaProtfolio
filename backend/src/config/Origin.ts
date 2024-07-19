import dotenv from "dotenv";

let origins = {
  origin: "*" as string[] | string,
  methods: ["GET", "POST", "PATCH", "DELETE"],
  credentials: true,
};

dotenv.config();

if (process.env.NODE_ENV === "production") {
  origins.origin = "https://shaimaHamila.github.io";
  if (process.env.STAGE === "true") {
    origins.origin = [
      "https://shaimaHamila.github.io",
      "http://localhost:3000",
      "http://localhost:5173",
    ];
  }
} else if (process.env.NODE_ENV === "development") {
  origins.origin = "http://localhost:3000";
}

export default origins;
