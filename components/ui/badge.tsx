import * as React from "react";

import { cn } from "@/components/ui/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("inline-flex items-center rounded-md text-xs font-medium", className)} {...props} />
  );
}
