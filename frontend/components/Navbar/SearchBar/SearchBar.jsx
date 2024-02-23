"use client"

import Link from "next/link";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import style from "./SearchBar.module.scss";

export default function SearchBar(){
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/items?search=${query}`);
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSearch} className={style.formStyle}>
      <input
        type="text"
        value={query}
        placeholder="Nunca dejes de buscar"
        onChange={handleChange}
        className={style.inputStyle}
      />
      <Link href={`/items?search=${query}`}>
        <button type="submit" className={style.buttonStyle}>
          <CiSearch className={style.icoSize} />
        </button>
      </Link>
    </form>
  );
};
