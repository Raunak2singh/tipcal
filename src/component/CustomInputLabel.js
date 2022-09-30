
import React from 'react';
import { InputLabel } from '@mui/material';

const CustomInputLabel = ({text}) => {
    return (
        <>
        <InputLabel sx={{fontSize:"20px",fontWeight:"700",paddingBottom:"10px"}}>{text}</InputLabel>
        </>
    );
}

export default CustomInputLabel;
