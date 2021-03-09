import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { Button, Typography, InputBase } from '@material-ui/core'
const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(title.capitalize(), description.capitalize())
        setTitle("")
        setDescription("")
    }

    // const inputStyle = { height: 32, width: "90%", fontWeight: 600, backgroundColor: "#f3f3f3", padding: "0 10px" }

    const inputStyle = { backgroundColor: "#f3f3f3", padding: "2px 5px", width: "95%" }
    return (<form onSubmit={handleSubmit}>
        <Grid container style={{ backgroundColor: '#444444', borderRadius: 3, padding: 20, margin: "15px 0" }}>
            <Grid sm={4} xs={12} item>
                <Typography>Name :</Typography>
                <InputBase fullWidth placeholder="Enter the title" style={inputStyle}
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                    required />
                {/* <input style={inputStyle} placeholder="Enter the title" required
                    onChange={e => setTitle(e.target.value)}
                    value={title} /> */}

            </Grid>
            <Grid sm={4} xs={12} item>
                <Typography>Description :</Typography>
                <InputBase fullWidth placeholder="Enter the description" style={inputStyle}
                    onChange={e => setDescription(e.target.value)}
                    value={description} />

                {/* <input style={inputStyle} placeholder="Enter the description"
                    onChange={e => setDescription(e.target.value)} value={description} /> */}

            </Grid>
            <Grid sm={4} item><Typography>  <br /></Typography>
                <Button type='submit' variant="contained" style={{ backgroundColor: "#eaaa18" }}>Add Todo</Button>
            </Grid>

        </Grid> </form>)
}

export default AddTodo
