
const initialState = {
    loanName: "",
    loanAmount: 0,
    loanTime: 0,
    loanPercent: 0,
    monthlyPayment: 0,
    additionalPercentPayment: 0,
};

function calculatePayements(state) {
    let monthlyInterestRate = (state.loanPercent * 0.01) / 12;
    // Monthy payment calculated from formula
    let monthlyPayment = 0; 
    if (monthlyInterestRate===0) {
        monthlyPayment = state.loanAmount/ state.loanTime;
    } else {
        monthlyPayment = state.loanAmount / ((Math.pow((1 + monthlyInterestRate), state.loanTime) - 1) / (monthlyInterestRate * Math.pow((1 + monthlyInterestRate), state.loanTime)));
    }
    let loanSum = monthlyPayment * state.loanTime;
    let additionalPercentPayment = loanSum - state.loanAmount;
    return [monthlyPayment, additionalPercentPayment]
}

const LoanReducer = (state = initialState, action) => {
    switch (action.type) {
        case "updateLoanData":
            return action.payload
        case "updateLoanDataProperty":
            state[action.propertyName] = action.propetyValue;
            // Checking if not empty
            if (state.loanAmount >0 && state.loanTime>1) {
              let [monthlyPayment,additionalPercentPayment] = calculatePayements(state);
                return({...state,
                  // [setState]:value,
                  monthlyPayment:monthlyPayment,
                  additionalPercentPayment:additionalPercentPayment
                  })
            } else {
              return({...state
                // [setState]:value
               })
            }
        default:
            return state
    }
}

export default LoanReducer