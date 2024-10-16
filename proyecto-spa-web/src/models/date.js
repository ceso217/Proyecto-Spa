import { Schema, model, models } from "mongoose";

const dateSchema = new Schema(
  {
    service: {
      type: String,
      required: [true, "Service is required"],
      trim: true,
    },
    date: {
      type: String,
      required: [true, "Date is required"],
    },
    time: {
      type: String,
      required: [true, "Time is required"],
    },
    user: {
      type: String,
    },
    client: {
      type: String,
    },
    professional: {
      type: String,
    },
    accept: {
      type: Number,
    },
    rejectedReason: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Date = models.Date || model("Date", dateSchema);
export default Date;
