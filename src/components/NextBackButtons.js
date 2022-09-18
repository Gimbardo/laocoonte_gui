import { Col, Row, Button } from 'react-bootstrap'
import UrlHelper from '../utils/UrlHelper'

export default function NextBackButtons(props){

  const windowUrl = window.location.search;
  const params = new URLSearchParams(windowUrl);
  const actualPage = params.get('page')

  let nextPath = new URL(props.url)
  UrlHelper.fixParameters(nextPath, params)
  nextPath.searchParams.delete('page')
  nextPath.searchParams.append('page', Number(params.get('page'))+1)

  let backPath= new URL(props.url)
  UrlHelper.fixParameters(backPath, params)
  backPath.searchParams.delete('page')
  backPath.searchParams.append('page', Number(params.get('page'))-1)

  const backButton = () => {
    if(Number(actualPage) > 1)
      return <Col md='1'><Button href={backPath.toString()} variant="success">Back</Button></Col>
  }

  const nextButton = () => {
    if(props.n_results === props.max_results)
      return <Col md='1'><Button href={nextPath.toString()} variant="success">Next</Button></Col>
  }

  return(
    <Row>
      { backButton() }
      { nextButton() }
    </Row>
  )
}