
import './Menu.scss'
import MenuItem from './MenuItem'

type Props = {    productsInFavorite: {
    [id: number]: number 
}}

const Menu = ({productsInFavorite}: Props) => {
return (
    <>

<MenuItem to="/">HOME</MenuItem>
<MenuItem to="/news">NEWS</MenuItem>
<MenuItem to="/podcast">PODCAST</MenuItem>
<MenuItem to="/radio">RADIO</MenuItem>
<MenuItem to="/about">ABOUT</MenuItem>
<MenuItem to="/favorite">FAVORITE</MenuItem>
{Object.keys(productsInFavorite).map((productId) => (
<div>{productsInFavorite[parseInt(productId)]}</div>
))}
    </>
)
}
export default Menu