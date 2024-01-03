import { Schema, model, models } from "mongoose";

const schema = new Schema({
   name: { type: String, trim: true },
   email: { type: String, trim: true },
   password: { type: String, trim: true },
   role: { type: Number, trim: true },
});

export const Users = models.users || model("users", schema);
