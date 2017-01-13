import React from 'react'
import BoardComponent from '../containers/BoardContainer'
import ModalContainer from '../containers/ModalContainer'


class App extends React.Component {
  render (){
    return(
      <div className="container">
      <div className="jumbotron">
      <h3>Recipe Box</h3>
       <BoardComponent />
       <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">Add Recipe</button>
        <ModalContainer name="Add"/>
      </div>
     
      </div>
    )
  }
}

export default App
