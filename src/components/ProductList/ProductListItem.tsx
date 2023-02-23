import { Card,CardContent} from "@mui/material"
import {Link} from 'react-router-dom'
import "./ProductListItem.scss"

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
            
        </CardContent>
        </Link>
    </Card>
)
}
export default ProductListItem