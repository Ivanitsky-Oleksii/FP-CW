import productsArray, { getProductsObject, Product } from 'utils/productsArray'
import FavoriteListItem from './FavoriteListItem'

type Props = {
    productsInFavorite: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
    removeFavorite: (id:number)=>void
    FavoriteItem?: any
}

const FavoriteList = ({
    productsInFavorite,
    productsObject = getProductsObject(productsArray),
    FavoriteItem = FavoriteListItem,removeFavorite

}: Props) => {
    return (
        <>
            {Object.keys(productsInFavorite).map((productId) => (
                <FavoriteItem
                    key={productId}
                    product={productsObject[parseInt(productId)]}
                    removeFavorite={removeFavorite}
                    productCount={productsInFavorite[parseInt(productId)]}
                />
            ))}
        </>
    )
}
export default FavoriteList
