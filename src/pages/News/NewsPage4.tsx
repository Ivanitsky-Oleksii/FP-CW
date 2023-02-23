import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'


type Props = {}
const NewsPage4 = (props:Props) => {
    return(
        <div>News Page4
            <Button className='back-btn' color="inherit"><Link className='back-btn' to="/">BACK TO HOME</Link></Button>
        </div>
    )
}
export default NewsPage4