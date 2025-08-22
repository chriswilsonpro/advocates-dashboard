import { advocates } from "@/db/schema";
import { useCallback, useMemo, useState } from "react";
import { useAdvocates } from "./useAdvocates";

type Advocate = typeof advocates.$inferSelect;

export function useFilteredAdvocates() {
  const { advocates } = useAdvocates();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const resetSearch = () => setSearchTerm("");

  const matchAdvocate = useCallback(
    (advocate: Advocate) => {
      if (searchTerm.length === 0) {
        // No need to filter results
        return true;
      }

      const search = searchTerm
        .split(" ")
        .filter((term) => term.length > 0)
        .map((term) => term.toLowerCase());

      const haystack = Object.values(advocate).join("|").toLowerCase();

      return search.reduce(
        (found, term) => found && haystack.includes(term),
        true
      );
    },
    [searchTerm]
  );

  const filteredAdvocates = useMemo(() => {
    console.log("SEARCH ADVOCATES", advocates);
    return advocates.filter((advocate) => matchAdvocate(advocate));
  }, [advocates, matchAdvocate]);

  return {
    advocates: filteredAdvocates,
    setSearchTerm,
    resetSearch,
  };
}
