import { Row, Col, Spinner } from "react-bootstrap"
import Style from './GreenSpinner.module.css'
export default function GreenSpinner(){
  return (
    <Row className="d-flex justify-content-center">
    <Col sm="1">
      <Spinner role="status" animation="grow"
                variant="success" className={Style.greenSpinner} >
      </Spinner>
    </Col>
    </Row>
  )
}