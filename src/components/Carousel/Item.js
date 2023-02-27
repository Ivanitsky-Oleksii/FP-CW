import { Paper } from '@mui/material'

function Item({item})

{
    return (
        <Paper>
            <img src={item.image} alt="fake page" style={{width:"100%", height:"22vh", margin:"0 0 -10px 0" }}/>
        </Paper>)}

export default Item