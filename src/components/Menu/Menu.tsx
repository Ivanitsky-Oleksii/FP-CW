import Button from '@mui/material/Button'
import './Menu.scss'
import {Link} from 'react-router-dom'


type Props = {}

const Menu = (props: Props) => {
return (
    <>
<Button className='btn-1' color="inherit"><Link to="/radio">RADIO</Link></Button>
<Button className='btn-2' color="inherit"><Link to="/">HOME</Link></Button>
<Button className='btn-2' color="inherit"><Link to="/releases">RELEASES</Link></Button>
<Button className='btn-2' color="inherit"><Link to="/about">ABOUT</Link></Button>
</>
)
}
export default Menu