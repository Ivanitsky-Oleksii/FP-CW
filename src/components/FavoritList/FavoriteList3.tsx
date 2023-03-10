import productsArray, { getProductsObject1, Product1 } from 'utils/productsArray'
import productsArray2, { getProductsObject2, Product2 } from 'utils/productsArray2'
import productsArray3, { getProductsObject3, Product3 } from 'utils/productsArray3'
import FavoriteListItem1 from './FavoriteListItem'
import FavoriteListItem2 from './FavoriteListItem2'
import FavoriteListItem3 from './FavoriteListItem3'

type Props = {
    productsInFavorite: {
        [id: number]: number
    }
    productsObject3?: {
        [id: number]: Product3
    }

    removeFavorite3: (id:number)=>void
    FavoriteItem3?: any
}

const FavoriteList3 = ({
    productsInFavorite,
    productsObject3 = getProductsObject3(productsArray3),
    FavoriteItem3 = FavoriteListItem1,removeFavorite3,

}: Props) => {
    return (
        <>
            {Object.keys(productsInFavorite).map((productId) => (
                <FavoriteItem3
                    key={productId}
                    product3={productsObject3[parseInt(productId)]}
                    removeFavorite={removeFavorite3}
                    productCount={productsInFavorite[parseInt(productId)]}
                />
                
            ))}
        </>
    )
}
export default FavoriteList3
