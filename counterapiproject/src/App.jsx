import Counter from './components/counter';
import useCount from './context/countercontext'
function App() {
   const {count} = useCount();
   return (
    <>
           <h1>Count is : {count}</h1>
           <Counter />
           <Counter />
           <Counter />
    </>
  )
}

export default App
