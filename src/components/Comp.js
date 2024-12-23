import React from 'react'

export default function Comp({title,data}) {
  return (
    <>
       <div style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "20px",
        padding: "20px",
       }}>
       <h3 style={{
        paddingBottom:"70px",
       }}>{title}</h3>
        <img src="./chart.png" alt="" width="100px" height="100px"/>
       <p style={{
        marginTop:"10px"
       }}>{data}</p>
       </div>
    </>
  )
}
