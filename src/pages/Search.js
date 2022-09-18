import { React, useEffect, useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { default as SearchBar } from "./../components/SearchBar";
import { default as Logo } from "./../components/Logo"
import { default as GreenSpinner } from "./../components/GreenSpinner"
import { default as ErrorMessage } from "./../components/ErrorMessage"
import NextBackButtons from "../components/NextBackButtons";
const Search = () => {
  const [status, setStatus] = useState('');
  const [list, setList] = useState('');
  const windowUrl = window.location.search;
  const params = new URLSearchParams(windowUrl);
  const backendUrl = 'http://localhost:5000/search'
  const frontendUrl = 'http://localhost:3000/search'
  const max_results = 20;

  useEffect(()=> { fetchBackend(params) }, []);

  function fixParameters(url){
    for (const [key, value] of params) {
      if(!((value==='Any' || value === '') ||
           ((key === 'exploitability' || key === 'impactScore' ) && value === "0")
           ) || key === "s")
        url.searchParams.append(key, value)
    }
  }

  function fetchBackend(params){
    const searchUrl = new URL(backendUrl);
    fixParameters(searchUrl)
    setStatus('Loading');
    fetch(searchUrl)
      .then(response => response.json())
      .then(setList)
      .then(()=>setStatus('Success'))
      .catch((e)=> {
        setStatus('Error')
        console.error(e)
      });
    }

  return (
    <Container fluid>
      <Row mt="1" className="align-items-center">
        <Col sm="5" l="4" xl="3"><Logo /></Col>
        <Col sm="7" l="8" xl="9"><SearchBar params={params}/></Col>
      </Row>
      <br></br>
      {status === 'Loading' && 
        <GreenSpinner/>}
      {status === 'Error' &&
        <ErrorMessage/>}
      {status === 'Success'&&

      <Table hover>
        <thead><tr>
          <th>Id</th>
          <th>description</th>
          <th>assigner</th>
          <th>impact score</th>
        </tr></thead>
        <tbody>
          {list.map((val, key) => (
              <tr key={key}>
              <td><a href={"https://nvd.nist.gov/vuln/detail/"+val.id}>{val.id}</a></td>
              <td>{val.description}</td>                          
              <td>{val.assigner}</td>
              <td>{val.impactScore}</td>
              </tr>
          ))}
        </tbody>
        
      </Table>
      }
      <NextBackButtons url={frontendUrl} n_results={list.length} max_results={max_results}/>
    </Container>
  );
};
  
export default Search;