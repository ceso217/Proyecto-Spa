import { Schema, model, models } from "mongoose";

const dateSchema = new Schema(
  {
    titulo: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    precio: {
      type: Number,
      required: [true, "Price is required"],
    },
    tipo: {
      type: String,
      required: [true, "Type is required"],
    },
    professional: {
      type: String,
      required: [true, "Professional is required"],
    },
    imagen: {
      type: String,
      required: [true, "Image is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Service = models.Service || model("Service", dateSchema);
export default Service;
