import React from 'react';
import {Button, TextField} from "@mui/material";

const CheckNumber = () => {
    return (
        <div>
            <TextField id="outlined-basic" label="number" variant="outlined" /> <Button variant="contained">인증하기</Button>
        </div>
    );
};

export default CheckNumber;