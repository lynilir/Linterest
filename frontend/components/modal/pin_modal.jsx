import React from 'react';
import Modal from 'react-modal';
import PinShowContainer from '../pins/pin_show_container';

const style = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.9)',
    zIndex          : 10
  },
  content : {
    display         : 'flex',
    justifyContent  : 'center',
    left            : '25%',
    right           : '25%',
    border          : '1px solid #ccc',
    zIndex          : 11,
    opacity         : 0,
    transition      : 'opacity 0.4s'
  }
};

class PinModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
    style.content.opacity = 0;
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  afterModalOpen() {
    style.content.opacity = 100;
  }

  render() {
    let { pin } = this.props;
    return(
      <div>
        <button
          className="pins-modal-item"
          onClick={this.openModal}>
          <img className="pin-modal-img" src={pin.image_url}></img>
        </button>
        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.afterModalOpen}
          onRequestClose={this.closeModal}
          style = {style}
          contentLabel="Pin Modal">

          <PinShowContainer className='pin_show_container'
            closeModal={this.closeModal}
            id={pin.id} />
        </Modal>
      </div>
    );
  }
}

export default PinModal;
