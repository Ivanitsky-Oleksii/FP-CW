import ProductList from "components/ProductList/ProductList"
import { Typography} from '@mui/material'
type Props = {addProductToFavorite:(id:number,count:number) => void
    removeFavorite: (id: number) => void    
}


const Home = ({addProductToFavorite,removeFavorite}: Props) => {
return (
<div>
<Typography
                variant="h6"
                align="center"
                component="h4"
                className="typography-news"
            >
            WHAT'S NEW:   
            </Typography>
<ProductList addProductToFavorite={addProductToFavorite} removeFavorite={removeFavorite}/>
</div>
)
}
export default Home