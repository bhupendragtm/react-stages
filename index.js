import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import'./index.css';
import $data from './sdata';

console.log($data[0]);

ReactDOM.render(
  <>
  <h1 className="heading_style">List of Top 3 Netflix Series 2020</h1>
<Card
  imgsrc="https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_.jpg"
  title="Netflix Original Series."
  sname="Dark"
  href="https://www.netflix.com/np/title/80100172"
/>
<Card
 imgsrc="https://uproxx.com/wp-content/uploads/2016/12/bojack_horseman_s03e04_19m55s2391f.jpeg"
  title="Netflix Original Series."
  sname="BoJack Horseman"
  href="https://www.youtube.com/watch?v=i1eJMig5Ik4"
/>
<Card
  imgsrc="https://uproxx.com/wp-content/uploads/2020/08/ozark-bateman-garner-feat.jpg"
  title="Netflix Original Series."
  sname="Stranger Things"
  href="https://www.youtube.com/watch?v=mnd7sFt5c3A"
/>
</>,
document.getElementById("root"));