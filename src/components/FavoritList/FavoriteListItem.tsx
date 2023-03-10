import { Product } from "utils/productsArray"
import { Grid, Card, CardContent, Button, CardActions } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

type Props = {
    product:Product
    removeFavorite: (id: number) => void
}

const FavoriteListItem = ({product,removeFavorite}:Props) => {
    return(
        <>
        <Grid item xs={12} sm={4}>
            <Card>
                <CardContent>
                    <div>
                    <img src={product.image} alt="#" />
                    </div>
                    <div>{product.title}</div>
                    
                </CardContent>
                <CardActions>
                    <Button
                        variant="outlined"
                        onClick={() => removeFavorite(product.id)}
                    >
                        <DeleteIcon />
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    </>
    )
}
export default FavoriteListItem
