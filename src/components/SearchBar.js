import { useLocation, useNavigate } from "react-router-dom";
  
export default function SearchBar(){

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `newPath`; 
    navigate(path);
  }
  return (
  <form action="/search" method="get">
    <input
        type="text"
        id="header-search"
        placeholder="Search Vulnerabilities"
        name="s" 
    />
    <button type="submit">Search</button>
  </form>)
}