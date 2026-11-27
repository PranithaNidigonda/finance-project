"use client";

import { useState } from "react";
import { Wallet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge, DemoBadge } from "@/components/ui/Badge";
import { Skeleton } from "@/components/ui/Skeleton";
import { EmptyState } from "@/components/ui/EmptyState";
import { Modal } from "@/components/ui/Modal";
import { formatINR, rupeesToPaise } from "@/lib/money";

export default function DesignPreview() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const fakeLoad = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader><CardTitle>Buttons, badges and money helper</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button loading={loading} onClick={fakeLoad}>Click for loading</Button>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge>Neutral</Badge>
            <Badge variant="brand">Brand</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="danger">Danger</Badge>
            <DemoBadge />
          </div>
          <p className="text-sm text-slate-600">
            {/* rupeesToPaise("₹1,23,456.78") →{" "} */}
            rupeesToPaise(&quot;₹1,23,456.78&quot;) →{" "}
            <b>{formatINR(rupeesToPaise("₹1,23,456.78"))}</b> · compact:{" "}
            <b>{formatINR(rupeesToPaise(1250000), { compact: true })}</b>
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Inputs and modal</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <Input label="Amount" placeholder="0.00" hint="Stored internally as paise" />
          <Input label="With error" defaultValue="abc" error="Enter a valid amount" />
          <Button variant="secondary" onClick={() => setOpen(true)}>Open modal</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Loading skeleton</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </CardContent>
      </Card>

      <EmptyState
        icon={Wallet}
        title="No transactions yet"
        description="This is the empty state we'll use across the app."
      />

      <Modal open={open} onClose={() => setOpen(false)} title="Modal works">
        <p className="mb-4 text-sm text-slate-600">Press Esc or click outside to close.</p>
        <Button onClick={() => setOpen(false)}>Got it</Button>
      </Modal>
    </div>
  );
}