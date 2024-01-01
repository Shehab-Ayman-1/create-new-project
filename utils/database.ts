import mongoose from "mongoose";

let connected = false;

export const DBConnection = async () => {
   try {
      mongoose.set("strictQuery", true);
      if (connected) return console.log("MongoDB Is Already Connected");

      const options = { dbName: "share_prompt", useNewUrlParser: true, useUnifiedTopology: true };
      await mongoose.connect(process.env.MONGO_URL || "", options);

      connected = true;
      console.log("MongoDB Is Running.");
   } catch (error) {
      console.log(error);
   }
};
