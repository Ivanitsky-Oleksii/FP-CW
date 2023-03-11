import { Product1 } from "utils/productsArray"
import { Product2 } from "utils/productsArray2"
import { Product3 } from "utils/productsArray3"
import {  Card, CardContent, Button,Checkbox} from '@mui/material'
import "./Favorite.scss"
import { Link } from 'react-router-dom'
import Favorite from '@mui/icons-material/Favorite';

type Props = {
    product1:Product1
    product2:Product2
    product3:Product3
    removeFavorite: (id: number) => void
}

const FavoriteListItem1 = ({product1,removeFavorite}:Props) => {
    return(
        <>
            <Card>
                <CardContent className="card-content">
                    <div>
                    <img src={product1.image} alt="#" />
                    </div>
                    <Link className="back-btn" to="/" >
                    <div>{product1.title}</div>
                    </Link>
                    <Button
                        variant="text"
                        color="error"
                        size="small"
                        onClick={() => removeFavorite(product1.id)}>
                        <Checkbox icon={<Favorite sx={{color:"red"}}/>} />
                    </Button>
                </CardContent>
            </Card>
    </>
    )
}
export default FavoriteListItem1
