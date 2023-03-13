import './FavoriteCounter.scss'
import { Product1 } from "utils/productsArray"

type Props = {productCount:number
    product:Product1
}



const FavoriteCounter = ({product}: Props) => {




return (
    <>
    <div className='counter'>{product.id}</div>
    </>
)
}
export default FavoriteCounter
