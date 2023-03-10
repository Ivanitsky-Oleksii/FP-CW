import productsArray, { getProductsObject1, Product1 } from 'utils/productsArray'
import FavoriteListItem from './FavoriteListItem'


type Props = {
    productsInFavorite: {
        [id: number]: number
    }
    productsObject1?: {
        [id: number]: Product1
    }

    removeFavorite: (id:number)=>void
    FavoriteItem?: any
}
const FavoriteList = ({
    productsInFavorite,
    productsObject1 = getProductsObject1(productsArray),
    FavoriteItem = FavoriteListItem,removeFavorite,
}: Props) => {
    return (
        <>
            {Object.keys(productsInFavorite).map((productId) => (
                <FavoriteItem
                    
                    key={productId}
                    product1={productsObject1[parseInt(productId)]}
                    removeFavorite={removeFavorite}
                    productCount={productsInFavorite[parseInt(productId)]}
                />
                
            ))}
        </>
    )
}
export default FavoriteList
