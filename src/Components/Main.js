import { React, useState } from "react";

export default function Main() {
  const [Value, setValue] = useState("O");
  const [isGameOver, setIsGameOver] = useState(false);
  const [imgWidth, setImgWidth] = useState(0);
  const [elementList, setElementList] = useState();

  const resetGame = () => {
    setValue(Value);
    setIsGameOver(false);
    setImgWidth(0);
    const inputs = document.querySelectorAll(".my-input");
    Array.from(inputs).map((input) => (input.value = ""));
    elementList.map((elem) => {
      elem.style.backgroundColor = "";
      elem.style.boxShadow = "";
    });
  };

  const changeTurn = () => {
    if (Value === "O") {
      setValue("X");
    } else {
      setValue("O");
    }
  };

  const setBoxShadowToWin = (id1, id2, id3) => {
    const element1 = document.getElementById(`${id1}`);
    const element2 = document.getElementById(`${id2}`);
    const element3 = document.getElementById(`${id3}`);
    const arr = [element1, element2, element3];
    arr.map((cols) => {
      cols.style.backgroundColor = "#79d1fa96";
      cols.style.boxShadow =
        "0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35)";
    });
    setElementList([element1, element2, element3]);
  };

  //function to check the win player
  const checkWiner = (e) => {
    let boxtext = document.getElementsByClassName("textBox");
    let wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    wins.forEach((e) => {
      if (
        boxtext[e[0]].value === boxtext[e[1]].value &&
        boxtext[e[1]].value === boxtext[e[2]].value &&
        boxtext[e[0]].value !== ""
      ) {
        setIsGameOver(!isGameOver);
        setImgWidth(23);
        setBoxShadowToWin(e[0], e[1], e[2]);
      }
    });
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      e.target.value = Value;
      changeTurn();
      checkWiner(e);
    }
  };

  return (
    <>
      <div className="mainDiv">
        <h2 className="text-center head pt-4">Welcome to MyTicTacToe</h2>
        <div className="container d-lg-flex justify-content-lg-evenly py-5">
          <div className="d-flex justify-content-center justify-content-lg-between">
            <div className="main row mx-1">
              <div id="0" className="col-4 boxShadow">
                <input
                  type="text"
                  name="value"
                  className="box text-center textBox my-input"
                  onClick={handleOnClick}
                />
              </div>
              <div
                id="1"
                className="col-4 border-start border-end border-info boxShadow"
              >
                <input
                  type="text"
                  className="box text-center textBox my-input"
                  onClick={handleOnClick}
                />
              </div>
              <div id="2" className="col-4 boxShadow">
                <input
                  type="text"
                  className="box text-center textBox my-input"
                  onClick={handleOnClick}
                ></input>
              </div>
              <div
                id="3"
                className="col-4 border-top border-bottom border-info boxShadow"
              >
                <div className="">
                  <input
                    type="text"
                    className="box text-center textBox my-input"
                    onClick={handleOnClick}
                  />
                </div>
              </div>
              <div id="4" className="col-4 border border-info boxShadow">
                <div className="">
                  <input
                    type="text"
                    className="box text-center textBox my-input"
                    onClick={handleOnClick}
                  ></input>
                </div>
              </div>
              <div
                id="5"
                className="col-4 border-top border-bottom border-info boxShadow"
              >
                <div className="">
                  <input
                    type="text"
                    className="box text-center textBox my-input"
                    onClick={handleOnClick}
                  ></input>
                </div>
              </div>
              <div id="6" className="col-4 boxShadow">
                <div className="">
                  <input
                    type="text"
                    className="box text-center textBox my-input"
                    onClick={handleOnClick}
                  ></input>
                </div>
              </div>
              <div
                id="7"
                className="col-4 border-start border-end border-info boxShadow"
              >
                <div className="">
                  <input
                    type="text"
                    className="box text-center textBox my-input"
                    onClick={handleOnClick}
                  ></input>
                </div>
              </div>
              <div id="8" className="col-4 boxShadow">
                <div className="">
                  <input
                    type="text"
                    className="box text-center textBox my-input"
                    onClick={handleOnClick}
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex mt-5 justify-content-center justify-content-lg-between ">
            <div className="winnerBox text-center mx-md-4 mx-lg-5">
              <img
                src="./images/excited.jpg"
                className="img rounded"
                style={{
                  width: `${imgWidth}vh`,
                  transition: "width 0.5s ease-in-out",
                }}
              />
              {isGameOver ? (
                <div className="mt-4 h4 Text">Won the match</div>
              ) : null}
            </div>
            <div className="text-center mx-4 mx-md-5">
              <button
                className="buttons btn btn-outline-dark"
                onClick={resetGame}
              >
                Reset
              </button>
              <div className="h5 mt-4 Text">Turn for {Value}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
