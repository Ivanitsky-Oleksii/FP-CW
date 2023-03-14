import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import { Container } from '@mui/material'
import './Header.scss'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'
import LikeHeader from 'components/LikeHeader/LikeHeader'
import twit from 'assets/png1.png'
import youtube from 'assets/png2.png'
import inst from 'assets/png3.png'



type Props = {productsInFavorite: {
    [id: number]: number 
}
removeFavorite: (id:number)=>void
}


const Header = ({productsInFavorite,removeFavorite}: Props) => {
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

                        <Menu/>
                        <LikeHeader productsInFavorite={productsInFavorite}/>
                        <div>
                            <a style={{paddingLeft:"100px"}} href="https://twitter.com/asot"><img src={twit} alt="#" style={{width:"60px",height:"60px",padding:"10px"}}/></a>
                            <a href="https://www.youtube.com/asotrecordings"><img src={youtube} alt="#" style={{width:"60px",height:"60px",padding:"10px"}}/></a>
                            <a href="https://www.instagram.com/asotlive/"><img src={inst} alt="#" style={{width:"60px",height:"60px",padding:"12px"}}/></a>
                        </div>
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
