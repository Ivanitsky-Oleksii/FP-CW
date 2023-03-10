import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { Typography, Grid, Stack } from '@mui/material'
import FavoriteList from 'components/FavoritList/FavoriteList1'
import FavoriteListItem from 'components/FavoritList/FavoriteListItem'

type Props = {
    productsInFavorite: {
        [id: number]: number
    }
    removeFavorite: (id: number) => void
}
const Favorite = ({ productsInFavorite, removeFavorite }: Props) => {
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <FavoriteList
                    productsInFavorite={productsInFavorite}
                    FavoriteItem={FavoriteListItem}
                    removeFavorite={removeFavorite}
                />
            </Grid>
            <Stack
                direction="row-reverse"
                justifyContent="center"
                alignItems="center"
                spacing={5}
                paddingTop="310px"
            >
                <Button className="back-btn" color="inherit">
                    <Link className="back-btn" to="/">
                        BACK TO HOME
                    </Link>
                </Button>
            </Stack>
        </>
    )
}
export default Favorite
