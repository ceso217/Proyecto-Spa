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
    user: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Date = models.Date || model("Date", dateSchema);
export default Date;
