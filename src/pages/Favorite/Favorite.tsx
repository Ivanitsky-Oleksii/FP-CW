import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'


type Props = {}
const Favorite = (props:Props) => {
    return(
        <div>Favorite
            <Button className='back-btn' color="inherit"><Link className='back-btn' to="/">BACK TO HOME</Link></Button>
        </div>
    )
}
export default Favorite