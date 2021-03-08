import React from 'react'
import { Grid, Button, Typography } from '@material-ui/core'

const Todo = ({todo,deleteTodo,completeTask}) => {
const {id,name,description,completed}=todo
    return  <Grid container style={{ backgroundColor: '#444444', padding: "5px 20px", borderRadius: 3,margin:"8px 0" }}>
            <Grid item sm={8}>
                <Typography variant="h4" 
                style={completed?{ color: "#eaaa18", fontFamily: "Comic Sans MS",textDecoration: "line-through" }
                :{ color: "#eaaa18", fontFamily: "Comic Sans MS" }}>{name}</Typography>
                <Typography variant="body1" style={{ color: "#efe7e7", fontFamily: "inherit" }}>
    {description}</Typography>
            </Grid>
            <Grid container sm={4} spacing={1} item alignContent="center">
                <Grid item sm={6} align="right">
                {!completed&&<Button variant="outlined" color="primary" style={{background:"#f3f3f3"}}
                onClick={()=>completeTask(id)}>
                        Complete
</Button>}</Grid>  
                <Grid item sm={6}> <Button variant="outlined" color="secondary" style={{background:"#f3f3f3"}}
                onClick={()=>deleteTodo(id)}>
                    Delete
                </Button></Grid>
            </Grid>
        </Grid>
}
export default Todo