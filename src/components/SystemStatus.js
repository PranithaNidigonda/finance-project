"use client";

import { useCallback, useEffect, useState } from "react";
import { CheckCircle2, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";
import { ErrorState } from "@/components/ui/ErrorState";
import { Badge } from "@/components/ui/Badge";

export default function SystemStatus() {
  const [state, setState] = useState({ status: "loading" });

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/health", { cache: "no-store" });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Health check failed");
      setState({ status: "ok", data });
    } catch (err) {
      setState({ status: "error", message: err.message });
    }
  }, []);

//   useEffect(() => {
//     load();
//   }, [load]);
useEffect(() => {
  const timeoutId = setTimeout(() => {
    load();
  }, 0);

  return () => clearTimeout(timeoutId);
}, [load]);

  const retry = () => {
    setState({ status: "loading" });
    load();
  };

  if (state.status === "loading") {
    return (
      <Card>
        <CardContent className="space-y-3">
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-4 w-64" />
        </CardContent>
      </Card>
    );
  }

  if (state.status === "error") {
    return (
      <ErrorState
        title="Database not reachable"
        message={`${state.message}. Check MONGODB_URI in .env.local and restart the dev server.`}
        onRetry={retry}
      />
    );
  }

  return (
    <Card>
      <CardContent className="flex items-center gap-4">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-100 text-emerald-600">
          <Database className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <p className="flex items-center gap-2 text-sm font-semibold">
            MongoDB connected <CheckCircle2 className="h-4 w-4 text-emerald-600" />
          </p>
          <p className="text-sm text-slate-500">
            Database: {state.data.database.name} · checked{" "}
            {new Date(state.data.checkedAt).toLocaleTimeString()}
          </p>
        </div>
        <Badge variant="success">Healthy</Badge>
      </CardContent>
    </Card>
  );
}