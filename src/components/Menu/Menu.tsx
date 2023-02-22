import Button from '@mui/material/Button'
import './Menu.scss'
import {Link} from 'react-router-dom'


type Props = {}
// const linkStyle = {textDecoration: 'none',color:"white"}
const Menu = (props: Props) => {
return (
    <>

<Button className='btn-1' color="inherit"><Link className='btn-1'  to="/">HOME</Link></Button>
<Button className='btn-1' color="inherit"><Link className='btn-3' to="/news">NEWS</Link></Button>
<Button className='btn-1' color="inherit"><Link className='btn-3'  to="/podcast">PODCAST</Link></Button>
<Button className='btn-4' color="inherit"><Link className='btn-4' to="/radio">RADIO</Link></Button>
<Button className='btn-3' color="inherit"><Link className='btn-3' to="/favorite">Favorite</Link></Button>
<Button className='btn-3' color="inherit"><Link className='btn-2' to="/about">ABOUT</Link></Button>
</>
)
}
export default Menu