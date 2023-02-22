import Footer from "container/Footer/Footer"
import Header from "container/Header/Header"
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Carousel from "components/Carousel/Carousel"
import {Route,Routes} from 'react-router-dom'
import {Container} from '@mui/system'
import Home from "pages/Home/Home";
import Favorite from "pages/Favorite/Favorite"
import Radio from "pages/Radio/Radio"
import About from "pages/About/About"
import News from "pages/News/News"
import Podcast from "pages/Podcast/Podcast"



type Props = {}

const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Carousel/>
            <Container className="main-container"
            sx={{padding: '0px 0',}}>
    <Routes>
    <Route path="radio" element={<Radio/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path="news" element={<News/>}/>
    <Route path="podcast" element={<Podcast/>}/>
    <Route path="favorite" element={<Favorite/>}/>
    <Route path="about" element={<About/>}/>
    </Routes>
    </Container>
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
