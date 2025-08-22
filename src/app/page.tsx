"use client";

import { AdvocatesTable } from "@/components/AdvocatesTable/AdvocatesTable";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="w-fill flex flex-col m-6">
      <Header title="Solace Advocates" />
      <AdvocatesTable />
    </main>
  );
}
