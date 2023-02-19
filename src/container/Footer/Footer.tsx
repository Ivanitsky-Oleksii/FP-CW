import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Container } from '@mui/material'
import 'container/Footer/Footer.scss'




type Props = {}

const Footer = (props: Props) => {
    return (
        <AppBar position="static" className="footer">
            <Container>
                <Toolbar>
            <>
            © Copyright 2023 
            </>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Footer