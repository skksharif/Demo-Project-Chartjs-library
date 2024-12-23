import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export default function Dn({title,data}) {

    

  return (
    <> <h3>{title}</h3>
       <Doughnut data={data} />
    </>
  )
}
