import { Container } from '@mui/material'
import Home from 'pages/Home/Home'
import './Main.scss'

type Props = {}
const Main = (props: Props) => {
    return (
        <Container className="main-container"
            sx={{
                padding: '0px 0',
            }}
        >
            <Home />
        </Container>
    )
}
export default Main
