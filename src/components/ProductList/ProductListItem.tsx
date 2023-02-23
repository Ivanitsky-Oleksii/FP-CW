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
    image:string}
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
            <Stack direction="row-reverse"justifyContent="center"alignItems="center"spacing={5} margin="10px">
<Button color="inherit"><Link className='back-btn' to="/"><div className="product-title">{title}</div></Link></Button></Stack>
            
            <div className="product-desc">{description}</div>
            <div className="product-data"> {data}</div>
            <div className="product-checkbox"><Checkbox  icon={<FavoriteBorder sx={{color:"white"}} />} checkedIcon={<Favorite sx={{color:"red"}} />}/></div>
        </CardContent>
        
    </Card>
)
}
export default ProductListItem