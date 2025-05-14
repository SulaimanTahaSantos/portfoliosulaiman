"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { CVPdf } from "./CVPdf";
import { pdf } from '@react-pdf/renderer';

interface LinkedinDownloadButtonProps {
  className?: string;
}

export function LinkedinDownload({ className }: LinkedinDownloadButtonProps) {
  const handleDownload = async () => {
    const blob = await pdf(<CVPdf />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Suleiman_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Button
      variant="ghost"
      onClick={handleDownload}
      className={`flex items-center gap-2 bg-[#f3f6f8] hover:bg-[#e1e9f0] text-gray-700 rounded-md px-3 py-2 h-auto ${
        className || ""
      }`}
      aria-label="Descargar CV"
      title="Descargar CV"
    >
      <span>
        <Download  />
      </span>
    </Button>
  );
}
