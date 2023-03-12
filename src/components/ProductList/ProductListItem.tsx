import { Card,CardContent,Button,Checkbox} from "@mui/material"
import {Link} from 'react-router-dom'
import "./ProductListItem.scss"
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import NewsPage1 from "pages/News/NewsPage1";
import Favorite from '@mui/icons-material/Favorite';

type Props = {   
    id: number 
    title:string
    description:string
    data:string
    image:string
    url:string
    link:string
    addProductToFavorite:(price:number) => void
    
}




const ProductListItem = ({
    id,
    title,
    description,
    data,
    image,
    link,
    addProductToFavorite
    
}  : Props) => {
return (
    <Card  onClick={() => NewsPage1(title)}>
        <CardContent className="card-content">
            <div className="product-img"><img src={image} alt="fake page" /></div>
            <Link className="link" to={link}>
            <div className="product-title">{title}</div>
            </Link>
            <div className="product-desc">{description}</div>
            <div className="product-data"> {data}</div>
            <Button style={{marginTop:"50px",color:"red"}}color="error" size="small" variant="text" onClick={() => addProductToFavorite(id)}><Checkbox  icon={<FavoriteBorder sx={{color:"red"}} />} checkedIcon={<Favorite sx={{color:"red"}}/>} />like</Button>    
        </CardContent>
    </Card>
)
}
export default ProductListItem