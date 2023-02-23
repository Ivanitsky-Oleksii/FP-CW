import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'


type Props = {}
const NewsPage5 = (props:Props) => {
    return(
        <div>News Page5
            <Button className='back-btn' color="inherit"><Link className='back-btn' to="/">BACK TO HOME</Link></Button>
        </div>
    )
}
export default NewsPage5