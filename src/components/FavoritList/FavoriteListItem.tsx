import { Product } from "utils/productsArray"

type Props = {
    productCount:number
    product:Product
}

const FavoriteListItem = ({productCount,product}:Props) => {
    return(
        <div>
            {product.title}: {productCount}
        </div>
    )
}
export default FavoriteListItem
