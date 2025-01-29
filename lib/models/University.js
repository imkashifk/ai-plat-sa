import mongoose from 'mongoose';

const UniversitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['Public', 'Private'],
  },
  ranking: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  programCount: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.University || mongoose.model('University', UniversitySchema);