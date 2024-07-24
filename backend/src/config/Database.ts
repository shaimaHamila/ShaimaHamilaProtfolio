import mongoose, { ConnectOptions } from "mongoose";

export const mongoConnect = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@myportfoliocluster.ai3nyia.mongodb.net/`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "myPortfolio",
      } as ConnectOptions
    );
    console.log("Express is connected to MongoDB :D");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
  }
};
