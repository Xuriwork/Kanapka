import React from 'react';

export const Modal = ({ header, subHeader, setConfirmationModal, buttonActionName, buttonAction, otherButtonActionName, otherButtonAction, paragraphStyle }) => {

    const closeModalHandler = () => {
        setConfirmationModal(false);
    };

    const actionHandler = () => {
        buttonAction();
        closeModalHandler();
    };

    const handleOtherButtonAction = () => {
        otherButtonAction();
        closeModalHandler();
    };

    window.onclick = (event) => {
        const modal = document.getElementById('modal');
        if (event.target === modal) {
            closeModalHandler();
        }
    };

    return (
        <span
            style={{ display: 'flex' }}
            id='modal'
            className='modal'
        >
            <div className='modal-content-container remove-item-modal'>
                <div className='modal-content'>
                    <h3>{header}</h3>
                    <p style={paragraphStyle}>{subHeader}</p>
                    <div className='buttons-container'>
                        <button onClick={handleOtherButtonAction}>{otherButtonActionName}</button>
                        <button onClick={actionHandler}>{buttonActionName}</button>
                    </div>
                </div>
            </div>
        </span>
    );
};

export default Modal;
