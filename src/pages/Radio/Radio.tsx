import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'

type Props = {}
const Radio = (props:Props) => {
    return(
        <>
        <CardMedia>
            player
        </CardMedia>
        <Button className='back-btn' color="inherit"><Link className='back-btn' to="/">BACK TO HOME</Link></Button>
        </>
    )
}
export default Radio