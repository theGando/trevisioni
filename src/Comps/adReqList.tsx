import * as React from 'react';
import { Button } from '@material-ui/core';
import { DataGrid, GridApi, GridCellParams, GridCellValue} from '@material-ui/data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'artistName', headerName: 'Artist Name', width: 160 },
    { field: 'artistType', headerName: 'Artist Type', width: 160 },
    { field: 'activityName', headerName: 'Activity Name', width: 160 },
    { field: 'artistPhone', headerName: 'Artist Phone', width: 160 },
    { field: 'artistEmail', headerName: 'Artist Email', width: 160 },
    { 
        field: 'artistPage',
        headerName: 'Artist Page',
        width: 160,
        renderCell: (params:GridCellParams) => {
            const onPageClick = () => {
              const api: GridApi = params.api;
              const fields = api
                .getAllColumns()
                .map((c) => c.field)
                .filter((c) => c !== "__check__" && !!c);
              const thisRow: Record<string, GridCellValue> = {};
              fields.forEach((f) => {
                thisRow[f] = params.getValue(params.id,f);
              });
              return alert(JSON.stringify("Artist Page"));
            };
            return (
                <strong>
                    <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        style={{ marginLeft: 12, backgroundColor: 'blue' }}
                        onClick={onPageClick}
                    >
                        Artist Name
                    </Button>
                </strong>
            );
        }
    },
    {
        field: 'action',
        headerName: 'Accept/Refuse',
        width: 180,
        renderCell: (params:GridCellParams) => {
            const onAccClick = () => {
                const api: GridApi = params.api;
                const fields = api
                    .getAllColumns()
                    .map((c) => c.field)
                    .filter((c) => c !== "__check__" && !!c);
                const thisRow: Record<string, GridCellValue> = {};

                fields.forEach((f) => {
                    thisRow[f] = params.getValue(params.id,f);
                });

                return alert(JSON.stringify("Accepted"));
            };
            const onRefClick = () => {
                const api: GridApi = params.api;
                const fields = api
                    .getAllColumns()
                    .map((c) => c.field)
                    .filter((c) => c !== "__check__" && !!c);
                const thisRow: Record<string, GridCellValue> = {};

                fields.forEach((f) => {
                    thisRow[f] = params.getValue(params.id,f);
                });

                return alert(JSON.stringify("Refused"));
            };
        return(
            < strong >
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginLeft: 12, backgroundColor: 'green' }}
                    onClick={onAccClick}
                >
                Accept
                 
            </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginLeft: 12, backgroundColor: 'red' }}
                    onClick={onRefClick}
                >
                Refuse
            </Button>
            </strong >
            )
        },
    },
];

const rows = [
    { id: 1, artistName: 'Riff', artistType: 'Performer', activityName: 'Concert' },
    { id: 2, artistName: 'Baffo', artistType: 'Performer', activityName: 'Poetry Reading' },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
];

export default function RequestList() {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={10} />
        </div>
    );
}