import React, { useState, useEffect } from 'react'
import './App.css'
import marked from 'marked'
import { sampleText } from './sampleText'


const App = () => {
  const [text, setText] = useState(sampleText)

  useEffect(() => {
    const text = localStorage.getItem('text')
    if (text) {
      setText(text)
    } else {
      setText(sampleText)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('text', text)
  }, [text])
    
  const renderText = text => {
    const __html = marked(text, { sanitize: true })
    return {__html}
  }


  return (
    <div className='container'>
      <div className='row'>
        <div className="col-sm-6">
          <textarea 
            onChange={(e) => setText(e.target.value)}
            value={text}
            className='form-control'
            rows="30"
          > 
          </textarea>
        </div>
        <div className="col-sm-6">
          <div>
            <div dangerouslySetInnerHTML={renderText(text)}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
