export default function SearchBar(){
  return (
  <form action="/" method="get">
    <input
        type="text"
        id="header-search"
        placeholder="Search Vulnerabilities"
        name="s" 
    />
    <button type="submit">Search</button>
  </form>)
}