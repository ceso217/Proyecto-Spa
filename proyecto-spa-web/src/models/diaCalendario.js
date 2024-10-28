import { Schema, model, models } from "mongoose";

const dateSchema = new Schema(
  {
    dia: {
      type: Date,
      required: [true, "Day is required"],
    },
    "08": {
      type: Boolean,
      default: false,
    },
    "09": {
      type: Boolean,
      default: false,
    },
    10: {
      type: Boolean,
      default: false,
    },
    16: {
      type: Boolean,
      default: false,
    },
    17: {
      type: Boolean,
      default: false,
    },
    18: {
      type: Boolean,
      default: false,
    },
    19: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const DiaCalendario =
  models.DiaCalendario || model("DiaCalendario", dateSchema);
export default DiaCalendario;
