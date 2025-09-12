import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now, // 👈 no () so it's called when creating a doc
  },
});

// ✅ Use mongoose.models to avoid OverwriteModelError
const EmailModel =
  mongoose.models.Email || mongoose.model("Email", Schema);

export default EmailModel;
