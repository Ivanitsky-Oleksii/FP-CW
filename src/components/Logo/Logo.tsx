import logo from 'assets/Logo-2.png'
import Typography from '@mui/material/Typography'
import './Logo.scss'

type Props = {}

const Logo = (props: Props) => {
return (
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <img className='logo' src={logo} alt="Fake page"/>
        </Typography>
    
)
}
export default Logo