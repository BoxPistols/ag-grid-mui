import { Typography } from '@mui/material';
import * as React from 'react';
import { AgTableBasic } from './components/ag-grid/ag-table/AgTableBasic';
import { MuiBasicTable } from './components/mui/MuiTable';
import './styles/base.css';

// import Slider, { SliderProps } from '@mui/material/Slider';
import { alpha, styled } from '@mui/material/styles';

const SubTitle = styled('Typography')(({ theme }) => ({
  fontSize: 14,
  color: `${alpha(theme.palette.secondary.main, 0.7)}`,
}));

export default function BasicMenu() {
  return (
    <div>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ color: 'dimgray', fontWeight: 200 }}
      >
        AgGrid with MUI
      </Typography>
      {/* ag-grid */}
      <Typography color="tomato" variant="h5">
        AG-Grid Table
      </Typography>
      <SubTitle>ag-theme-material</SubTitle>
      <AgTableBasic />
      {/* MUI Table */}
      <Typography color="dodgerblue" variant="h5" mt={4}>
        MUI Table
      </Typography>
      <SubTitle>basic style</SubTitle>
      <MuiBasicTable />
    </div>
  );
}
