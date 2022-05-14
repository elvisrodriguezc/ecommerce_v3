import MobileList from './MainPage/MobileList'
import Policy from './MainPage/Policy'
// import Promotions from './MainPage/Promotions'
import Slider from './MainPage/Slider'
import Subscribe from './MainPage/Subscribe'
import TrendingItems from './MainPage/TrendingItems'
import Footer from '../components/Footer'
import TopNav from '../components/TopNav'
import Header from '../components/Header'
//Redux
import { useSelector } from "react-redux";
import "../assets/style/mainPage.css"
const MainPage = () => {
    const { categories, products, trendings, isLoaded } = useSelector(state => state.ecommerce);
    return (
        <>
            <TopNav />
            <Header />
            <Slider />

            {/* {isLoaded && <Promotions promotions={promotions} />} */}
            {isLoaded && <TrendingItems trendings={trendings} />}
            {isLoaded && <MobileList products={products} categories={categories} />}
            <Policy />
            <Subscribe />
            <Footer />
        </>
    )
}

export default MainPage