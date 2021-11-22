// import axios from "axios";

// export default async function updateFlags() {
//   const flags = await Getflags();
//   const newCountriesData = countriesData.map((country) => {
//     const updatedFlag = flags.find((flag) => (flag.name = country.name));
//     country.flag = updatedFlag.flag;
//     return country;
//   });
//   return newCountriesData;
// }

// async function Getflags() {
//   const countriesData = await axios.get("https://restcountries.com/v3.1/all");
//   const flags = [];
//   countriesData.data.map((country) => {
//     return flags.push({ name: country.name.common, flag: country.flags.svg });
//   });
//   return flags;
// }
