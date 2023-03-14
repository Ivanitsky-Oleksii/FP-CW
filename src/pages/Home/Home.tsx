import ProductList from "components/ProductList/ProductList"

type Props = {addProductToFavorite:(id:number,count:number) => void
    }

const Home = ({addProductToFavorite}: Props) => {
return (
<div>
<ProductList addProductToFavorite={addProductToFavorite}/>
</div>
)
}
export default Home