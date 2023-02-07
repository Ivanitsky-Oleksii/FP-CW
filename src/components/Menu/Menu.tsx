import Button from '@mui/material/Button'
import './Menu.scss'


type Props = {}

const Menu = (props: Props) => {
return (
    <>
<Button className='btn-1' color="inherit">RADIO</Button>
<Button className='btn-2' color="inherit">NEWS</Button>
<Button className='btn-2' color="inherit">FAVORITE</Button>
<Button className='btn-2' color="inherit">ABOUT</Button>
</>
)
}
export default Menu