export type Product1 = {
    id:number,
    title: string
    description: string
    data: string
    image:string
    url:string
    link:string
}

const productsArray: Product1[] = [
    {
        id:1,
        title: 'Gordon Tennant  "The Gods Disco" ',

        description: 'HOT NEW',

        data: 'February 3, 2023',

        
        image:"/images/1.jpg",
        url:"https://wao138377.lnk.to/TheGodsDiscoAW",
        link:"npage1"
    },
    {
        id:2,
        title: 'Doppenberg "Someday" ',

        description: 'HOT NEW',

        data: 'February 2, 2023',

    
        image:"/images/2.jpg",
        url:"https://asot749.lnk.to/SomedayAW",
        link:"npage2"
    },
    {
        id:3,
        title: 'Armin van Buuren "Dayglow" ',

        description: 'HOT NEW',

        data: 'February 1, 2023',

        image:"/images/3.jpg",
        url:"https://avbsc.lnk.to/DayglowAW",
        link:"npage3"
    },
    {
        id:4,
        title: 'Kolonie "Distant Dreams" ',

        description: 'HOT NEW',

        data: 'January 27, 2023',

        image:"/images/4.jpg",
        url:"https://asot743.lnk.to/DistantDreamsAW",
        link:"npage4"
    },
    {
        id:5,
        title: 'UDM  "Colorful Sunrise" ',

        description: 'HOT NEW',

        data: 'January 20, 2023',

        image:"/images/5.jpg",
        url:"https://wao138375.lnk.to/ColorfulSunriseAW",
        link:"npage5"
    },
    {
        id:6,
        title: 'Scorz & Malou  "Love Like Were Dying" ',

        description: 'HOT NEW',

        data: 'January 16, 2023',
        
        image:"/images/6.jpg",
        url:"https://armd1704.lnk.to/LoveLikeWereDyingAW",
        link:"npage6"
    },
] 

export const getProductsObject1 = (array:Product1[]) =>
array.reduce((object,product) => ({...object,[product.id]:product,}),{})


export default productsArray