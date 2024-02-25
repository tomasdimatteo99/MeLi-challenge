"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import style from "./SearchBar.module.scss";
import { useSearchParams } from "next/navigation";

export default function SearchBar(){
  const [query, setQuery] = useState('');
  const searchParams = useSearchParams();
  const search = searchParams?.get("search");

  useEffect(() => {
    if (search) {
      setQuery(search);
    }
  }, [search]);

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
