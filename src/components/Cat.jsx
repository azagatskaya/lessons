import "./Cat.scss";

function Cat(props) {
  return (
    <div className="cat-card">
      <img src={props.url} alt="img"></img>
      <div className="cat-name">{props.name}</div>
      <div className="cat-text">
        Замечательный ласковый котик станет украшением вашего дома
      </div>
      <button className="cat-btn">Взять домой</button>
    </div>
  );
}

export default Cat;
