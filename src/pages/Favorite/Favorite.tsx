import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { Typography, Grid } from '@mui/material'
import FavoriteList from 'components/FavoritList/FavoriteList'
import FavoriteListItem from 'components/FavoritList/FavoriteListItem'

type Props = {
    productsInFavorite: {
        [id: number]: number
    }
    removeFavorite: (id:number)=>void
    
}
const Favorite = ({productsInFavorite,removeFavorite}: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    marginBottom: '30px',
                }}
            >
                {' '}
                FAVORITE
            </Typography>
            <Grid container spacing={4}>
                <FavoriteList
                    productsInFavorite={productsInFavorite}
                    FavoriteItem={FavoriteListItem}
                    removeFavorite={removeFavorite}
                />
            </Grid>

            <Button className="back-btn" color="inherit">
                <Link className="back-btn" to="/">
                    BACK TO HOME
                </Link>
            </Button>
        </>
    )
}
export default Favorite
