import React from 'react'
import { Button, Grid } from '@material-ui/core'

const LoadMore=({showMore,length})=>{

    return <Grid align="center">
        <Button variant="outlined" size="small" onClick={showMore} style={{ backgroundColor: "#eaaa18",margin:"10px 0" }}>
            Load More ({length})
        </Button>
        </Grid>
}
export default LoadMore