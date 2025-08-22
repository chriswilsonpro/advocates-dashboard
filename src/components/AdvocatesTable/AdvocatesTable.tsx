import { useFilteredAdvocates } from "@/hooks/useFilteredAdvocates";
import { FormTitle } from "../FormTitle";
import { AdvocatesTableSearchForm } from "./AdvocatesTableSearchForm";

interface IAdvocatesTableProps {}

export function AdvocatesTable({}: IAdvocatesTableProps) {
  const { advocates, searchTerm, setSearchTerm, resetSearch } =
    useFilteredAdvocates();

  return (
    <div className="border border-gray-500 rounded-xl p-4">
      <FormTitle title="Search" />
      <div className="border-b border-gray-300 px-3 py-2 mb-4">
        <AdvocatesTableSearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} resetSearch={resetSearch} />
      </div>
      <table className="w-full table-auto border-collapse">
        <thead className="text-xs text-gray-700 border-b border-gray-400 uppercase">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>Degree</th>
            <th>Specialties</th>
            <th>Years of Experience</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {advocates.map((advocate) => {
            return (
              <tr key={advocate.id} className="border-b border-gray-300 text-center">
                <td>{advocate.firstName}</td>
                <td>{advocate.lastName}</td>
                <td>{advocate.city}</td>
                <td>{advocate.degree}</td>
                <td className="">
                    <div className="max-w-5xl flex flex-direction-row flex-wrap gap-2 p-2">
                  {advocate.specialties.map((s, i) => (
                    <div key={i} className="text-xs px-3 py-1 bg-gray-100 rounded-xl">{s}</div>
                  ))}
                  </div>
                </td>
                <td>{advocate.yearsOfExperience}</td>
                <td>{advocate.phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
