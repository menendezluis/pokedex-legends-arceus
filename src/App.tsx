import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Background from "./assets/images/background.jpeg"
import {Button,Modal,Fragment} from "./atoms"
function App() {
  const [count, setCount] = useState(0)
  return (

    <div className="bgpattern">
     

        <p>
          <Modal style="bgpattern p-0 p-0 shadow-sm	 shadow-black shadow-opacity-5 mix-blend-luminosity	rounded-md		block lg:flex  " size="LG">
            
            <Fragment style="bg-white w-[100%] h-[50px]  lg:w-1/6 bg-stone-800 lg:h-[100%]">
            &nbsp;
              </Fragment>
              <Fragment style=" w-[100%] flex flex-col justify-center items-center">
                <Fragment style="bg-lime-50 w-[200px] flex flex-col justify-center items-center">
                  Pokedex
                  </Fragment>
              <Button click={() => setCount((count) => count + 1)}
          style="bg-transparent hover:bg-blue-500 text-primary font-semibold hover:text-sky-900 text-xs	py-2 px-8 border border-primary hover:border-transparent rounded-full">
              count is: {count}
              
          </Button>
              </Fragment>
         
          </Modal>
          
        </p>
       
    </div>
  )
}

export default App
