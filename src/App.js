import { useState } from "react";
import "./App.css";
import { Board }  from "./components/Board";
import { BoardWS } from "./components/BoardWS";
import { Buttons } from "./components/Buttons"
import {Inputs} from "./components/Inputs"
function App(){

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [res, setRes] = useState(0);
    const w = "weight";
    const h = "height";
    let stat = weightStatus()

    function first(e) {
        setNum1(e.target.value);
        setRes(parseInt(e.target.value) + parseInt(num2))
    }

    function second(e) {
        setNum2(e.target.value);
        setRes(parseInt(e.target.value) / parseInt((num1*num1) / 10000))


    }
 
    function resetButton() {
        setNum1(0);
        setNum2(0);
        setRes(null);

    }

    function weightStatus() {
        if(res === null){
            return null;
        }else if(res <= 18.5){
            return "Underweight";
        }else if(res > 18.5 && res <= 24.9){
            return "Normal Weight";
        }else if(res > 24.9 && res <= 29.9){
            return "Overweight";
        }else if(res > 29.9 && res <= 34.9){
            return "Obesity class 1";
        }else if(res > 34.9 && res <= 39.9){
            return "Obesity class 2";
        }else{
            return "Obesity class 3";
        }
    }


    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-5 col-xl-5 col-lg-5 col-md-5">
                <Board res = {res}/>
                <BoardWS stat={stat} />
                

                <Inputs metric={h} fun={first} value={num1}/> <br />
                <Inputs metric={w} fun={second} value={num2}/> <br />

                <Buttons resetButton={resetButton} />
                </div>
            </div>
        </div>
    );
}

export default App;
