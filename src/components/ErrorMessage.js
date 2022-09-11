import { Alert, Col, Row } from "react-bootstrap"
export default function ErrorMessage(){
  return (
    <Row className="d-flex justify-content-center">
      <Col sm="4">
        <Alert variant="danger">Error Fetching Data</Alert>
      </Col>
    </Row>
  )
}