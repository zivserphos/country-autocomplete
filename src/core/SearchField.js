import { InputGroup, DropdownButton, FormControl } from "react-bootstrap";
import updateFlags, { countriesData } from "../helpers/countriesData";
import PresentCountry from "./presentCountry";
import { useState, useEffect } from "react";

export default function SearchField() {
  const [newCountries, setData] = useState(null);
  const [inputValue, setInputValue] = useState();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    async function updateData() {
      const newCountriesData = await updateFlags();
      const countries = newCountriesData.map((country) => {
        return <PresentCountry country={country} />;
      });
      setData(countries);
    }
    updateData();
    // updateData();
    // async function updateFlags() {
    //   const flags = await Getflags();
    //   const newCountriesData = countriesData.map((country) => {
    //     const updatedFlag = flags.find((flag) => (flag.name = country.name));
    //     country.flag = updatedFlag.flag;
    //     return country;
    //   });
    //   const countries = newCountriesData.map((country) => {
    //     return <PresentCountry country={country} />;
    //   });
    //   setData(countries);
    // }
    // updateFlags();
  }, []);
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          aria-label="Text input with dropdown button"
          onChange={handleChange}
        />

        <DropdownButton
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-2"
          align="end"
        >
          {newCountries}
        </DropdownButton>
      </InputGroup>
    </div>
  );
}
