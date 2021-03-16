import React from 'react';
import ReactDOM from 'react-dom';

function Card(props){
  console.log(props);
  return(
<>

    

    <div className="cards">
      <div className="card ">
        <img src="https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_.jpg" alt="myPic" className="card_img"/>
        <div className="card__info">
          <span className="card__category">A Netflix Original Series.</span>
          <h3 className="card_title"> Dark</h3>
          <a href="https://www.netflix.com/np/title/80100172" target= "_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>

  </> )
}

ReactDOM.render(
  <>
{/* <Card
  imgsrc="https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_.jpg"
  title="Netflix Original Series."
  sname="Dark"
  href="https://www.netflix.com/np/title/80100172"
  button="Watch Now"
/> */}
<Card/>
<Card/>
</>,
document.getElementById("root"));