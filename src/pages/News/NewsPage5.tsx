import {
    Grid,
    Button,
    Stack,
    Card,
    CardContent,
} from '@mui/material'

import 'components/ProductList/ProductListItem.scss'
import np5Array from 'utils/np5Array'
import { Link } from 'react-router-dom'


type Props = {}
const NewsPage5 = (props: Props) => {
    return (
        <>
            <Grid container spacing={1}>
                {np5Array.map(
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
                    <Link className="back-btn" to="../news">
                        BACK TO NEWS
                    </Link>
                </Button>
            </Stack>
        </>
    )
}
export default NewsPage5
