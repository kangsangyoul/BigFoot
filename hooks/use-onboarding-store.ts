"use client";

import { create } from "zustand";
import type { UserRole } from "@/types/domain";

type OnboardingState = {
  role?: UserRole;
  setRole: (role: UserRole) => void;
};

export const useOnboardingStore = create<OnboardingState>((set) => ({
  role: undefined,
  setRole: (role) => set({ role })
}));
