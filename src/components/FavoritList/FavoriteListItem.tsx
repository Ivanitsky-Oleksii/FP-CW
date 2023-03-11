import { Product1 } from "utils/productsArray"
import {  Card, CardContent, Button} from '@mui/material'
import "./Favorite.scss"
import { Link } from 'react-router-dom'
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';


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
                    <Button
                        style={{marginTop:"50px",color:"red"}}
                        startIcon={<HeartBrokenIcon fontSize="inherit" />}
                        variant="text"
                        size="large"
                        onClick={() => removeFavorite(product1.id)}>
                    dislike
                    </Button>
                </CardContent>
            </Card>
    </>
    )
}
export default FavoriteListItem1
