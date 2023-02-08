import Carousel from 'react-material-ui-carousel'
import Item from './Item'
import sliderArray from 'utils/sliderArray.json'
import { Container } from '@mui/system'


function Carousels()
{
    return (
        <Carousel>
            {
                sliderArray.map( item => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    )
}
export default Carousels 