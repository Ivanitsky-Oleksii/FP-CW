import { Grid } from "@mui/material"
import ProductListItem from "./ProductListItem"
import './ProductListItem.scss'
import productsArray from "utils/productsArray"





type Props = {addProductToFavorite:(id:number,count:number) => void
    
}


const ProductList = ({addProductToFavorite}: Props) => {
return (
    <>
        <Grid container spacing={5}>
            {productsArray.map(({ id,title, description, data, image,url,link},i) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        <ProductListItem
                            id={id}
                            title={title}
                            description={description}
                            addProductToFavorite={addProductToFavorite}
                            data={data}
                            image={image}
                            url={url}
                            link={link}
                        />
                    </Grid>
                )
            )}
        </Grid>
    </>
)
}
export default ProductList