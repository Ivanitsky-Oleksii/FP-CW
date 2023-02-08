import { Card,CardActions,CardContent,Button} from "@mui/material"
import "./ProductListItem.scss"
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';


type Props = {
    title:string
    description:string
    data:string
    image:string
}
const ProductListItem = ({
    title,
    description,
    data,
    image,
    
}  : Props) => {
return (
    <Card variant="outlined">
        <CardContent className="card-content">
            <div className="product-img"><img src={image} alt="fake page" /></div>
            <div className="product-title">{title}</div>
            <div className="product-desc">{description}</div>
            <div className="product-data"> {data}</div>
            <div className="product-checkbox"><Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite />} /><Checkbox icon={<BookmarkBorderIcon />}checkedIcon={<BookmarkIcon />}/></div>
        </CardContent>
        <CardActions className="btn-gtn">
            <Button variant="contained" color="inherit" className="btn-gtn-wrap">LISTEN NOW</Button>
        </CardActions>
    </Card>
)
}
export default ProductListItem