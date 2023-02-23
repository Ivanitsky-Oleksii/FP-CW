import logo from 'assets/Logo.png'
import Typography from '@mui/material/Typography'
import 'components/Logo/Logo.scss'


type Props = {}

const Logo = (props: Props) => {
return (

        <img className='logo' src={logo} alt="Fake page"/>
)
}
export default Logo