import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ControlledOpenSelect =()=> {
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
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
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Pendente</MenuItem>
          <MenuItem value={20}>Em progresso</MenuItem>
          <MenuItem value={30}>Concluído</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default ControlledOpenSelect;
