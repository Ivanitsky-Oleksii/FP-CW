import { Typography,Grid, Button,Stack } from "@mui/material"
import ProductListItem from "components/ProductList/ProductListItem"
import 'components/ProductList/ProductListItem.scss'
import radioArray from "utils/radioArray"
import {Link} from 'react-router-dom'
// import Rating from '@mui/material/Rating';
// import Favorite from '@mui/icons-material/Favorite';
// import Checkbox from '@mui/material/Checkbox';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';



type Props = {}
const Radio = (props: Props) => {
    return (
        <>
            <Typography
                variant="h6"
                align="center"
                component="h4"
                className="typography-news"
            >
    RADIO
            </Typography>
    
            <Grid container spacing={1}>
                {radioArray.map(
                    (
                        { id,title, description, data, image,url,link},
                        i) => (
                        <Grid item xs={12} sm={12} md={15} key={id}>
                            
                            <ProductListItem
                                title={title}
                                description={description}
                                data={data}
                                image={image}
                                url={url}
                                link={link}/>
                                
                                
                                </Grid>))}
                                </Grid>
                                
<Stack direction="row-reverse"justifyContent="center"alignItems="center"spacing={5} margin="10px">
<Button color="inherit"><Link className='back-btn' to="/">BACK TO HOME</Link></Button></Stack>
        </>
    )
}
export default Radio
{/* <div className="product-checkbox"><Checkbox  icon={<FavoriteBorder sx={{color:"white"}} />} checkedIcon={<Favorite sx={{color:"red"}} />}/></div> */}
{/* <Stack direction="row-reverse"justifyContent="center"alignItems="center"spacing={5} margin="10px">
<Rating name="half-rating" defaultValue={2} precision={1} sx={{color:"white",paddingBottom:"15px"}} /></Stack> */}