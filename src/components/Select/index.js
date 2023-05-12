import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ControlledOpenSelect =({value, onChange})=> {
  const [status, setStatus] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setStatus(selectedValue);
    onChange(selectedValue)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl sx={{minWidth: 160}}>
        <InputLabel id="demo-controlled-open-select-label">Status</InputLabel>
        <Select
          sx={{zIndex: 2000}}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={value}
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value={'Pendente'}>Pendente</MenuItem>
          <MenuItem value={'Em progresso'}>Em progresso</MenuItem>
          <MenuItem value={'Concluído'}>Concluído</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default ControlledOpenSelect;
