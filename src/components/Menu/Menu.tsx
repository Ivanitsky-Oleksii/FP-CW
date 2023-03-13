import FavoriteHeaderItem from "../FavoriteHeader/FavoriteHeaderItem"
import './Menu.scss'
import MenuItem from './MenuItem'

type Props = {productsInFavorite: {
    [id: number]: number 
}
FavoriteHeader?:any
}

const Menu = ({productsInFavorite,
FavoriteHeader = FavoriteHeaderItem}: Props) => {
return (
    <>

<MenuItem to="/">HOME</MenuItem>
<MenuItem to="/news">NEWS</MenuItem>
<MenuItem to="/podcast">PODCAST</MenuItem>
<MenuItem to="/radio">RADIO</MenuItem>
<MenuItem to="/favorite">FAVORITE</MenuItem>

{Object.keys(productsInFavorite).map(() => (
<FavoriteHeader
productCount ={productsInFavorite}/>
))}
<MenuItem to="/about">ABOUT</MenuItem>
</>
)
}
export default Menu