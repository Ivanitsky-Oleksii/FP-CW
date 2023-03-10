import { Product } from "utils/productsArray"
import { Grid, Card, CardContent, Button, Stack } from '@mui/material'
import "./Favorite.scss"
type Props = {
    product:Product
    removeFavorite: (id: number) => void
}

const FavoriteListItem = ({product,removeFavorite}:Props) => {
    return(
        <>
            <Card>
                <CardContent className="card-content">
                    <div>
                    <img src={product.image} alt="#" />
                    </div>
                    <div>{product.title}</div>
                    <Button
                        variant="outlined"
                        onClick={() => removeFavorite(product.id)}>DL
                    </Button>
                </CardContent>
            </Card>
        
        
    </>
    )
}
export default FavoriteListItem
