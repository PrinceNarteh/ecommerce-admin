import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};
