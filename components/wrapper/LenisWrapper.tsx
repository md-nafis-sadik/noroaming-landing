"use client";
import useLenis from "@/hooks/useLenis";

export default function LenisWrapper({ children }: { children: React.ReactNode }) {
    useLenis(); // Call the hook directly in the component body

    return <>{children}</>;
}