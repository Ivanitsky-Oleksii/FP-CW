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
import NewsPage1 from "pages/News/NewsPage1"
import NewsPage2 from "pages/News/NewsPage2"
import NewsPage3 from "pages/News/NewsPage3"
import NewsPage4 from "pages/News/NewsPage4"
import NewsPage5 from "pages/News/NewsPage5"
import NewsPage6 from "pages/News/NewsPage6"
import PodcastPage1 from "pages/Podcast/PodcastPage1"
import PodcastPage2 from "pages/Podcast/PodcastPage2"
import PodcastPage3 from "pages/Podcast/PodcastPage3"
import PodcastPage4 from "pages/Podcast/PodcastPage4"
import PodcastPage5 from "pages/Podcast/PodcastPage5"
import PodcastPage6 from "pages/Podcast/PodcastPage6"
import RadioPage1 from "pages/Radio/RadioPage1"
import RadioPage2 from "pages/Radio/RadioPage2"
import RadioPage3 from "pages/Radio/RadioPage3"
import RadioPage4 from "pages/Radio/RadioPage4"
import RadioPage5 from "pages/Radio/RadioPage5"
import RadioPage6 from "pages/Radio/RadioPage6"

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
    <Route path="newspage1" element={<NewsPage1/>}/>
    <Route path="newspage2" element={<NewsPage2/>}/>
    <Route path="newspage3" element={<NewsPage3/>}/>
    <Route path="newspage4" element={<NewsPage4/>}/>
    <Route path="newspage5" element={<NewsPage5/>}/>
    <Route path="newspage6" element={<NewsPage6/>}/>
    <Route path="podcastpage1" element={<PodcastPage1/>}/>
    <Route path="podcastpage2" element={<PodcastPage2/>}/>
    <Route path="podcastpage3" element={<PodcastPage3/>}/>
    <Route path="podcastpage4" element={<PodcastPage4/>}/>
    <Route path="podcastpage5" element={<PodcastPage5/>}/>
    <Route path="podcastpage6" element={<PodcastPage6/>}/>
    <Route path="radiopage1" element={<RadioPage1/>}/>
    <Route path="radiopage2" element={<RadioPage2/>}/>
    <Route path="radiopage3" element={<RadioPage3/>}/>
    <Route path="radiopage4" element={<RadioPage4/>}/>
    <Route path="radiopage5" element={<RadioPage5/>}/>
    <Route path="radiopage6" element={<RadioPage6/>}/>

    </Routes>
    </Container>
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
