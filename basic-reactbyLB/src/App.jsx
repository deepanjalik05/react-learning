import Usercard from "./components/Usercard"
import basicprops from "./components/basicprops"
import './App.css'
import me from './assets/me.jpg'
import Gugu from './assets/Gugu.jpg'
import cat_image from './assets/cat_image.jpg'
function App() {

  return (
    <>
      <div className="container">
        <Usercard name="Deepanjali" desc ="it's me!" image ={me} style={{"border-radius": "10px"}}/>
        <Usercard name="Cat" desc ="it's Beautiful Cat" image ={cat_image} style={{"border-radius": "10px"}}/>
        <Usercard name="Google" desc ="it's my pet" image ={Gugu} style={{"border-radius": "10px"}} />
      </div>


      <div>
        <card name ="deepu">
            <h1>Hello everyone</h1>
            <p> this side deepanjali</p>
        </card>

        <card children ="hello how are you">
          my pet name is google
        </card>
      </div>
    </>
  )
}

export default App
