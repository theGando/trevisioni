import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Tabs, Tab } from '@material-ui/core';
import AdminBar from '../Comps/adminBar';

function Admin() {
    return (
        <div style={{ marginTop: '150px' }}>
            <AdminBar />
        </div>
    );
}

export default Admin;