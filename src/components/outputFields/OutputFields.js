import { useSelector } from 'react-redux';
import './OutputFields.css';

export default function OutputFields(props) {

    const loan = useSelector((state) => state.loan);

    return (
        <div className="OutputFields">
            <div className="OutputField">
                <h2>Mēneša maksājums: </h2>
                <h2>{loan.monthlyPayment.toFixed(0)}</h2>
            </div>

            <div className="OutputField">
                <h2>Procentu maksājumu apjoms:</h2>
                <h2>{loan.additionalPercentPayment.toFixed(0)}</h2>
            </div>
        </div>
    )
}