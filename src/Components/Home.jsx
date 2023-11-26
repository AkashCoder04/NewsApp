import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import InfiniteScroll from 'react-infinite-scroll-component';
export default function Home(props) {
  var [data, setData] = useState([]);
  var [page, setPage] = useState(1);
  function getApiData() {
    setPage(1)
  axios.get(
        `https://newsapi.org/v2/everything?q=${props.q}&pageSize=24&language=en&apiKey=e467db030f474f7faec4321bec6eea49`
      ).then((result) => setData(result.data.articles));
  }
  function fetchData(){
setPage(page+1)
axios.get(
  `https://newsapi.org/v2/everything?q=${props.q}&pageSize=24&language=en&apiKey=e467db030f474f7faec4321bec6eea49`
).then((result) => setData(result.data.articles));
  }
 
  useEffect(() => {
    getApiData();
  },[props]);
  return (
    <>
      <div className="container">
    <div className="row">
        <h1 className="text-center py-2">{props.q} News</h1>
        <InfiniteScroll
  dataLength={data.length} //This is important field to render the next data
  next={fetchData}
  hasMore={page++}
  loader={ <div className="container text-center"><h4>Loading...</h4></div> }>
        <Card item={data} />
        </InfiniteScroll>
        </div>
      </div>
    </>
  );
}
