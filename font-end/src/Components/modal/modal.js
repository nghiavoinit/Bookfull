import React from 'react';
import './modal.css'
const modal = props => {

    <div  className="modal">
        <header className="modal-header">{props.title}</header>
        <section className="modal_content">
            {props.children}
        </section>
        <section className="modal_action">
            {props.canCancel && <button className="btn">Cancel</button>
            }
            {props.canConfirm && <button className="btn">Confirm</button>
            }
        </section>

    </div>
}

export default modal