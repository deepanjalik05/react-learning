import './App.css'
// import Card from './components/Card'
import {useState} from 'react'
import Panel from './components/Panel'
import Card from './components/Card';
function App() {
//create state
//manage state
//change state
//sabhi child me state ko sync karwadungi
  const[name, setName] = useState('');
  const[isActive, setIsActive] = useState(0);
  return (
   <>
   <div>
     <Card title = "card1" val={name} setName ={setName} />
     <Card title = "card2" val={name} setName ={setName} />
     </div>
     <h2>Almaty, Kazakhstan</h2>
      <Panel title="About" isActive={isActive===0} onshow ={()=>setIsActive(0)}>
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel title="Etymology" isActive={isActive===1} onshow ={()=>setIsActive(1)}>
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
   </>
  )
}

export default App
