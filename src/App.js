import React,{useState} from 'react'
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import "./Styles/App.css"
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
function App() {
  var [search,setSearch]=useState("")
  function changeSearch(data) {
    setSearch(data)
  }
  return (
    <>
    <Router>
    <Header changeSearch={changeSearch}/>
    <Routes>
      <Route path="/" element={<Home q="All"  search={search}/>}/>
      <Route path="/Education" element={<Home q="Education" search={search}/>}/>
      <Route path="/Politics" element={<Home q="Politics" search={search}/>}/>
      <Route path="/Sports" element={<Home q="Sports" search={search}/>}/>
      <Route path="/Science" element={<Home q="Science" search={search}/>}/>
      <Route path="/Technology" element={<Home q="Technology" search={search}/>}/>
      <Route path="/Education" element={<Home q="Education" search={search}/>}/>
      <Route path="/Covid-19" element={<Home q="Covid-19" search={search}/>}/>
      <Route path="/World" element={<Home q="World" search={search}/>}/>
      <Route path="/Cricket" element={<Home q="Cricket" search={search}/>}/>
      <Route path="/ICC-WCT20" element={<Home q="ICC-WCT20" search={search}/>}/>
      <Route path="/Jokes" element={<Home q="Jokes" search={search}/>}/>
    
    </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
