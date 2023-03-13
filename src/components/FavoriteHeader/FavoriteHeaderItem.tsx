import { useState } from 'react'

type Props = {}

const FavoriteHeaderItem = (props:Props) => {
const [productsInFavorite, setProductsInFavorite] =
    useState<number>(1)


    return(
        <div>
            {productsInFavorite}
        </div>
    )
}
export default FavoriteHeaderItem