import React from "react";
import "./Modal.css";

export default class Modal extends React.Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ isOpen: true })}>
          Modal Open
        </button>

        {this.state.isOpen && (
          <div className="modal">
            <div className="modal-body">
              <h1>Title Modal</h1>
              <p>This Modal</p>
              <button onClick={() => this.setState({ isOpen: false })}>
                Close
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
