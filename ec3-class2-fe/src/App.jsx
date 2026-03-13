import { useEffect, useState } from "react";
import "./styles/App.css";
import "./styles/DataList.css";
import DataList from "./components/DataList";
import Modal from "./components/Modal";

function App(){
  // Estados
  const [data,setData] = useState([]);
  const [modalIsOpen,setmodalIsOpen] = useState(false);
  const [userClicked,setuserClicked] = useState(null);

  // Funções
  function getData(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then((data) => {setData(data)});
  }

  function onClickCard(user){
    console.log(user);
    setmodalIsOpen(true);
    setuserClicked(user);
  }

  // Efeitos
  useEffect(() => {
    console.log("Componente montado!");
    getData();
  },[])

  // Ao renderizar uma lista dinâmica cada elemento precisa de uma chave única
  return (<>
  <div className="container">
    <h3>Lista de usuários:</h3>
      {data.map(item => <DataList key={item.id} onClickCard={onClickCard} item={item}></DataList>)}
      {modalIsOpen && <Modal user={userClicked} onClose={() => {setmodalIsOpen(false); setuserClicked(null)}}></Modal>}
  </div>
</>)
}

export default App;