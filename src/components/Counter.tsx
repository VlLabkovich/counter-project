import React, {useState} from 'react';
import {Button} from "./Button";
import s from "../styles/Counter.module.css"

export const Counter = () => {

    let [counter, setCounter] = useState<number>(0)

    return (
        <div className={s.contentStyled}>
            <div className={s.counterStyled}>
                <div className={s.styledTable}>
                    <h1 className={counter >= 5 ? s.equalFive : s.normalStyle}>
                        {counter}
                    </h1>
                </div>
                <div className={s.styledBtn}>
                    <Button name='INC' onClick={() => setCounter(state => state + 1)} disabled={counter >= 5} className={s.incBtn}/>
                    <Button name='RESET' onClick={() => setCounter(0)} disabled={counter === 0} className={s.resetBtn}/>
                </div>
            </div>
        </div>
    );
};

///// Refactor button disabled //////
// const disabledIncBtn = () => {
//     let count = counter >= 5
//     console.log(count)
//     return count
// }
//
// const disabledResetBtn = () => {
//     let count = counter === 0
//     console.log(count)
//     return count
// }
//
//
// <Button name='INC' onClick={()=> {setCounter(counter + 1)}} disabled={disabledIncBtn()}/>
// <Button name='RESET' onClick={()=> {setCounter(0)}} disabled={disabledResetBtn()}/>


/////  Function counter //////

// const onClickIncHandler = () => {
//     setCounter(counter + 1)
// }

// const onClickResetHandler = () => {
//     setCounter(0)
// }