import 'container/Footer/Footer.scss'
import { Link } from 'react-router-dom'
import twit from 'assets/png1.png'
import youtube from 'assets/png2.png'
import inst from 'assets/png3.png'
type Props = {}

const Footer = (props: Props) => {
    return (
            <>
            <div className='footer-about'>
            <Link className="back-btn" to="about">
                        ABOUT US
                    </Link>
            </div>
            <div className='footer'>© Copyright 2023 <a style={{paddingLeft:"100px"}} href="https://twitter.com/asot"><img src={twit} alt="#" style={{width:"60px",height:"60px",padding:"10px"}}/></a>
                            <a href="https://www.youtube.com/asotrecordings"><img src={youtube} alt="#" style={{width:"60px",height:"60px",padding:"10px"}}/></a>
                            <a href="https://www.instagram.com/asotlive/"><img src={inst} alt="#" style={{width:"60px",height:"60px",padding:"12px"}}/></a></div>
            
            </>
    )
}
export default Footer