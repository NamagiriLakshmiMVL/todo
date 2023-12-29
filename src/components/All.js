import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels() {


  const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div className='select'>
      <label>Status Filter :</label>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <Select
        
          value={status}
          onChange={handleChange}
         
          displayEmpty>
            <MenuItem value={""}>
             All
          </MenuItem>
            <MenuItem value={"Completed"}>Completed</MenuItem>
            <MenuItem value={"Not Completed"}>Not Completed</MenuItem>
          
          

        </Select>

      </FormControl>
    </div>
  );
}