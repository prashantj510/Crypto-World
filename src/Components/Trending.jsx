import axios from "axios";
import React, { useEffect, useState } from "react";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const url = "https://api.coingecko.com/api/v3/search/trending";

  useEffect(() => {
    const fetchTrendingData = async () => {
      const response = await axios.get(url);
      setTrending(response.data.coins);
      console.log(response.data);
      // console.log(coins.item.coin_id);
      
    };
    fetchTrendingData();
  }, []);

  return (
    <div className="my-10 mx-10">
      <h1 className="text-2xl font-bold py-4"> Trending </h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {trending.map((coin) => (
          <div key={coin.item.coin_id}>
           
          <div className='rounded-div flex justify-between p-4 hover:scale-105 ease-in-out duration-300'>
            <div className='flex w-full items-center justify-between'>
              <div className='flex'>
                <img className="rounded-full px-2 " src={coin.item.small} alt='coin' />
                <div>
                  <p className='font-bold'>{coin.item.name}</p>
                  <p>{coin.item.symbol }</p>
                </div>
              </div>
              <div className='flex items-center'>
                <img
                  className='w-4 mr-2'
                  src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                  alt='bitcoin' />
                <p>{coin.item.price_btc.toFixed(7)}</p>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
