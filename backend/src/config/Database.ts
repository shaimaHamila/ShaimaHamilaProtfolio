import mongoose, { ConnectOptions } from "mongoose";

// const getMongoUri = () => {
//   const { NODE_ENV, STAGE, DB_USERNAME, DB_PASSWORD } = process.env;

//   if (NODE_ENV === "development") {
//     // return "mongodb://localhost:27017/myPortfolio";
//     return `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@myportfoliocluster.ai3nyia.mongodb.net/`;
//   }

//   if (NODE_ENV === "production") {
//     if (STAGE === "true") {
//       return `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@myportfoliocluster.ai3nyia.mongodb.net/`;
//     }
//     if (STAGE === "false") {
//       return "mongodb://mongo:27017/myPortfolio";
//     }
//     return `mongodb://${DB_USERNAME}:${DB_PASSWORD}@database:27017/?authMechanism=DEFAULT`;
//   }

//   console.error("NODE_ENV is not set or is invalid!");
//   process.exit(1);
// };

// const mongo_uri = getMongoUri();

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
