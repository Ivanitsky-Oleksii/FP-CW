import { Typography,Grid, Button,Stack } from "@mui/material"
import ProductListItem from "components/ProductList/ProductListItem"
import 'components/ProductList/ProductListItem.scss'
import podcastArray from "utils/podcastArray"
import {Link} from 'react-router-dom'




type Props = {addProductToFavorite:(id:number) => void}
const Podcast = ({addProductToFavorite}: Props) => {
    return (
        <>
            <Typography
                variant="h6"
                align="center"
                component="h4"
                className="typography-news"
            >
    PODCAST
            </Typography>
    
            <Grid container spacing={1}>
                {podcastArray.map(
                    (
                        { id,title, description, data, image,url,link},
                        i) => (
                        <Grid item xs={12} sm={12} md={15} key={id}>
                            
                            <ProductListItem
                            addProductToFavorite={addProductToFavorite}
                                id={id}
                                title={title}
                                description={description}
                                data={data}
                                image={image}
                                url={url}
                                link={link}
                                
                                />
                                
                                
                                </Grid>))}
                                </Grid>
                                
<Stack direction="row-reverse"justifyContent="center"alignItems="center"spacing={5} margin="10px">
<Button color="inherit"><Link className='back-btn' to="/">BACK TO HOME</Link></Button></Stack>
        </>
    )
}
export default Podcast
