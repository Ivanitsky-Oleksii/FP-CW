import { useState } from 'react'
import '../FavoriteHeader/FavoriteHeaderItem.scss'

type Props = {}

const FavoriteHeaderItem = (props:Props) => {
const [productsInFavorite] =
    useState<number>(1)


    return(
        <div className='counter'>
            {productsInFavorite}
        </div>
    )
}
export default FavoriteHeaderItem