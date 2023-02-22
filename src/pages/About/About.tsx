import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'

type Props = {}
const About = (props:Props) => {
    return(
        <div>About
            <Button className='back-btn' color="inherit"><Link className='back-btn' to="/">BACK TO HOME</Link></Button>
        </div>
    )
}
export default About