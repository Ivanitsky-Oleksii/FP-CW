import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import { Container } from '@mui/material'
import './Header.scss'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'



type Props = {productsInFavoriteHeader: {
    [id: number]: number 
}}


const Header = ({productsInFavoriteHeader}: Props) => {
    return (
        <AppBar position="static" className="app-bar">
            <Container>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Logo />

                        <Menu productsInFavoriteHeader={productsInFavoriteHeader}/>
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
