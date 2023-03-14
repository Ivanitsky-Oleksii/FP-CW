import FavoriteCounter from '../FavoriteCounter/FavoriteCounter'
import './Menu.scss'
import MenuItem from './MenuItem'
import productsArray, { getProductsObject1, Product1 } from "utils/productsArray"

type Props = {productsInFavoriteHeader: {
    [id: number]: number 
}
productsObject?:{
    [id:number] : Product1
}
FavoriteItem?:any
}


const Menu = ({productsInFavoriteHeader,productsObject = getProductsObject1(productsArray)}: Props) => {
    return (
        <>
            <MenuItem to="/">HOME</MenuItem>
            <MenuItem to="/news">NEWS</MenuItem>
            <MenuItem to="/podcast">PODCAST</MenuItem>
            <MenuItem to="/radio">RADIO</MenuItem>
            <MenuItem to="/favorite">FAVORITE</MenuItem>
            {Object.keys(productsInFavoriteHeader).map((productId) => (
            <FavoriteCounter 
            key={productId}
            product={productsObject[parseInt(productId)]}
            productCount ={productsInFavoriteHeader[parseInt(productId)]}/>
        
        ))}
            <MenuItem to="/about">ABOUT</MenuItem>
        </>
    )
}
export default Menu
