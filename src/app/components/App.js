import React from 'react'
import BoardContainer from '../containers/BoardContainer'
import ModalContainer from '../containers/ModalContainer'


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h3>Recipe Box</h3>
          <BoardContainer />
          <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#addModal">Add Recipe</button>
          <ModalContainer name="Add" modalName="addModal"/>
        </div>
      </div>
    )
  }
}

export default App
