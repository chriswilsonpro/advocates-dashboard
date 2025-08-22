import { useFilteredAdvocates } from "@/hooks/useFilteredAdvocates";
import { FormTitle } from "../FormTitle";
import { AdvocatesTableSearchForm } from "./AdvocatesTableSearchForm";
import { AdvocatesTableList } from "./AdvocatesTableList";

interface IAdvocatesTableProps {}

export function AdvocatesTable({}: IAdvocatesTableProps) {
  const { advocates, searchTerm, setSearchTerm, resetSearch } =
    useFilteredAdvocates();

  return (
    <div className="w-100 border border-gray-500 rounded-xl p-4">
      <FormTitle title="Search" />
      <div className="border-b border-gray-300 lg:px-3 py-2 mb-4">
        <AdvocatesTableSearchForm
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          resetSearch={resetSearch}
        />
      </div>
      <AdvocatesTableList advocates={advocates} />
    </div>
  );
}
