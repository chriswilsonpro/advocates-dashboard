import { Advocate } from "@/types";

interface IAdvocateListRowProps {
  advocate: Advocate;
}

export function AdvocatesListRow({ advocate }: IAdvocateListRowProps) {
  const phone = advocate.phoneNumber.toString();
  const formattedPhone =
    `(${phone.slice(0, 3)}) ` + phone.slice(3, 6) + "-" + phone.slice(6);

  return (
    <div className="grid grid-cols-subgrid lg:col-span-9 col-span-4 border-b border-gray-300 text-left lg:text-center py-2">
      <div>{advocate.firstName}</div>
      <div>{advocate.lastName}</div>
      <div>{advocate.city}</div>
      <div>{advocate.degree}</div>
      <div className="col-span-4 lg:col-span-3">
        <div className="max-w-5xl flex flex-direction-row flex-wrap gap-2 p-2">
          {advocate.specialties.map((s, i) => (
            <div key={i} className="text-xs px-3 py-1 bg-gray-100 rounded-xl">
              {s}
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-4 lg:col-auto">
        <span className="lg:hidden">Experience:&nbsp;</span>
        {advocate.yearsOfExperience}
        <span className="lg:hidden">&nbsp;years</span>
      </div>
      <div className="col-span-4 lg:col-auto">{formattedPhone}</div>
    </div>
  );
}
