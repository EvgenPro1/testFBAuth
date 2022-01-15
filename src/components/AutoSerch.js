import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {useNavigate} from "react-router-dom";

export const AutoSearch = ({state}) => {
    const navigate = useNavigate()
    //this function checks search-input and sends users to main list or char's page
    const redirector = (e, value) => navigate(value ? `/${value.id}` : `/`)

    return (
        <Autocomplete onChange={redirector}
                      disablePortal
                      id="combo-box-demo"
                      options={state}
                      sx={{width: 300}}
                      renderInput={(params) =>
                          <TextField {...params} label="Rick and Morty search"/>}
                      getOptionLabel={(option) => `${option.id} ${option.name}`}
        />
    );
};
