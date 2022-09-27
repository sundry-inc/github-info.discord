import mongoose from "mongoose";

const PrefixSchema = new mongoose.Schema({
  prefix: {
    type: mongoose.SchemaTypes.String,
    required: true,
  }
});

const model = mongoose.model('Prefix', PrefixSchema);

export default model;