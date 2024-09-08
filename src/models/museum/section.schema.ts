import mongoose, { Schema, Document, Model } from "mongoose";

export interface ISection extends Document {
  name: string;
  price: number;
}

export const SectionSchema: Schema<ISection> = new Schema({
  name: {
    type: String,
    required: [true, "Section name is required"],
  },
  price: {
    type: Number,
    required: [true, "Section price is required"],
  },
});

export const Section: Model<ISection> =
  mongoose.models.Section || mongoose.model<ISection>("Section", SectionSchema);
