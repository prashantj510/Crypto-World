import React, { useState } from "react";
import "./../Components/CoinSearch.css";

import CoinItem from "./CoinItem";

const CoinSearch = ({ coins }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="rounded-div my-4 ">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right items-center ">
        <h1 className=" font-bold text-2xl my-2">Search Coin</h1>
        <form className="">
          <div className="form__group field ">
            <input
              type="input"
              className="form__field  !dark:text-light !w-full "
              placeholder="Search Coin"
              required=""
              onChange={(e) => setSearchText(e.target.value)}
            />
            <label htmlFor="coin" className="form__label ">
              Search
            </label>
          </div>
        </form>
      </div>
      <table className=" w-full border-collapse text-center">
        <thead>
          <tr className=" border-b">
            <th></th>
            <th className=" px-4">#</th>
            <th className=" text-left">Coin</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>24h</th>
            <th className=" hidden md:table-cell ">24h Volume</th>
            <th className=" hidden sm:table-cell">Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins
            .filter((value) => {
              if (searchText === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return value
              }
              return false
            })
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearch;
