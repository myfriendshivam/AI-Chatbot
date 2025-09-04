import React from "react";
import {FaUserCircle} from 'react-icons/fa';

export default function Avatar({ role }) {
  const base = "avatar";
  if (role === "error") return <div className={`${base} avatar--error`}>!</div>;
  if (role === "user") return <FaUserCircle className={`${base} avatar--user`}/>;
  return <div className={`${base} avatar--ai`}>AI</div>;
}