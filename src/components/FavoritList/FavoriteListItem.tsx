import { Product1 } from "utils/productsArray"
import {  Card, CardContent, Button,Stack} from '@mui/material'
import "./Favorite.scss"
import { Link } from 'react-router-dom'
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


type Props = {
    product1:Product1
    removeFavorite: (id: number) => void
    id: number
    link2:string

}

const FavoriteListItem1 = ({product1,removeFavorite}:Props) => {
    return(
        <>
            <Card>
                <CardContent className="card-content">
                    <div>
                    <img src={product1.image} alt="#" />
                    </div>
                    <Link className="back-btn" to={product1.link2} >
                    <div>{product1.title}</div>
                    </Link>
                    <Stack
                direction="row-reverse"
                justifyContent="center"
                alignItems="center"
                spacing={5}
                margin="10px"
            >
                    <div className="product-desc">{product1.description}</div>
                    </Stack>
                    <Button style={{marginTop:"0px",color:"black"}}color="error" size="small" variant="text" onClick={() =>removeFavorite(product1.id)}><ThumbDownIcon/></Button>
                </CardContent>
            </Card>
    </>
    )
}
export default FavoriteListItem1
