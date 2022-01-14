import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from "react-router-dom";

export const AutoSearch = ({state}) => {
    const navigate = useNavigate()
const redirector = (e, value) => navigate(value?`/${value.id}`:`/`)

    return (
        <Autocomplete onChange={redirector}

            disablePortal
            id="combo-box-demo"
            options={state}
            sx={{ width: 300 }}
            renderInput={(params) =>
                <TextField {...params} label="Rick and Morty search" />}

                      // renderOption={(props, option) => [props, {name:option.name, id:option.id}].map(({name, id})=><li key={id}>{name}</li>)}
                      getOptionLabel={(option)=>`${option.id} ${option.name}`}
            // renderOption={(option)=><h4 key={option.id} onClick={someFunc}>`${option.id}`</h4>}
        />
    );
};
