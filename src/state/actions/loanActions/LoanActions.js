
export const updateLoanData = (loanData) => {
    return (dispatch) => {
        dispatch({
            type: "updateLoanData",
            payload: loanData
        });
    }
}
export const updateLoanDataProperty = (propertyName, propetyValue) => {
    return (dispatch) => {
        if (!propetyValue && typeof propetyValue === "string") {
            propetyValue = "";
        }
        if (!propetyValue && typeof propetyValue === "number") {
            propetyValue = 0;
        }
        dispatch({
            type: "updateLoanDataProperty",
            propertyName: propertyName,
            propetyValue: propetyValue,
        });
    }
}
// export type addCartItemType = typeof addCartItem;
// export type removeCartItemType = typeof removeCartItem;
