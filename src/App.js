// import './App.css';
import Cards from './components/cards';
import Navbar from './components/navbar';
function App() {

  return (
    <>
     <Navbar/>
  <div className="d-flex gap-1 justify-content-center pt-5">
   
    <Cards title="Kung Fu Panda" src="https://c4.wallpaperflare.com/wallpaper/503/569/175/kung-fu-panda-panda-wallpaper-preview.jpg"
    para="Po is a clumsy and fun-loving panda who works in his father’s noodle shop but dreams of becoming a kung fu master. One day, by pure luck, he is chosen as the Dragon Warrior, a legendary hero meant to defeat a powerful villain."/>

<Cards title="Lion king" src="https://cdna.artstation.com/p/assets/images/images/021/579/506/large/evan-whitefield-simbagrub-01-evanwhitefield.jpg?1572218383"
    para="Simba is a young lion who must embrace his destiny as the rightful king of the Pride Lands."/>

<Cards title="Tailung" src="https://cdnb.artstation.com/p/assets/images/images/085/367/679/large/alexandre-mougenot-tailung.jpg?1740613872"
    para="Tailung is a young dragon who must embrace his destiny as the rightful king of the Dragon Lands."/>
  </div>
    </>
  );
}

export default App;
