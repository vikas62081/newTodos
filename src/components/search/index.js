import React from 'react'
import { Input, InputBase } from '@material-ui/core'


const Search=()=>{

    return(
        <div style={{ backgroundColor: '#444444', borderRadius: 3, padding: "10px 20px", margin: "0 0 15px 0" }}>
        <InputBase fullWidth placeholder="Search..." type="search" style={{backgroundColor:"#f3f3f3",padding:"2px 5px"}}/>
        </div>
    )
}

export default Search