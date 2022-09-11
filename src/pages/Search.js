import { React, useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { default as SearchBar } from "./../components/SearchBar";
import { default as Logo } from "./../components/Logo"
import { default as GreenSpinner } from "./../components/GreenSpinner"
import { default as ErrorMessage } from "./../components/ErrorMessage"
import { default as SearchResult } from "./../components/SearchResult"
const Search = () => {
  const [status, setStatus] = useState('');
  const [list, setList] = useState('');

  useEffect(()=>{
    setStatus('Loading');
    fetch('http://localhost:5000/search')
      .then(response => response.json())
      .then(setList)
      .then(()=>setStatus('Success'))
      .catch((e)=> {
        setStatus('Error')
        console.error(e)}
        );
   }, []);

  return (
    <Container fluid>
      <Row mt="1" className="align-items-center">
        <Col sm="5" l="4" xl="3"><Logo /></Col>
        <Col sm="7" l="8" xl="9"><SearchBar /></Col>
      </Row>
      <br></br>
      {status === 'Loading' && 
        <GreenSpinner/>}
      {status === 'Error' &&
        <ErrorMessage/>}
      {status === 'Success'&&

      <Table hover>
        <thead><tr>
          <th>Name</th>
          <th>Type</th>
          <th>Info</th>
        </tr></thead>
        <tbody>
          {list.map(result => (
            <SearchResult name={result.name} type={result.type}
                          info={result.info} link={result.link}/>
          ))}
        </tbody>
        
      </Table>
      }
    </Container>
  );
};
  
export default Search;