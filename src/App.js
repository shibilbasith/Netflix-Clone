import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './request';

function App() {
  return (
    <>
    <Nav />
      <Banner
      fetchUrl={requests.fetchNetflixOriginals}
      />
        <Row 
        isLargeRow={true}
        title="Netflix Originals" 
        fetchUrl={requests.fetchNetflixOriginals}/>
        <Row title="Trending" fetchUrl={requests.fetchTrending}/>
        <Row title="TopRated" fetchUrl={requests.fetchTopRated}/>
        <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </>
  );
}

export default App;
