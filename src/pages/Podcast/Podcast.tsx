import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'


type Props = {}
const Podcast = (props:Props) => {
    return(
        <div>Podcast


<Button className='back-btn' color="inherit"><Link className='back-btn' to="/">BACK TO HOME</Link></Button>
        </div>
    )
}
export default Podcast