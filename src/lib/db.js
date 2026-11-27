import mongoose from "mongoose";

const globalForMongoose = globalThis;
const cache =
  globalForMongoose._mongooseCache ||
  (globalForMongoose._mongooseCache = { conn: null, promise: null });

/**
 * Connect to MongoDB once and reuse the connection.
 * The env check happens at call time so `next build` doesn't fail without a DB.
 */
export async function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not set. Add it to .env.local");
  }

  if (cache.conn) return cache.conn;

  if (!cache.promise) {
    cache.promise = mongoose
      .connect(uri, {
        bufferCommands: false,
        serverSelectionTimeoutMS: 5000,
      })
      .then((m) => m);
  }

  try {
    cache.conn = await cache.promise;
  } catch (err) {
    cache.promise = null; // allow retry on next call
    throw err;
  }
  return cache.conn;
}