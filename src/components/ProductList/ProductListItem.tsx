import { Card,CardContent,Button,Stack} from "@mui/material"
import {Link} from 'react-router-dom'
import "./ProductListItem.scss"
// import Checkbox from '@mui/material/Checkbox';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import Favorite from '@mui/icons-material/Favorite';
// import Rating from '@mui/material/Rating';
import NewsPage1 from "pages/News/NewsPage1";

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
    <Card variant="outlined" onClick={() => NewsPage1(title)}>
        <Link className="link" to={link}>
        <CardContent className="card-content">
            <div className="product-img"><img src={image} alt="fake page" /></div>
            <div className="product-title">{title}</div>
            <div className="product-desc">{description}</div>
            <div className="product-data"> {data}</div>
            {/* <div className="product-checkbox"><Checkbox  icon={<FavoriteBorder sx={{color:"white"}} />} checkedIcon={<Favorite sx={{color:"red"}} />}/></div>
            <Stack direction="row-reverse"justifyContent="center"alignItems="center"spacing={5} margin="10px">
            <Rating name="half-rating" defaultValue={2} precision={1} sx={{color:"white",paddingBottom:"15px"}} /></Stack> */}
        </CardContent>
        </Link>
    </Card>
)
}
export default ProductListItem