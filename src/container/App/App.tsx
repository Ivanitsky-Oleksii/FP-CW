import Footer from "container/Footer/Footer"
import Header from "container/Header/Header"
import Main from "container/Main/Main"
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Logo from "components/Logo/Logo"
import Carousel from "components/Carousel/Carousel"



type Props = {}

const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Carousel/>
            <Main />
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
