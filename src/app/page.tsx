"use client";

import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { TextInput } from "@/components/TextInput";
import { useFilteredAdvocates } from "@/hooks/useFilteredAdvocates";
import { ChangeEvent, useEffect, useMemo, useState } from "react";

export default function Home() {
  const { advocates, searchTerm, setSearchTerm, resetSearch } = useFilteredAdvocates()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  };

  const onClick = () => {
    resetSearch();
  };

  return (
    <main className="m-6">
      <Header title="Solace Advocates" />
      <div>
        <p>Search Advocates</p>
        <div className="flex flex-direction-row">
        <TextInput label={`Searching for: ${searchTerm}`} id="advocates-search-text" type="text" name="search" placeholder="Search by name, phone, city..." onChange={onChange}/>
        <Button onClick={onClick}>Reset Search</Button>
        </div>
      </div>
      <br />
      <br />
      <table>
        <thead>
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
              <tr key={advocate.id}>
                <td>{advocate.firstName}</td>
                <td>{advocate.lastName}</td>
                <td>{advocate.city}</td>
                <td>{advocate.degree}</td>
                <td>
                  {advocate.specialties.map((s) => (
                    <div key={s}>{s}</div>
                  ))}
                </td>
                <td>{advocate.yearsOfExperience}</td>
                <td>{advocate.phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
