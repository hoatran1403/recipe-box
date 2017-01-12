import React from 'react'
import BoardComponent from '../containers/BoardContainer'
import ButtonsContainer from '../containers/ButtonsContainer'


class App extends React.Component {
  render (){
    return(
      <div className="container">
      <BoardComponent />
      <ButtonsContainer />
      </div>
    )
  }
}

export default App
