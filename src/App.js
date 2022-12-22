import Cryptolist from "./components/Cryptolist/Cryptolist";
import { useEffect, useState } from "react";
import axios from 'axios'
import './index.css'
import Pagination from "./components/Pagination/Pagination";
function App() {

  const [coinsData,setCoinsData]=useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const [postPerPage,setPostPerPage]=useState(10);

  useEffect( ()=>{
    const fetchData =async  ()=>{
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        
      );
      setCoinsData(response.data);
    }
    fetchData();
    
  },[]);

  const lastIndex=currentPage*postPerPage;
  const firstIndex=lastIndex-postPerPage;
  const currentPosts=coinsData.slice(firstIndex,lastIndex);
  return (
    <div className="App">
      <h1 style={{color:"black", textAlign:"center"}}>CryptoCurrency Gallery</h1>
      <hr></hr>
      <Cryptolist 
          coinsData={currentPosts}
      />
      <Pagination
          totalPosts={coinsData.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          postsPerPage={postPerPage}  
      />
    </div>
  );
}

export default App;
