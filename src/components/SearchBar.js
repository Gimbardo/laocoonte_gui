import { FormControl, FormLabel, FormSelect } from 'react-bootstrap'
import { Button, Row, Col, Fade } from 'react-bootstrap'
import { useState } from 'react'
import { Form, Collapse } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import FormRange from 'react-bootstrap/esm/FormRange'
export default function SearchBar(props){
  const attackVector = ['Any', 'Network', 'Adjacent', 'Local', 'Physical'  ]
  const attackComplexity= ['Any', 'Low', 'High' ]
  const privilegesRequired = [ 'Any', 'None', 'Low', 'High' ]
  const userInteraction = [ 'Any', 'None', 'Required' ]
  const scope = [ 'Any', 'Unchanged', 'Changed' ]
  const confidentiality = [ 'Any', 'None', 'Low', 'High' ]
  const integrity = [ 'Any', 'None', 'Low', 'High' ]
  const availability = [ 'Any', 'None', 'Low', 'High' ]
  
 const advancedOptions = [ 
  { name: 'attackVector', values: attackVector},
  { name: 'attackComplexity', values: attackComplexity},
  { name: 'privilegesRequired', values: privilegesRequired},
  { name: 'userInteraction', values: userInteraction},
  { name: 'scope', values: scope},
  { name: 'confidentiality', values: confidentiality},
  { name: 'integrity', values: integrity},
  { name: 'availability', values: availability}]

  const startingImpact = props.params.get('impact') ? props.params.get('impact') : '0'
  const startingExploitability = props.params.get('exploitability') ? props.params.get('exploitability') : '0'
  const [impact, setImpact] = useState(startingImpact)
  const [exploitability, setExploitability] = useState(startingExploitability)
  const handleImpact = ev => setImpact(ev.target.value);
  const handleExploitability = ev => setExploitability(ev.target.value);
  
  const [open, setOpen] = useState(false);

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
        <Row>
          <Col lg="3" md="6" sm="12">
            <FormLabel>
              Minimum Exploitability: {exploitability/10}
            </FormLabel>
            <FormRange
              defaultValue={exploitability}
              max="100"
              variant="success"
              name="exploitability"
              onChange={handleExploitability}
            ></FormRange>
          </Col>
          <Col lg="3" md="6" sm="12">
            <FormLabel>
              Minimum Impact: {impact/10}
            </FormLabel>
            <FormRange
              defaultValue={impact}
              max="100"
              name="impact"
              onChange={handleImpact}
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
              Issuer
            </FormLabel>
            <FormControl
              size="lg"
              type="text"
              id="issue"
              placeholder="Search Issuer"
              defaultValue={props.params.get('issuer')}
              name="issuer" 
            />
          </Col>
        </Row>
        </Collapse>

      </Form>
      
    </Container>
  )
}