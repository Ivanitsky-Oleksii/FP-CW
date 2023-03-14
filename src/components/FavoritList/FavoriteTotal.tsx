import productsArray, { getProductsObject1, Product1 } from "utils/productsArray"
import '../FavoritList/Favorite.scss'


type Props = {
    productsInFavorite:{
        [id:number]:number
    }
productsObject?:{
    [id:number] : Product1
}
}

const FavoriteTotal = ({productsInFavorite,productsObject = getProductsObject1(productsArray)}: Props) => {
    return(
        <div className="counter">{Object.keys(productsInFavorite).reduce((total,productId)=>(productsObject[parseInt(productId)].id ),0)}</div>
        )
    }
    export default FavoriteTotal