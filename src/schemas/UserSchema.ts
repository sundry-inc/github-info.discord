import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  user_name: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  user_id: {
    type: mongoose.SchemaTypes.String,
    required: true,
  }
});

const model = mongoose.model('User', UserSchema);

export default model;