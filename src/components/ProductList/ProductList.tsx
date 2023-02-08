import { Typography,Grid } from "@mui/material"
import ProductListItem from "./ProductListItem"
import './ProductListItem.scss'
import productsArray from "utils/productsArray"

type Props = {}

const ProductList = (props: Props) => {
return (
    <>
        <Typography
            variant="h4"
            align="center"
            component="h4"
            className="typography-news"
        >
            NEWS
        </Typography>

        <Grid container spacing={5}>
            {productsArray.map(
                (
                    { id,title, description, data, like, image },
                    i) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        <ProductListItem
                            title={title}
                            description={description}
                            data={data}
                            like={like}
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