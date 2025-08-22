import { Advocate } from "@/types";
import { AdvocatesListRow } from "./AdvocatesTableListRow";

interface IAdvocatesTableListProps {
  advocates: Advocate[];
}

export function AdvocatesTableList({ advocates }: IAdvocatesTableListProps) {
  return (
    <div className="w-full grid lg:grid-cols-9 grid-col-4">
      <div className="text-xs font-semibold text-center text-gray-700 border-b border-gray-400 uppercase hidden lg:grid grid-cols-subgrid col-span-9 pb-2">
        <div>First Name</div>
        <div>Last Name</div>
        <div>City</div>
        <div>Degree</div>
        <div className="col-span-3">Specialties</div>
        <div>Years of Experience</div>
        <div>Phone Number</div>
      </div>
      {advocates.map((advocate) => (
        <AdvocatesListRow key={advocate.id} advocate={advocate} />
      ))}
    </div>
  );
}
