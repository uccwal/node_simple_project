import React from 'react';
import {Button, TextField} from "@mui/material";

const CheckCode = () => {
    return (
        <div>
            <TextField id="outlined-basic" label="code" variant="outlined" /> <Button variant="outlined">확인</Button>
        </div>
    );
};

export default CheckCode;