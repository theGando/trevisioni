import React from 'react';
import { Box, Container, Typography } from "@material-ui/core";
// import ImageList from '@material-ui/core/ImageList';
// import ImageListItem from '@material-ui/core/ImageListItem';
import useStyles from '../Comps/styles';

const itemData = [
    {
        img: '',
    },
]
function Gallery() {
    const classes = useStyles();
    return (
        <div className={classes.page}>
            <Container maxWidth="s" align='center'>
                <Typography variant='h1' align='center' style={{ display: 'inline-block' }}>
                    GALLERIA
                </Typography>
            </Container>
            <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
                {/* <ImageList variant="masonry" cols={3} gap={8}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=161&fit=crop&auto=format 1x,
                                ${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList> */}
            </Box>
        </div>
    )
}

export default Gallery;