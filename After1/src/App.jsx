import NavBar from '../components/NavBar';
import ItemListContainer from '../components/ItemListContainer';
import Greeting from '../components/Greeting';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={Greeting} />
      <Greeting></Greeting>
    </>
  );
};

export default App;

