import './Menu.scss'
import MenuItem from './MenuItem'


type Props = {
}


const Menu = (props: Props) => {
    return (
        <>
            <MenuItem to="/">HOME</MenuItem>
            <MenuItem to="/news">NEWS</MenuItem>
            <MenuItem to="/podcast">PODCAST</MenuItem>
            <MenuItem to="/radio">RADIO</MenuItem>
            <MenuItem to="/favorite">YOU LIKE </MenuItem> 
        </>
    )
}
export default Menu
