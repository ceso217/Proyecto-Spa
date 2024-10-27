import { Schema, model, models } from "mongoose";

const dateSchema = new Schema(
  {
    monto: {
      type: Number,
      required: [true, "Quantity is required"],
      trim: true,
    },
    cliente: {
      type: String,
      required: [true, "Client is required"],
    },
    correo: {
      type: String,
      required: [true, "Mail is required"],
    },
    servicio: {
      type: String,
      required: [true, "Service is required"],
    },
    metodoPago: {
      type: String,
      required: [true, "Payment method is required"], // Ahora es requerido
    },
    fecha: {
      type: Date,
      required: [true, "Date is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Pago = models.Pago || model("Pago", dateSchema);
export default Pago;
