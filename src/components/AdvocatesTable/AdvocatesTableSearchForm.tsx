import { ChangeEvent, MouseEvent } from "react";
import { TextInput } from "../TextInput";
import { Button } from "../Button";

interface IAdvocatesTableSearchFormProps {
  searchTerm: string;
  setSearchTerm: Function;
  resetSearch: Function;
}

export function AdvocatesTableSearchForm({
  searchTerm,
  setSearchTerm,
  resetSearch,
}: IAdvocatesTableSearchFormProps) {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    setSearchTerm(search);
  };

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    resetSearch();
  };

  return (
    <div className="flex flex-col lg:flex-row gap-2">
      <TextInput
        label={`Searching for: ${searchTerm}`}
        id="advocates-search-text"
        type="text"
        name="search"
        placeholder="Search by name, phone, city, specialties..."
        value={searchTerm}
        onChange={onChange}
      />
      <Button onClick={onClick}>Reset Search</Button>
    </div>
  );
}
