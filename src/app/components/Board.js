import React from 'react'

//import css
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import bootstrapjs from 'bootstrap'

class Board extends React.Component {
  render(){
    return(
      <div>
      <div className="panel-group" id="accordion">
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
          Collapsible Group 1</a>
        </h4>
      </div>
      <div id="collapse1" className="panel-collapse collapse in">
        <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.</div>
      </div>
    </div>
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
          Collapsible Group 2</a>
        </h4>
      </div>
      <div id="collapse2" className="panel-collapse collapse">
        <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.</div>
      </div>
    </div>
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
          Collapsible Group 3</a>
        </h4>
      </div>
      <div id="collapse3" className="panel-collapse collapse">
        <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.</div>
      </div>
    </div>
  </div>
      </div>

    )
  }
}

export default Board
