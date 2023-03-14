import productsArray, { getProductsObject1, Product1 } from "utils/productsArray"



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
        <div>{Object.keys(productsInFavorite).reduce((total,productId)=>(total + productsObject[parseInt(productId)].id + productsInFavorite[parseInt(productId)] ),0)}</div>
        )
    }
    export default FavoriteTotal