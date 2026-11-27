"use client";

import { AlertTriangle } from "lucide-react";
import { Button } from "./Button";

export function ErrorState({ title = "Something went wrong", message, onRetry }) {
  return (
    <div
      role="alert"
      className="flex flex-col items-center rounded-2xl border border-red-200 bg-red-50 px-6 py-10 text-center"
    >
      <AlertTriangle className="mb-3 h-8 w-8 text-red-500" />
      <h3 className="text-sm font-semibold text-red-900">{title}</h3>
      {message && <p className="mt-1 max-w-sm text-sm text-red-700">{message}</p>}
      {onRetry && (
        <Button variant="secondary" size="sm" className="mt-4" onClick={onRetry}>
          Try again
        </Button>
      )}
    </div>
  );
}
