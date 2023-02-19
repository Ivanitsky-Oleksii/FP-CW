import Button from '@mui/material/Button'
import './Menu.scss'
import {Link} from 'react-router-dom'


type Props = {}
const linkStyle = {textDecoration: 'none',color:"white"}
const Menu = (props: Props) => {
return (
    <>
<Button className='btn-1' color="inherit"><Link className='radio-btn' to="/radio">RADIO</Link></Button>
<Button className='btn-2' color="inherit"><Link style={linkStyle} to="/">HOME</Link></Button>
<Button className='btn-2' color="inherit"><Link style={linkStyle} to="/releases">RELEASES</Link></Button>
<Button className='btn-2' color="inherit"><Link style={linkStyle} to="/about">ABOUT</Link></Button>
</>
)
}
export default Menu