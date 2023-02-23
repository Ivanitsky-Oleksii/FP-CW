import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'
import "components/ProductList/ProductListItem.scss"


type Props = {}
const NewsPage1 = (props:Props) => {
    return(
        <div>
        News Page
            <Button className='back-btn' color="inherit"><Link className='back-btn' to="/">BACK TO HOME</Link></Button>
        </div>
    )
}
export default NewsPage1