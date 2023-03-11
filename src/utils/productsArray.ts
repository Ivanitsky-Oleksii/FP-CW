export type Product1 = {
    id:number,
    title: string
    description: string
    data: string
    image:string
    url:string
    link:string
    link2:string
}

const productsArray: Product1[] = [
    {
        id:1,
        title: 'Gordon Tennant  "The Gods Disco" ',

        description: 'NEWS',

        data: 'February 3, 2023',

        
        image:"/images/1.jpg",
        url:"https://wao138377.lnk.to/TheGodsDiscoAW",
        link:"npage1",
        link2:"../npage1"
    },
    {
        id:2,
        title: 'Doppenberg "Someday" ',

        description: 'NEWS',

        data: 'February 2, 2023',

    
        image:"/images/2.jpg",
        url:"https://asot749.lnk.to/SomedayAW",
        link:"npage2",
        link2:"../npage2"
    },
    {
        id:3,
        title: 'Armin van Buuren "Dayglow" ',

        description: 'NEWS',

        data: 'February 1, 2023',

        image:"/images/3.jpg",
        url:"https://avbsc.lnk.to/DayglowAW",
        link:"npage3",
        link2:"../npage3"
    },
    {
        id:4,
        title: 'Kolonie "Distant Dreams" ',

        description: 'NEWS',

        data: 'January 27, 2023',

        image:"/images/4.jpg",
        url:"https://asot743.lnk.to/DistantDreamsAW",
        link:"npage4",
        link2:"../npage4"
    },
    {
        id:5,
        title: 'UDM  "Colorful Sunrise" ',

        description: 'NEWS',

        data: 'January 20, 2023',

        image:"/images/5.jpg",
        url:"https://wao138375.lnk.to/ColorfulSunriseAW",
        link:"npage5",
        link2:"../npage5"
    },
    {
        id:6,
        title: 'Scorz & Malou  "Love Like Were Dying" ',

        description: 'NEWS',

        data: 'January 16, 2023',
        
        image:"/images/6.jpg",
        url:"https://armd1704.lnk.to/LoveLikeWereDyingAW",
        link:"npage6",
        link2:"../npage6"
    },
    {
        id:7,
        title: 'GUEST: Laura van Dam ',

        description: 'PODCAST',

        data: 'October 31, 2022',

        
        image:"/images/27.jpg",
        url:"https://wao138377.lnk.to/TheGodsDiscoAW",
        link:"ppage1",
        link2:"../ppage1"
    },
    {
        id:8,
        title: 'GUEST: Giuseppe Ottaviani  ',

        description: 'PODCAST',

        data: 'December 16, 2022',

    
        image:"/images/13.jpg",
        url:"https://wao138377.lnk.to/TheGodsDiscoAW",
        link:"ppage2",
        link2:"../ppage2"
    },
    {
        id:9,
        title: 'GUEST: Maarten de Jong  ',

        description: 'PODCAST',

        data: 'February 1, 2023',

        image:"/images/26.jpg",
        url:"https://wao138377.lnk.to/TheGodsDiscoAW",
        link:"ppage3",
        link2:"../ppage3"
    },
    {
        id:10,
        title: 'GUEST: Aly & Fila  ',

        description: 'PODCAST',

        data: 'July 1, 2022',

        image:"/images/28.jpg",
        url:"https://wao138377.lnk.to/TheGodsDiscoAW",
        link:"ppage4",
        link2:"../ppage4"
    },
    {
        id:11,
        title: 'GUEST: Dennis Sheperd  ',

        description: 'PODCAST',

        data: 'December 14, 2022',

        image:"/images/24.jpg",
        url:"https://wao138377.lnk.to/TheGodsDiscoAW",
        link:"ppage5",
        link2:"../ppage5"
    },
    {
        id:12,
        title: 'GUEST: Ciaran McAuley  ',

        description: 'PODCAST',

        data: 'November 18, 2022',
        
        image:"/images/25.jpg",
        url:"https://wao138377.lnk.to/TheGodsDiscoAW",
        link:"ppage6",
        link2:"../ppage6"
    },
    {
        id:13,
        title: 'ASOT 1108',

        description: 'RADIO',

        data: 'February 20, 2023',

        
        image:"/images/30.jpg",
        url:"https://wao138377.lnk.to/TheGodsDiscoAW",
        link:"rpage1",
        link2:"../rpage1"
    },
    {
        id:14,
        title: 'ASOT 1107 ',

        description: 'RADIO',

        data: 'February 10, 2023',

    
        image:"/images/29.jpg",
        url:"https://wao138377.lnk.to/TheGodsDiscoAW",
        link:"rpage2",
        link2:"../rpage2"
    },
    {
        id:15,
        title: 'ASOT 1106',

        description: 'RADIO',

        data: 'February 3, 2023',

        image:"/images/31.jpg",
        url:"https://wao138377.lnk.to/TheGodsDiscoAW",
        link:"rpage3",
        link2:"../rpage3"
    },
    {
        id:16,
        title: 'GAIA: Tuvan (AVIRA Remix)',

        description: 'RADIO',

        data: 'January 16, 2023',

        image:"/images/21.jpg",
        url:"https://wao138377.lnk.to/TheGodsDiscoAW",
        link:"rpage4",
        link2:"../rpage4"
    },
    {
        id:17,
        title: 'UDM: Colorful Sunrise',

        description: 'RADIO',

        data: 'January 20, 2023',

        image:"/images/23.jpg",
        url:"https://wao138377.lnk.to/TheGodsDiscoAW",
        link:"rpage5",
        link2:"../rpage5"
    },
    {
        id:18,
        title: 'Lange pres. Firewall: Sincere',

        description: 'RADIO',

        data: 'January 16, 2023',
        
        image:"/images/20.jpg",
        url:"https://wao138377.lnk.to/TheGodsDiscoAW",
        link:"rpage6",
        link2:"../rpage6"
    },
] 

export const getProductsObject1 = (array:Product1[]) =>
array.reduce((object,product) => ({...object,[product.id]:product,}),{})


export default productsArray