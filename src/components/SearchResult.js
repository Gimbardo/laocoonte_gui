import { Alert, Col } from "react-bootstrap"
export default function SearchResult(props){

  return (
    <tr>
      <td><a href={props.link}>{props.name}</a></td>
      <td>{props.type}</td>
      <td>{props.info}</td>
    </tr>
  )
}