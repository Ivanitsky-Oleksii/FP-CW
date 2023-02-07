import { Card,CardActions,CardContent,Button } from "@mui/material"
import "./ProductListItem.scss"


type Props = {
    title:string
    description:string
    data:string
    like:string
}
const ProductListItem = ({
    title,
    description,
    data,
    like
    
}  : Props) => {
return (
    <Card variant="outlined">
        <CardContent className="card-content">
            <div className="product-title">{title}</div>
            <div className="product-desc">{description}</div>
            <div className="product-data"> {data}</div>
            <div className="product-like"> {like}</div>
        </CardContent>
        <CardActions className="btn-gtn">
            <Button variant="contained" color="inherit" className="btn-gtn-wrap">GO TO NEWS</Button>
        </CardActions>
    </Card>
)
}
export default ProductListItem