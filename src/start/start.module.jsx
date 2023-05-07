import { useRef ,useState } from "react";
import "./start.scss";
export function Start() {
  const [player1, setplayer1] = useState(0);
  const [player2,setplayer2]=useState(0)
  const useRefResultPlayer1 = useRef();
  const useRefResultPlayer2=useRef()

  function resultplayer1() {

    setplayer1(player1+1)
    useRefResultPlayer1.current.textContent=player1
  }
  function resultplayer2(){
setplayer2(player2+1)
useRefResultPlayer2.current.textContent=player2

  }
  return (
    <>
      <div className="container">
        {/* //gemer1  */}
        <div className="header">
          <button
            className="button btn1"
            style={{ marginTop: 20 }}
            onClick={resultplayer1}
          >
            get
          </button>
          <h2 ref={useRefResultPlayer1}>{player1}</h2>
        </div>
        {/* gemer 2 */}
        <div className="footer">
          <h2 ref={useRefResultPlayer2}>nomber:2</h2>
          <button className="button" style={{ marginBottom: 20 } } onClick={resultplayer2}>
            get
          </button>
        </div>
      </div>
    </>
  );
}
