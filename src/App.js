import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav'
function App() {
  return(
  <div className='app'>
    <h1>
      
    </h1>
    <Nav/>
    <Banner/>
    <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
    <Row title ="Trending now" fetchUrl={requests.fetchTrending}/>
    <Row title ="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title ="Top Rated" fetchUrl={requests.fetchTopRated}/>
    <Row title ="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title ="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title ="Romance Movies " fetchUrl={requests.fetchRomanceMovies}/>
    <Row title ="Documentaries" fetchUrl={requests.fetchHorrorMovies}/>
  </div>
  );
}

export default App;
