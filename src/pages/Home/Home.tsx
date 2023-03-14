import ProductList from "components/ProductList/ProductList"

type Props = {addProductToFavorite:(id:number,count:number) => void
    addProductToFavoriteHeader:(id:number,count:number) => void}

const Home = ({addProductToFavorite,addProductToFavoriteHeader}: Props) => {
return (
<div>
<ProductList addProductToFavorite={addProductToFavorite} addProductToFavoriteHeader={addProductToFavoriteHeader}/>
</div>
)
}
export default Home