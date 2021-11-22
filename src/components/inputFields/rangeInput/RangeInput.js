import { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateLoanDataProperty } from "../../../state/actions/loanActions/LoanActions";
import './RangeInput.css';


export default function RangeInput(props) {
    const dispatch = useDispatch();
    const rangeInputRef = useRef(null);
    let min = 1;
    let max = 100;
    let value = 0;
    let step = 1;
    if (props.step) {
        step = props.step;
    }
    if (props.min) {
        min = props.min;
    }
    if (props.max) {
        max = props.max;
    }
    if (props.value) {
        value = props.value;
    }
    if (props.step) {
        step = props.step;
    }
    if (rangeInputRef.current){
        rangeInputRef.current.style.backgroundSize = (value - min) * 100 / (max - min) + '% 100%';
    }
    return (
        <div className="RangeInput">
            <input className="RngInput" ref={rangeInputRef} type="range" step={step} min={min} max={max} value={value} onChange={(e) => {
                dispatch(updateLoanDataProperty(props.loanDataProperty, parseFloat(e.target.value)));
            }}></input>
            <input className="NmbrInput" type="number" step={step} value={value} onChange={(e) => dispatch(updateLoanDataProperty(props.loanDataProperty, parseFloat(e.target.value)))}></input>
        </div>
    )
}