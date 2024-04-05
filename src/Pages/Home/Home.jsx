import Banner from "../../component/Banner/Banner";
import Container from "../../component/Container/Container";
import Gallery from "../../component/Gallery/Gallery";
import StickyNavbar from "../../component/StickyNavbar/StickyNavbar";
import TopCategories from "../../component/TopCategories/TopCategories";





const Home = () => {
    return (
        <div>
            <Container>
                <StickyNavbar></StickyNavbar>
                <Banner></Banner>
                <TopCategories></TopCategories>
                <Gallery></Gallery>
            </Container>
        </div>
    );
};

export default Home;