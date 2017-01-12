import React from 'react'
import BoardComponent from '../containers/BoardContainer'
import ButtonsContainer from '../containers/ButtonsContainer'


class App extends React.Component {
  render (){
    return(
      <div className="container">
      <div className="jumbotron">
      <h3>Recipe Box</h3>
       <BoardComponent />
      <ButtonsContainer />
      </div>
     
      </div>
    )
  }
}

export default App
