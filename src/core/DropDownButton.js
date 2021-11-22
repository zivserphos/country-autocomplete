import {
  InputGroup,
  DropdownButton,
  Dropdown,
  FormControl,
} from "react-bootstrap";
import { countriesData } from "../helpers/countriesData";
import PresentCountry from "./presentCountry";
import { useState, useEffect } from "react";

export default function SearchField() {
  const [inputValue, setInputValue] = useState();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  useEffect(() => {}, [inputValue]);
  const countries = countriesData.map((country) => {
    return <PresentCountry country={country} />;
  });
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
          {countries}
        </DropdownButton>
      </InputGroup>
    </div>
  );
}
