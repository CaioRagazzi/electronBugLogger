import React from 'react'
import Button from "react-bootstrap/Button/";
import Badge from "react-bootstrap/Badge";
import Moment from "react-moment";

const LogItem = (props) => {

  const setVariant = () => {
    if (props.log.priority === 'high') {
      return 'danger'
    } else if (props.log.priority === 'moderate') {
      return 'warning'
    } else {
      return 'success'
    }
  }

  return (
    <tr>
      <td>
        <Badge variant={setVariant()} className='p-2'>
          {props.log.priority.charAt(0).toUpperCase() + props.log.priority.slice(1)}
        </Badge>
      </td>
      <td>{props.log.text}</td>
      <td>{props.log.user}</td>
      <td>
        <Moment format='MMMM Do YYYY, h:mm:ss a'>
          {new Date(props.log.created)}
        </Moment>
      </td>
      <td>
        <Button variant='danger' size='sm' onClick={() => props.deleteItem(props.log._id)}>
          X
        </Button>
      </td>
    </tr>
  )
}

export default LogItem
