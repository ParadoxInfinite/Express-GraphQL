const { model, Schema } = require("mongoose");

const fileSchema = new Schema({
  filename: String,
  username: String,
  path: String,
  uploadedAt: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = model("File", fileSchema);
