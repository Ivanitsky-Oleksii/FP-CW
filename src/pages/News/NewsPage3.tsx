import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'


type Props = {}
const NewsPage3 = (props:Props) => {
    return(
        <div>News Page3
            <Button className='back-btn' color="inherit"><Link className='back-btn' to="/">BACK TO HOME</Link></Button>
        </div>
    )
}
export default NewsPage3