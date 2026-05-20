import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function MobileShell({ children, className }: { children: ReactNode; className?: string }) {
  return <main className={cn("mx-auto min-h-screen max-w-md bg-background", className)}>{children}</main>;
}
