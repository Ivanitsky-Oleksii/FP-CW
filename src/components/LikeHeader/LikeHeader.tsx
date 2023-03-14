import FavoriteTotal from '../FavoritList/FavoriteTotal' 

type Props = {
    productsInFavorite:{
        [id:number]:number
    }

}

const LikeHeader = ({productsInFavorite}: Props) => {
    
    return (
<div>
<FavoriteTotal productsInFavorite={productsInFavorite}/>


        </div>
        
    )
} 
export default LikeHeader