import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = () => {
  const [resources, setResource] = useState([])

  const fetchReseource = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
    setResource(response.data)
  }

  return <div>{resources.length}</div>
}
 
export default ResourceList