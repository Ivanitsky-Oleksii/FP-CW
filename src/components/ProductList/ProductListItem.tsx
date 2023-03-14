import { Card,CardContent,Button,Checkbox} from "@mui/material"
import {Link} from 'react-router-dom'
import "./ProductListItem.scss"
import NewsPage1 from "pages/News/NewsPage1";
import { useState } from 'react'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

type Props = {   
    id: number 
    title:string
    description:string
    data:string
    image:string
    url:string
    link:string
    addProductToFavorite:(id:number,count:number) => void
    
    removeFavorite: (id: number) => void
}




const ProductListItem = ({
    id,
    title,
    description,
    data,
    image,
    link,
    addProductToFavorite,
    removeFavorite
    
    
}  : Props) => {
    const [count] = useState<number>(1)
return (
    <Card  onClick={() => NewsPage1(title)}>
        <CardContent className="card-content">
            <div className="product-img"><img src={image} alt="fake page" /></div>
            <Link className="link" to={link}>
            <div className="product-title">{title}</div>
            </Link>
            <div className="product-desc">{description}</div>
            <div className="product-data"> {data}</div>
            <Button style={{marginTop:"50px",color:"red"}}color="error" size="small" variant="text" onClick={() =>{addProductToFavorite(id,count)}}><ThumbUpAltIcon/></Button>
            <Button style={{marginTop:"0px",color:"black"}}color="error" size="small" variant="text" onClick={() =>{removeFavorite(id)}}><ThumbDownIcon/></Button>    
        </CardContent>
    </Card>
)
}
export default ProductListItem