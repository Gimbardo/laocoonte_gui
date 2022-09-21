import { FormControl, FormLabel, FormSelect } from 'react-bootstrap'
import { Button, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import { Form, Collapse } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import FormRange from 'react-bootstrap/esm/FormRange'
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css";

export default function SearchBar(props){
  const attackVector = ['Any', 'Network', 'Adjacent_Network', 'Local', 'Physical'  ]
  const attackComplexity= ['Any', 'Low', 'High' ]
  const privilegesRequired = [ 'Any', 'None', 'Low', 'High' ]
  const userInteraction = [ 'Any', 'None', 'Required' ]
  const confidentiality = [ 'Any', 'None', 'Low', 'High' ]
  const integrity = [ 'Any', 'None', 'Low', 'High' ]
  const availability = [ 'Any', 'None', 'Low', 'High' ]
  
 const advancedOptions = [ 
  { name: 'attackVector', values: attackVector},
  { name: 'attackComplexity', values: attackComplexity},
  { name: 'privilegesRequired', values: privilegesRequired},
  { name: 'userInteraction', values: userInteraction},
  { name: 'confidentiality', values: confidentiality},
  { name: 'integrity', values: integrity},
  { name: 'availability', values: availability}]

  const startingImpactScore = props.params.get('impactScore') ? props.params.get('impactScore') : '0'
  const startingExploitabilityScore = props.params.get('exploitabilityScore') ? props.params.get('exploitabilityScore') : '0'
  const [impactScore, setImpactScore] = useState(startingImpactScore)
  const [exploitabilityScore, setExploitabilityScore] = useState(startingExploitabilityScore)
  const handleImpactScore = ev => setImpactScore(ev.target.value);
  const handleExploitabilityScore = ev => setExploitabilityScore(ev.target.value);
  
  const [open, setOpen] = useState(false);
  const startMinDate = props.params.get('publishDateMin') ? new Date(props.params.get('publishDateMin')) : ''
  const [minDate, setMinDate] = useState(startMinDate);
  const startMaxDate = props.params.get('publishDateMax') ? new Date(props.params.get('publishDateMax')) : ''
  const [maxDate, setMaxDate] = useState(startMaxDate);

  return (
    <Container>
      <Form action="/search" method="get">
        <FormControl
          size="lg"
          hidden={true}
          id="page"
          defaultValue={1}
          name="page" 
        />
        <Row>
          <InputGroup>
            <FormControl
              size="lg"
              type="text"
              id="header-search"
              placeholder="Search Vulnerabilities"
              defaultValue={props.params.get('s')}
              name="s" 
            />
            <Button
              size="lg"
              variant="success"
              type="submit">
              Search
            </Button>
          </InputGroup>
        </Row>
        <br></br>
        <Row>
          <Button
            variant='success'
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="fadeID"
            >
            Advanced Options
          </Button>
        </Row>
        <Collapse in={open}>
        <Row className="mt-3">
          <Col lg="3" md="6" sm="12">
            <FormLabel>
              Minimum Exploitability Score: {exploitabilityScore}
            </FormLabel>
            <FormRange
              defaultValue={exploitabilityScore}
              max="10"
              variant="success"
              name="exploitabilityScore"
              onChange={handleExploitabilityScore}
            ></FormRange>
          </Col>
          <Col lg="3" md="6" sm="12">
            <FormLabel>
              Minimum Impact Score: {impactScore}
            </FormLabel>
            <FormRange
              defaultValue={impactScore}
              max="10"
              name="impactScore"
              onChange={handleImpactScore}
            ></FormRange>
          </Col>
          { advancedOptions.map((value, i)=>{
              return <Col lg="3" md="6" sm="12">
              <FormLabel>
                {value.name}
              </FormLabel>
              <FormSelect
                size="lg"
                id={value.name}
                placeholder="Search Severity"
                defaultValue={props.params.get(value.name)}
                name={value.name}
              >
                {value.values.map((val, i) => {
                  return <option>{val}</option>
                })}
              </FormSelect>
            </Col>
            })
          }
          <Col lg="3" md="6" sm="12">
            <FormLabel>
              Assigner
            </FormLabel>
            <FormControl
              size="lg"
              type="text"
              id="assigner"
              placeholder="Search Assigner"
              defaultValue={props.params.get('assigner')}
              name="assigner" 
            />
          </Col>
          <Col lg="3" md="6" sm="12">
            <FormLabel>
              Minimum Publish Date
            </FormLabel>
            <DatePicker 
              placeholderText="Minimum Publish Date"
              name="publishDateMin"
              id="publishDateMin"
              className="form-select form-select-lg"
              selected={minDate}
              onChange={(date) => setMinDate(date)}
              dateFormat="yyyy-MM-dd"/>
          </Col>
          <Col lg="3" md="6" sm="12">
            <FormLabel>
              Maximum Publish Date
            </FormLabel>
            <DatePicker
              placeholderText="Maximum Publish Date"
              name="publishDateMax"
              id="publishDateMax"
              className="form-select form-select-lg"
              selected={maxDate}
              onChange={(date) => setMaxDate(date)}
              dateFormat="yyyy-MM-dd"/>
          </Col>
          
        </Row>
        </Collapse>

      </Form>
    </Container>
  )
}