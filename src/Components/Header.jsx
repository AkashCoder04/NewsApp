import React,{useState} from 'react'
import { Link } from "react-router-dom";
export default function Header(props) {
var [search,setSearch]=useState("")
function getSearch(e){
  setSearch(e.target.value)
}
function postSearch(e) {
  e.preventDefault()
  props.changeSearch(search)
  setSearch("");
}

  return (
   <>
    <nav className="navbar  navbar-expand-lg bg-dark">
  <div className="container fs-5">
    <Link className="navbar-brand text-light px-3 fs-2" to="/" onClick={()=>setSearch("")}  >Quick__News</Link>
    <button className="navbar-toggler text-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-light"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
          <Link className="nav-link text-light px-3 active" aria-current="page" onClick={()=>setSearch("")} to="/">All News</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light px-3 active" aria-current="page" to="/Education">Education</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link text-light px-3 active" aria-current="page" to="/Politics">Politics</Link>
        </li>
      
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-light px-3" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Other News
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/Sports"> Sports</Link></li>
            <li><Link className="dropdown-item" to="/Science"> Science</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/Technology"> Technology</Link></li>
            <li><Link className="dropdown-item" to="/Education"> Education</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/Covid-19"> Covid-19</Link></li>
            <li><Link className="dropdown-item" to="/World"> World</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/Cricket"> Cricket</Link></li>
            <li><Link className="dropdown-item" to="/ICC-WCT20"> ICC WCT20</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/Jokes"> Jokes</Link></li>
           
           
          </ul>
        </li>
      
      </ul>
      <form className="d-flex" role="search" onSubmit={postSearch}>
        <input className="form-control me-2" type="search" name="search" placeholder="Search" onChange={getSearch} aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
   </>
  )
}
