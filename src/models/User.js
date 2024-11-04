import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: {type: String }
});

export default mongoose.models.User || mongoose.model('User', UserSchema);