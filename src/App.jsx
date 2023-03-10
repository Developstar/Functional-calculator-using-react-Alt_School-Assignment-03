import './App.css'

import { useState } from 'react'

export default function App() {
  
  let ot = ['/', '+', '-', '*', '=', '.']

  const [output, setOutput] = useState("");
  const [result, setResult] = useState("");



  const updateOutput = value => {

    if (ot.includes(value) && output === '' || ot.includes(value) && ot.includes(output.slice(-1))) {
      return '';
    }

    setOutput((prev) => prev += value)


    setResult(eval(output + value))

  }


  const deleteOutput = () => {

    setOutput((value) => value = output.slice(0, -1))
  }

  const clearOutput = () => {
    setResult((value) => value = '')
    setOutput((value) => value = '')
  }

  const calcOutput = () => {

    setOutput(value => value = eval(output))
  }




  return (
    <main>
      <div className='container'>
        
        <div className='display'>
          <span>{output}</span>
          <br></br>
          <span className='results'>{result}</span>
        </div>


        <div className='btn-div'>
          <button onClick={() => clearOutput()} className='clean btns'> A/C</button>
           <button onClick={() => calcOutput()} value='=' className='equals btns'> = </button>
          <button onClick={() => updateOutput('.')} className='btns'> .</button>
          <button onClick={() => updateOutput('0')} className='btns'> 0</button>
          <button onClick={() => updateOutput('1')} className='btns'> 1</button>
          <button onClick={() => updateOutput('2')} className='btns'> 2</button>
          <button onClick={() => updateOutput('3')} className='btns'>3 </button>
          <button onClick={() => updateOutput('4')} className='btns'>4 </button>
          <button onClick={() => updateOutput('5')} className='btns'> 5</button>
          <button onClick={() => updateOutput('6')} className='btns'> 6</button>
          <button onClick={() => updateOutput('7')} className='btns'> 7</button>
          <button onClick={() => updateOutput('8')} className='btns'> 8</button>
          <button onClick={() => updateOutput('9')} className='btns'> 9</button>
          <button onClick={() => updateOutput('*')} className='btns'> x</button>
          <button onClick={() => updateOutput('-')} className='btns'> -</button>
          <button onClick={() => updateOutput('+')} className='btns'> +</button>
          <button onClick={() => deleteOutput()} className='rmv btns'> DEL</button>
          <button onClick={() => updateOutput('/')} className='btns'> /</button>
         
        </div>


      </div>

      <h3>@ Adeyeye Boluwatife  </h3>
    </main>
  )
}
