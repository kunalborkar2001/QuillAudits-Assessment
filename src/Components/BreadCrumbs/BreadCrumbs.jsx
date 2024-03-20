import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function BreadCrumbs() {
    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="gray" href="/">
                    QuillAudits
                </Link>
                <Link
                    underline="hover"
                    color="gray"
                    // href="/material-ui/getting-started/installation/"
                >
                    Resources
                </Link>
                
                <Typography color="white">Case Studies</Typography>
                
            </Breadcrumbs>
        </div>
    );
}
