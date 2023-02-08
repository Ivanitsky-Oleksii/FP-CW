import Carousel from 'react-material-ui-carousel'
import Item from './Item'
import sliderArray from 'utils/sliderArray.json'
import { Container } from '@mui/system'


function Carousels()
{
    return (
        <Container maxWidth="xl" className="carousel-container"sx={{
            padding: '0px 0',
        }}
    >
        <Carousel>
            {
                sliderArray.map( item => <Item key={item.id} item={item} /> )
            }
        </Carousel>
        </Container>
    )
}
export default Carousels 