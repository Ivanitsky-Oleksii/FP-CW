import {
    Typography,
    Grid,
    Button,
    Stack,
    Card,
    CardContent,
} from '@mui/material'

import 'components/ProductList/ProductListItem.scss'
import pp1Array from 'utils/pp1Array'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating'
import Favorite from '@mui/icons-material/Favorite'
import Checkbox from '@mui/material/Checkbox'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'

type Props = {}
const PodcastPage1 = (props: Props) => {
    return (
        <>
            <Grid container spacing={1}>
                {pp1Array.map(
                    ({ id, title, description, data, image, url, link }, i) => (
                        <Grid item xs={12} sm={12} md={15} key={id}>
                            <Card variant="outlined">
                                
                                    <CardContent className="card-content">
                                        <div className="product-img">
                                            <img src={image} alt="fake page" />
                                        </div>
                                        <div className="product-title">
                                            {title}
                                        </div>
                                        <div className="product-desc">
                                            {description}
                                        </div>
                                        <div className="product-data">
                                            {' '}
                                            {data}
                                        </div>
                                        <img src="images/pngwing.com.png" alt="fake page" />
                                        <Button color="inherit">
                    <Link className="back-btn" to={url}>
                        LISTEN NOW ▶
                    </Link>
                </Button>
                                        {/* <div className="product-checkbox"><Checkbox  icon={<FavoriteBorder sx={{color:"white"}} />} checkedIcon={<Favorite sx={{color:"red"}} />}/></div>
            <Stack direction="row-reverse"justifyContent="center"alignItems="center"spacing={5} margin="10px">
            <Rating name="half-rating" defaultValue={2} precision={1} sx={{color:"white",paddingBottom:"15px"}} /></Stack> */}
                                    </CardContent>
                                
                            </Card>
                        </Grid>
                    )
                )}
            </Grid>

            <Stack
                direction="row-reverse"
                justifyContent="center"
                alignItems="center"
                spacing={5}
                margin="10px"
            >
                <Button color="inherit">
                    <Link className="back-btn" to="/">
                        BACK TO HOME
                    </Link>
                </Button>
            </Stack>
        </>
    )
}
export default PodcastPage1
