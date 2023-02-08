import { Paper } from '@mui/material'



function Item({item})
{
    return (
        <Paper>
            <img src={item.image} alt="fake page" style={{width:"100%", height:"576px", marginTop:"0px"  }}/>
        </Paper>
    )
}
export default Item