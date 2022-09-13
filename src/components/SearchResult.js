import { Alert, Col } from "react-bootstrap"
export default function SearchResult(props){

  return (
    <tr key={key}>
              <td>{props.id}</td>
              <td>{props.description}</td>                          
              <td>{props.assigner}</td>
              </tr>
  )
}