"use client"
import Menu from "@/components/ui/Menu";

export default function ContextLayout({ children }) {

  return (
    <>
    <Menu />
    {children}
    </>
  );
}