"use client";

import { AdvocatesTable } from "@/components/AdvocatesTable/AdvocatesTable";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="w-fill m-6">
      <Header title="Solace Advocates" />
      <AdvocatesTable />
    </main>
  );
}
