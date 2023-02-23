import { Card,CardContent,Button,Stack} from "@mui/material"
import {Link} from 'react-router-dom'
import "./ProductListItem.scss"
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

type Props = {    
    title:string
    description:string
    data:string
    image:string
    url:string
    link:string
}
const ProductListItem = ({
    title,
    description,
    data,
    image,
    url,
    link,
    
}  : Props) => {
return (
    <Card variant="outlined">
        <Link to={link}>
        <CardContent className="card-content">
            <div className="product-img"><img src={image} alt="fake page" /></div>
            <div className="product-title">{title}</div>
            <div className="product-desc">{description}</div>
            <div className="product-data"> {data}</div>
{/* <div className="product-checkbox"><Checkbox  icon={<FavoriteBorder sx={{color:"white"}} />} checkedIcon={<Favorite sx={{color:"red"}} />}/></div> */}
        </CardContent>
        </Link>
        
    </Card>
)
}
export default ProductListItem