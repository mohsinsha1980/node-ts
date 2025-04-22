import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const User = new Schema(
  {
    email: {
      type: String,
    },
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
  },
  {
    collection: 'User',
    timestamps: true,
  },
);
const UserModel = mongoose.model('User', User);

export default UserModel;
