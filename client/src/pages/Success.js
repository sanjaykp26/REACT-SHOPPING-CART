import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Success() {
    const location =useLocation()
    console.log(location);
  return (
    <div
    style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    Order has been created successfully.
    <Link to="/"><button  style={{ padding: 10, marginTop: 20 ,color:"blue"}}>Go to Homepage</button></Link>
  </div>
  )
}

export default Success