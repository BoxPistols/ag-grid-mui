import { Typography } from '@mui/material';
import * as React from 'react';
import { AgTableBasic } from './component/ag-grid/ag-table/AgTableBasic';
import { MuiBasicTable } from './component/mui/MuiTable';

export default function BasicMenu() {
  return (
    <div>
      {/* ag-grid */}
      <Typography color="tomato" variant="h2">
        AG-Grid Table
      </Typography>
      <AgTableBasic />
      {/* MUI Table */}
      <Typography color="dodgerblue" variant="h2" mt={4}>
        MUI Table
      </Typography>
      <MuiBasicTable />
    </div>
  );
}
