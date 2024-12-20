import './App.css';
import Header from './Mycomponents/Header';
import Todos from './Mycomponents/Todos';
import Footer from './Mycomponents/Footer';

function App() {
  let work = [
    {
        sno:1,
        title:"make todo",
        decs:"Make todo in react full functional"
    },
    {
        sno:2,
        title:"check of any error",
        decs:"make sure no warning or error in todo" 
    },
    {
        sno:3,
        title:"Github",
        decs:"Upload in github"
    }
]

  return (
    <>
    <Header title="My Todolist"/>
    <Todos works = {work}/>
    <Footer/>
    </>
  );
}

export default App;
