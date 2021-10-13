import React, { useState, useEffect } from 'react'
import LineGraph from './LineGraph'

function Modal() {
  //state variables

  let [loader, setLoader] = useState(false)
  let [displayGraph, setDisplayGraph] = useState(false)

  //gif code
  const DisplayGif = (loader) => {
    if (loader == false) {
      return null
    } else {
      return (
        <>
          <div>
            <iframe
              src='https://giphy.com/embed/xTkcEQACH24SMPxIQg'
              width='500'
              height='500'
              frameBorder='0'
              className='giphy-embed loading-image'
              allowFullScreen
            ></iframe>
            {/* <iframe
              src='https://giphy.com/embed/ekBL4SQQBkwWhFIHrY'
              width='480'
              height='480'
              frameBorder='0'
              class='giphy-embed loading-image'
              allowFullScreen
            ></iframe> */}
          </div>
        </>
      )
    }
  }

  //gif click handlert
  const showGif = () => {
    if (loader == false) {
      loader = !loader
      setLoader(loader)
      console.log(loader)
    }
    setTimeout(() => {
      loader = !loader
      setLoader(loader)
      console.log(loader)
    }, 7000)
  }

  //graph code
  const DisplayLineGraph = (displayGraph) => {
    if (displayGraph == false) {
      return null
    } else {
      return (
        <>
          <div className='graph'>
            <LineGraph />
            <p
              style={{
                textAlign: 'center',
                paddingTop: '20px',
                paddingBottom: '20px',
              }}
              onClick={() => {
                displayGraph = false
                setDisplayGraph(displayGraph)
              }}
            >
              Click here to close graph
            </p>
          </div>
        </>
      )
    }
  }

  //graph click handler
  const showGraph = () => {
    if (displayGraph == false) {
      displayGraph = !displayGraph
      setDisplayGraph(displayGraph)
      console.log(displayGraph)
    }
    setTimeout(() => {
      displayGraph = !displayGraph
      setLoader(displayGraph)
      console.log(displayGraph)
    }, 3000)
  }

  /* ************************************************************ */
  return (
    <>
      <button
        type='button'
        className=' button btn btn-outline-warning btn-lg'
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'
      >
        Show Picture!
      </button>
      <div className='dialog-box modal-box modal-dialog-box'>
        <div
          className='modal fade'
          id='exampleModal'
          tabIndex='-1'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog'>
            <div className='modal-content'>
              <img src='https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80' />
              <div className='button-modal'>
                <button
                  type='button'
                  className='btn btn-outline-warning'
                  data-bs-dismiss='modal'
                  onClick={showGif}
                >
                  Show Gif!
                </button>
                <button
                  type='button'
                  className='btn btn-outline-warning'
                  data-bs-dismiss='modal'
                  onClick={showGraph}
                >
                  Show Graph!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {DisplayGif(loader)}
      {DisplayLineGraph(displayGraph)}
    </>
  )
}

export default Modal
