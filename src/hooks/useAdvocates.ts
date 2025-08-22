import type { Advocate } from "@/types";
import { useEffect, useState } from "react";

export function useAdvocates() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        console.log("ADVOCATES", jsonResponse);
        setAdvocates(jsonResponse.data);
        setLoading(false)
      });
    });
  }, []);

  return {
    advocates,
    loading
  };
}
