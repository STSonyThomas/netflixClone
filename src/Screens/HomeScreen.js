import Row from '../Row.js';
import requests from '../requests';
import Banner from '../Banner';
import Nav from '../Nav';

function HomeScreen (){
    return(
        <div className="HomeScreen">
            {/* Nav */}
            <Nav/>
            <Banner/>

            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
            <Row title ="Trending Now" fetchUrl={requests.fetchTrending}/>
            <Row title ="Top Rated" fetchUrl={requests.fetchTopRated}/>
            <Row title ="Action Movies" fetchUrl={requests.fetchActionMovies}/>
            <Row title ="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        </div>
    )
}

export default HomeScreen;