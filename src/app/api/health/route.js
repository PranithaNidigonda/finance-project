import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/lib/db";

// export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectDB();
    await mongoose.connection.db.admin().ping();

    return NextResponse.json({
      status: "ok",
      database: { connected: true, name: mongoose.connection.name },
      checkedAt: new Date().toISOString(),
    });
  } catch (err) {
    // Log details on the server only, never leak them to the client.
    console.error("[health] database check failed:", err.message);
    return NextResponse.json(
      { status: "error", message: "Database connection failed" },
      { status: 503 }
    );
  }
}