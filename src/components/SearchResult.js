const getTableRowClass= (impactScore) => {
  console.log(impactScore)
  if(Number(impactScore) < 3.3 || impactScore === undefined)
    return "table-default"
  if(Number(impactScore) < 6.6)
    return "table-warning"
  return "table-danger"
}

export default function SearchResult(props){
return <tr class={getTableRowClass(props.val.impactScore)} key={props.key}>
          <td><a href={"https://nvd.nist.gov/vuln/detail/"+props.val.id}>{props.val.id}</a></td>
          <td>{props.val.description}</td>                          
          <td>{props.val.assigner}</td>
          <td>{props.val.impactScore}</td>
        </tr>
}