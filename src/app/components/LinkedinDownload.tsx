"use client";

import { Button } from "@/components/ui/button";
import { LinkedinLogo } from "@/app/components/LinkedinLogo";
import { Download } from "lucide-react";

interface LinkedinDownloadButtonProps {
  className?: string;
}

export function LinkedinDownload({ className }: LinkedinDownloadButtonProps) {
  return (
    <Button
      variant="ghost"
      className={`flex items-center gap-2 bg-[#f3f6f8] hover:bg-[#e1e9f0] text-gray-700 rounded-md px-3 py-2 h-auto ${
        className || ""
      }`}
    >
      <LinkedinLogo />
      <span>
        <Download />
      </span>
    </Button>
  );
}
