import React, { Component } from 'react';
import Modal from '../Components/modal/modal'
import '../Components/modal/modal'
class Events extends Component {
    render() {
        return (
            <React.Fragment>c
                <Modal title ="Add Event" canCancel canConfirm >
                    <h1>modal content</h1>
                </Modal>
            <div>
                    Events page1
            </div>
            </React.Fragment>
        );
    }
}

export default Events;