import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { default as SearchBar } from "./../components/SearchBar";
import { default as Logo } from "./../components/Logo"
import { default as GreenSpinner } from "./../components/GreenSpinner"
import { default as ErrorMessage } from "./../components/ErrorMessage"
import { default as SearchResult } from "./../components/SearchResult"
const Search = () => {
  const [status, setStatus] = useState('');
  const [list, setList] = useState('');
  const windowUrl = window.location.search;
  const params = new URLSearchParams(windowUrl);
  const backendUrl = 'http://localhost:5000/search'
  let nextPath= new URL("http://localhost:3000/search")
  for (const [key, value] of params) {
    nextPath.searchParams.append(key, value)
  }
  nextPath.searchParams.delete('page')
  nextPath.searchParams.append('page', Number(params.get('page'))+1)

  useEffect(()=> { fetchBackend(params) }, []);

  function fetchBackend(params){
    const searchUrl = new URL(backendUrl);
    for (const [key, value] of params) {
      searchUrl.searchParams.append(key, value)
    }
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
        <Col sm="7" l="8" xl="9"><SearchBar searched={params.get('s')}/></Col>
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
        </tr></thead>
        <tbody>
          {list.map((val, key) => (
              <tr key={key}>
                <td>{val.id}</td>
                <td>{val.description}</td>                          
                <td>{val.assigner}</td>
              </tr>
          ))}
        </tbody>
        
      </Table>
      }
      <Button href={nextPath.toString()} variant="success">Next</Button>
    </Container>
  );
};
  
export default Search;