import s from './App.module.css';

const App = () => {

    let onCircleMove = (e) => {
    let ball = document.getElementById('ball')
    const opposite = getOppositeCoords(e.pageX, e.pageY);
    ball.style.left = opposite.x + 'px';
    ball.style.top = opposite.y + 'px';
  };

  let getOppositeCoords = (x, y) => {
    const center = {x: 300, y: 300};
    const coords = {x: x - center.x, y: y - center.y}; // координаты относительно центра
    const r = Math.sqrt(coords.x*coords.x + coords.y*coords.y); // расстояние, теорема пифагора
    const max = 260; // максимальное отдаление от центра (радиус большого круга минус радиус малого) 
    const ratio = max / r; // отношение максимального отдаления к текущему 
    const oppX = center.x - coords.x * ratio;
    const oppY = center.y - coords.y * ratio;
    return {x: oppX, y: oppY};
  }
  return (
    <div className={s.wrapper}>
      <div className={s.circle} onMouseMove={onCircleMove}> 
        <div className={s.ball} id='ball'/> 
      </div>
    </div>
  );
}

export default App;

