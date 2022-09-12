import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
export default function SearchBar(props){
  return (
    <Container>
      <Form action="/search" method="get">
      <InputGroup>
        <FormControl
          size="lg"
          type="text"
          id="header-search"
          placeholder="Search Vulnerabilities"
          defaultValue={props.searched}
          name="s" 
        />
        <Button
          size="lg"
          variant="success"
          type="submit">
            Search
        </Button>
        </InputGroup></Form>
    </Container>
  )
}