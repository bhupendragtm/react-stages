import React from 'react';
import ReactDOM from 'react-dom';

function Card(props){
  console.log(props);
  return(
<>

    

    <div className="cards">
      <div className="card ">
        <img src={props.imgsrc} className="card_img"/>
        <div className="card__info">
          <span className="card__category">{props.title}</span>
          <h3 className="card_title">{props.sname}</h3>
          <a href={props.href} target= "_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>

  </> );
}

ReactDOM.render(
  <>
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