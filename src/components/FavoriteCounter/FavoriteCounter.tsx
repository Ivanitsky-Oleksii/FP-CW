import './FavoriteCounter.scss'
import { Product1 } from "utils/productsArray"

type Props = {
    productCount:number
    product:Product1
    
}



const FavoriteCounter = ({productCount}: Props) => {




return (
    <>
    <div className='counter'>{productCount}</div>
    </>
)
}
export default FavoriteCounter
