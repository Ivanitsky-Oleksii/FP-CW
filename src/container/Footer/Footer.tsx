import 'container/Footer/Footer.scss'
import { Link } from 'react-router-dom'
type Props = {}

const Footer = (props: Props) => {
    return (
            <>
            <div className='footer-about'>
            <Link className="back-btn" to="about">
                        ABOUT US
                    </Link>
            </div>
            <div className='footer'>© Copyright 2023 </div>
            
            </>
    )
}
export default Footer