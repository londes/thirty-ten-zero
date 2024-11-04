import mongoose from 'mongoose';

const ActionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  frequency: {type: Number, required: true },
  icon: { type: String },
  color: { type: String },
  numCompleted: {type: Number, default: 0 }
});

export default mongoose.models.Action || mongoose.model('Action', ActionSchema);