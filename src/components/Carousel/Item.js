import { Paper } from '@mui/material'



function Item({item})
{
    return (
        <Paper>
            <img src={item.image} alt="fake page" style={{width:"100%", height:"28vh", marginTop:"1px"  }}/>
        </Paper>
    )
}
export default Item