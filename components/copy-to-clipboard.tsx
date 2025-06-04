"use client";

import { CopyToClipboard as CopyToClipboardComp } from "react-copy-to-clipboard";
import { Check, Clipboard } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CopyToClipboard({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <CopyToClipboardComp text={text} onCopy={() => setTimeout(() => setCopied(false), 1000)}>
      <Button className="bg-transparent!" onClick={() => setCopied(true)}>
        {copied ? (
          <Check className="h-4 w-4 text-white/50" />
        ) : (
          <Clipboard className="h-4 w-4 text-white/50" />
        )}
      </Button>
    </CopyToClipboardComp>
  );
}
