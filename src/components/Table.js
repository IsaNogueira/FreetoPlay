import {DataGrid} from '@mui/x-data-grid';
import React, { useEffect} from 'react';

const columns = [
    {field: 'title', headerName: 'Name', width: 300 },
    {field: 'game_url', headerName: 'URL', width: 300 }
];

export default function Table({gameData}) {
    useEffect(() => { 
    console.log('gameData', gameData)    
    },[gameData])
return(

    <div style={{ height: 200, width: '100%' }}>
        <DataGrid
        rows={[gameData]}
        columns={columns}
        />
    </div>
);    
}