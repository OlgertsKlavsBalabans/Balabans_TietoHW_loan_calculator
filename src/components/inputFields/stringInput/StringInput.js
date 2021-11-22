import { useDispatch } from 'react-redux';
import { updateLoanDataProperty } from '../../../state/actions/loanActions/LoanActions';
import './StringInput.css';

export default function StringInput(props) {
    const dispatch = useDispatch();
    let value = "";
    if (props.value){
        value = props.value;
    }
    
    return (
        <div className="StringInput">
          <input className="StrInput" value={value} onChange={(e) => { dispatch(updateLoanDataProperty(props.loanDataProperty, e.target.value)) }}></input>
        </div>
    )
}