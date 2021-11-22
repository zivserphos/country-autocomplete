import { Component } from "react";
import { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import axios from "axios";

export default function PresentCountry(props) {
  return (
    <Dropdown.Item>
      <img className="countryFlag" src={props.country.flag} alt={"flag"}></img>
      <div className="countryName">{props.country.name}</div>
      <div className="countryCode">{props.country.code}</div>
      <div className="dialling_code">{props.country.dialling_code}</div>
    </Dropdown.Item>
  );
}
