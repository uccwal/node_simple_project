import React, {useState} from 'react';
import {Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from "@mui/material";
import axios from 'axios';
const CheckForm = () => {

    const checkBoxFlex = {
        display:"flex",
        alignItems: "center",
        margin:"10px"
    }
    const ml10 = {
        marginLeft:"10px"
    }


    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        number: '',
        code: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        const jsonData = JSON.stringify(formData);

        axios.post('http://localhost:3001/insert', jsonData, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                console.log('Response:', response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const handleSubmit2 = () => {
        const jsonData = JSON.stringify(formData);
        console.log(jsonData);
    }


    return (
        <div>
            <FormControl>
                <TextField  label="name" variant="outlined" name="name" value={formData.name}
                            onChange={handleChange}/>



                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="gender"
                    style={checkBoxFlex}
                    value={formData.gender}
                    onChange={handleChange}
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />

                </RadioGroup>

                <div style={checkBoxFlex}>
                <TextField  label="number" variant="outlined" name="number" value={formData.number}
                           onChange={handleChange}/>
                    <Button style={ml10} variant="contained" onClick={handleSubmit2}>인증하기</Button>
                </div>
                <div style={checkBoxFlex}>
                <TextField  label="code" variant="outlined" name="code" value={formData.code}
                           onChange={handleChange}/>
                    <Button style={ml10} variant="outlined" onClick={handleSubmit}>확인완료</Button>
                </div>
            </FormControl>
        </div>
    );
};

export default CheckForm;