import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'
import 'pages/About/About.scss'

type Props = {}
const About = (props:Props) => {
    return(
        <div className='about'>
            <h1>About</h1>
        <p>A State Of Trance Having evolved from a small radio show into a wide-ranging and far-reaching brand with many different spin-offs, "A State of Trance" is one of the world's biggest and most popular dance music brands. Built from the ground up since the very first episode of Armin van Buurens radio show in 2001, ASOT now entails a globally acclaimed label and a breathtaking event series to boot, drawing tens of thousands of music lovers from all over the globe.

<h1>The Radio Show</h1>

"A State Of Trance" is one of the most popular and beloved weekly dance radio shows in the world. Currently broadcast to an estimated 40 million listeners across more than 84 countries and 100 FM radio stations per show (as well as to the global audiences via online video live streams on Facebook and YouTube), the radio show of five-time #1 DJ in the world Armin van Buuren (with co-host Ruben de Ronde) won the award for "Best Mix Radio Show" at the International Dance Music Awards in Miami in 2007, 2008, 2009, 2010, 2012, 2013, 2014 and 2018.

Providing fans with mixes from weekly guest DJs, occasional XXL episodes and always two hours of the best and latest in Trance and Progressive every week (including the fan-voted Future Favorite, Tune Of The Week, Progressive Pick, and a Service For Dreamers classic track  presented by a lucky fan live in the studio every episode), "A State Of Trance" managed to evolve into a comprehensive and global music brand, with spin-offs in all shapes and forms.

<h1>The Label</h1>

The "A State Of Trance" label spotlights releases from established artists and upcoming talents alike. Many of the label's releases are featured on the globally respected and always highly anticipated installments of the "A State Of Trance" mix album series, which has been spoiling fans from all over the world with the year's best Trance records at least biannually since 2004.

<h1>The Events</h1>

And if that wasn't enough, ASOT always celebrates its birthdays in style with the "A State Of Trance" event series, widely regarded as the biggest indoor - and outdoor - event series in the world. Every year, the annual "A State Of Trance" event in Utrecht attracts tens of thousands of visitors from all over the world, all of whom get to enjoy the mind-blowing performances of a legion of DJs across multiple stages. Fans who aren't able to attend are given the opportunity to follow the complete musical journey via the video and audio live stream at https://www.youtube.com/astateoftrance. The 'A State Of Trance" event series doesn't just stick to the Netherlands though, as it has brought unforgettable moments to countless other world cities and countries as well, from Sydney, Australia and Mumbai, India to Miami, United States, Mexico City, Mexico and many other destinations across the globe. It has even brought its sound to stages at leading festivals such as Ultra and Tomorrowland. All combined, A State Of Trance draws hundreds of thousands of dedicate ASOT fans from all over the world every single year.
</p>

            <Button className='back-btn' color="inherit"><Link className='back-btn' to="/">BACK TO HOME</Link></Button>
        </div>
    )
}
export default About