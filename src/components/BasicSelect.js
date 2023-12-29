import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { useState } from 'react';

export default function SelectLabels() {


 
  const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div className='select'>
      <label>Status</label>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <Select

          value={status}
          onChange={handleChange}

          displayEmpty>
          <MenuItem value="">
            Not Completed
          </MenuItem>
          <MenuItem>Completed</MenuItem>
        </Select>

      </FormControl>
    </div>
  );
}