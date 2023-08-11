import React from 'react';
import CheckForm from "./checkSMS/checkForm";





const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const CheckSms = () => {

    const checkBoxFlex = {
        display:"flex",
        justifyContent: "center"
    }
    return (
        <div style={checkBoxFlex}>
            <CheckForm/>

        </div>
    );
};

export default CheckSms;