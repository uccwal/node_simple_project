import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'tui-grid/dist/tui-grid.css';
import Grid from "@toast-ui/react-grid";


const UseAjaxGetData = () => {


    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/list');
            setData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();


    }, []);

    const columns = [
        { name: 'no', header: '순서', width: '200' },
        { name: 'name', header: 'name', width: '200'},
        { name: 'gender', header: 'gender', width: '200'},
        { name: 'number', header: 'number', width: '200'},
        { name: 'code', header: 'code',width: '200' }

    ];

    const dataResult = data.map((item) => ({
        no: item.no,
        name: item.name,
        gender: item.gender,
        number: item.number,
        code: item.code,

    }));

    return (

        <Grid
            data={dataResult}
            columns={columns}
            rowHeight={25}
            bodyHeight={100}
            heightResizable={true}
            rowHeaders={['rowNum']}
        />

    );
};

export default UseAjaxGetData;
