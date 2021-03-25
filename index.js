import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import'./index.css';
import Sdata from './sdata';

//console.log(Sdata[0].sname);

function ncard(val){
  //console.log(val);
return(
  <Card
  className="randome_class"
  imgsrc={val.imgsrc}
  title={val.title}
  sname={val.sname}
  href={val.Sdata}
/>
);
}

ReactDOM.render(
  <>
  <h1 className="heading_style">List of Top 3 Netflix Series 2020</h1>

{Sdata.map(ncard)};

</>,
document.getElementById("root"));