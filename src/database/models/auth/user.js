import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this user.'],
    maxlength: [20, 'Name cannot be more than 60 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please provide the email for this user'],
    maxlength: [20, 'Email cannot be more than 60 characters'],
  },
  password: {
    type: String,
    required: [true, 'Please specify the password for this user.'],
    maxlength: [30, 'SPassword specified cannot be more than 40 characters'],
  },
  authToken: {
    type: String,
    required: [false],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
