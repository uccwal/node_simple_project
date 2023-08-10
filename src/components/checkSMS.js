import React from 'react';
import {TextField} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const CheckSms = () => {
    return (
        <div>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />


        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} />
        <Checkbox {...label} disabled />
        <Checkbox {...label} disabled checked />
    </div>
    );
};

export default CheckSms;