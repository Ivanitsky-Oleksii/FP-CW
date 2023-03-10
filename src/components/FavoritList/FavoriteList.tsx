import productsArray, { getProductsObject1, Product1 } from 'utils/productsArray'
import productsArray2, { getProductsObject2, Product2 } from 'utils/productsArray2'
import productsArray3, { getProductsObject3, Product3 } from 'utils/productsArray3'
import FavoriteListItem from './FavoriteListItem'

type Props = {
    productsInFavorite: {
        [id: number]: number
    }
    productsObject1?: {
        [id: number]: Product1
    }
    productsObject2?: {
        [id: number]: Product2
    }
    productsObject3?: {
        [id: number]: Product3
    }
    removeFavorite: (id:number)=>void
    FavoriteItem?: any
}

const FavoriteList = ({
    productsInFavorite,
    productsObject1 = getProductsObject1(productsArray),
    productsObject2 = getProductsObject2(productsArray2),
    productsObject3 = getProductsObject3(productsArray3),
    FavoriteItem = FavoriteListItem,removeFavorite

}: Props) => {
    return (
        <>
            {Object.keys(productsInFavorite).map((productId) => (
                <FavoriteItem
                    key={productId}
                    product1={productsObject1[parseInt(productId)]}
                    product2={productsObject2[parseInt(productId)]}
                    product3={productsObject3[parseInt(productId)]}
                    removeFavorite={removeFavorite}
                    productCount={productsInFavorite[parseInt(productId)]}
                />
            ))}
        </>
    )
}
export default FavoriteList
