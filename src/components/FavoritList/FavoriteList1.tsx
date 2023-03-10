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
    productsObject1?: {
        [id: number]: Product1
    }

    removeFavorite1: (id:number)=>void
    FavoriteItem1?: any
}

const FavoriteList1 = ({
    productsInFavorite,
    productsObject1 = getProductsObject1(productsArray),
    FavoriteItem1 = FavoriteListItem1,removeFavorite1,


}: Props) => {
    return (
        <>
            {Object.keys(productsInFavorite).map((productId) => (
                <FavoriteItem1
                    key={productId}
                    product1={productsObject1[parseInt(productId)]}
                    removeFavorite={removeFavorite1}
                    productCount={productsInFavorite[parseInt(productId)]}
                />
                
            ))}
        </>
    )
}
export default FavoriteList1
