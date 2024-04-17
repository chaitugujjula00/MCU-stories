import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div className=' h-auto'>
      <div className='sticky top-0 z-10 shadow-2xl'><Header /></div>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
