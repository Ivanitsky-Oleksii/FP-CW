import { Typography,Grid, Button,Stack } from "@mui/material"
import ProductListItem from "components/ProductList/ProductListItem"
import 'components/ProductList/ProductListItem.scss'
import productsArray4 from "utils/productsArray4"
import {Link} from 'react-router-dom'
import Rating from '@mui/material/Rating';



type Props = {}
const News = (props: Props) => {
    return (
        <>
            <Typography
                variant="h6"
                align="center"
                component="h4"
                className="typography-news"
            >
    NEWS
            </Typography>
    
            <Grid container spacing={1}>
                {productsArray4.map(
                    (
                        { id,title, description, data, image },
                        i) => (
                        <Grid item xs={12} sm={12} md={15} key={id}>
                            <ProductListItem
                                title={title}
                                description={description}
                                data={data}
                                image={image}/>
<Stack direction="row-reverse"justifyContent="center"alignItems="center"spacing={5} margin="10px">
<Button color="inherit"><Link className='back-btn' to="https://asot749.lnk.to/SomedayAW">LISTEN NOW</Link></Button>
</Stack>

                            

                            <Stack direction="row-reverse"justifyContent="center"alignItems="center"spacing={5} margin="10px">
                            <Rating name="half-rating" defaultValue={2} precision={1} sx={{color:"white",paddingBottom:"15px"}} /></Stack>
                        </Grid>
                    )
                )}
                
            </Grid>
            

            

            <Stack direction="row-reverse"justifyContent="center"alignItems="center"spacing={5} margin="10px">
<Button color="inherit"><Link className='back-btn' to="/">BACK TO HOME</Link></Button></Stack>
        </>
    )
}
export default News