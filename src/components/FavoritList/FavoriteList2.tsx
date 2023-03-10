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
    productsObject2?: {
        [id: number]: Product2
    }


    removeFavorite2: (id:number)=>void
    FavoriteItem2?: any

}

const FavoriteList2 = ({
    productsInFavorite,
    productsObject2 = getProductsObject2(productsArray2),
    FavoriteItem2 = FavoriteListItem1,removeFavorite2,


}: Props) => {
    return (
        <>
            {Object.keys(productsInFavorite).map((productId) => (
                <FavoriteItem2
                    key={productId}
                    product2={productsObject2[parseInt(productId)]}
                    removeFavorite={removeFavorite2}
                    productCount={productsInFavorite[parseInt(productId)]}
                />
                
            ))}
        </>
    )
}
export default FavoriteList2
