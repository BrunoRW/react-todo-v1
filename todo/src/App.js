import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';

function App() {

  const getLocal = ()=> {
    let local = localStorage.cards;
    if(!local){
      return [];
    } else {
      return JSON.parse(local);
    }
  }
  
  let ini = getLocal();
  
  const [lista, setLista] = useState(ini);

  useEffect(() => {
    localStorage.cards = JSON.stringify(lista);
  }, [lista]);

  const addLista = ()=> {
    let val = document.getElementById('inp').value;
    let datanow = new Date().getTime();
    setLista([...lista, [datanow,val, false]]);
    console.log(lista)
  }

  let msg = ()=> {
    if(lista.length === 0){    
      return (
        <div key="no-list" className='noList'>
          <h3 className="subtitle">Ops...</h3>
          <p className='noList-p'>
            Parece que você ainda não possui nenhuma atividade armazenada!
          </p>
        </div>
      )
    }
  }
  return (
    <div id="container">
      <h1 className='title'>To-do List</h1>
        <div id="cont">
          <input id="inp" placeholder='Adicione um novo item...'/>
          <button className="bt" onClick={addLista}>Adicionar</button>
        </div>
      
        <div id="cards-out">
            {[...lista].reverse().map(e=>{
              return <p className="card" key={e[0]}>{e[1]}</p>;    
            })}
            {msg()}
        </div>
    </div>
  );
}

export default App;
