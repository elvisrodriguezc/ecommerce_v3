import MobileList from '../components/MainPage/MobileList'
// import Promotions from './MainPage/Promotions'
import Slider from '../components/MainPage/Slider'
import TrendingItems from '../components/MainPage/TrendingItems'
//Redux
import { useSelector } from "react-redux";
import "../assets/style/mainPage.css"
const MainPage = () => {
    const { categories, products, trendings, isLoaded } = useSelector(state => state.ecommerce);
    return (
        <>
            <Slider />
            {/* {isLoaded && <Promotions promotions={promotions} />} */}
            {isLoaded && <TrendingItems trendings={trendings} />}
            {isLoaded && <MobileList products={products} categories={categories} />}

        </>
    )
}

export default MainPage