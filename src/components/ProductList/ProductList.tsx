import { Typography,Grid } from "@mui/material"
import ProductListItem from "./ProductListItem"
import './ProductListItem.scss'
import productsArray from "utils/productsArray"

type Props = {}
type ProductProps = {
    title: string
    description: string
    data: string
    like: string
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
            NEWS
        </Typography>

        <Grid container spacing={5}>
            {productsArray.map(({title,description,data,like}: ProductProps) => (
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        title={title}
                        description={description}
                        data={data}
                        like={like}
                    />
                </Grid>
            ))}
        </Grid>
    </>
)
}
export default ProductList