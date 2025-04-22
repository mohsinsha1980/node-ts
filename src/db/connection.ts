import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const DB: string = process.env.DB || '';

export default function connectDB() {
  try {
    mongoose.set('strictQuery', false);
    mongoose.connect(DB);
    console.log('DB connected');
  } catch (e: unknown) {
    console.log(`Error connecting to DB ${e}`);
  }
}
