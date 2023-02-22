import { Typography,Grid, Button } from "@mui/material"
import ProductListItem from "./ProductListItem"
import './ProductListItem.scss'
import productsArray from "utils/productsArray"
import productsArray2 from "utils/productsArray2"
import productsArray3 from "utils/productsArray3"
import {Link} from 'react-router-dom'


type Props = {
}


const ProductList = (props: Props) => {
return (
    <>
        <Typography
            variant="h4"
            align="center"
            component="h4"
            className="typography-news"
        >
<Button className='news-btn' color="inherit"><Link className='news-btn' to="/news">NEWS</Link></Button>
        </Typography>

        <Grid container spacing={5}>
            {productsArray.map(
                (
                    { id,title, description, data, image},
                    i) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        <ProductListItem
                            title={title}
                            description={description}
                            data={data}
                            image={image}
                        />
                    </Grid>
                )
            )}
        </Grid>
        <Typography
            variant="h4"
            align="center"
            component="h4"
            className="typography-news"
        >
        <Button className='podc-btn' color="inherit"><Link className='podc-btn'  to="/podcast">PODCAST</Link></Button>
        </Typography>
        <Grid container spacing={5}>
            {productsArray2.map(
                (
                    { id,title, description, data, image },
                    i) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        <ProductListItem
                            title={title}
                            description={description}
                            data={data}
                            image={image}
                            

                        />
                    </Grid>
                )
            )}
        </Grid>
        <Typography
            variant="h4"
            align="center"
            component="h4"
            className="typography-news"
        >
        <Button className='radio-botn' color="inherit"><Link className='radio-botn' to="/radio">RADIO</Link></Button>
        </Typography>
        <Grid container spacing={5}>
            {productsArray3.map(
                (
                    { id,title, description, data, image  },
                    i) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        <ProductListItem
                            title={title}
                            description={description}
                            data={data}
                            image={image}
                            
                        />
                    </Grid>
                )
            )}
        </Grid>
    </>
)
}
export default ProductList