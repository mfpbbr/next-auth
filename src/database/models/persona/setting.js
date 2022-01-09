import mongoose from 'mongoose';

const SettingSchema = new mongoose.Schema({
  isPrivate: {
    type: Boolean,
    required: [true, 'Please provide a position for Privacy'],
  },
  darkMode: {
    type: Boolean,
    required: [true, 'Please provide a position for DarkMode'],
  },
  userID: {
    type: String,
    required: [true, 'Please provide an ID for the OWNER of this Settings'],
  },
});

export default mongoose.models.Setting || mongoose.model('Setting', SettingSchema);
