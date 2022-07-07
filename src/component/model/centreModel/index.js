
import React, { useEffect } from 'react'
import {
    Button, ButtonGroup, Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap'
import { Star, X } from 'react-feather'

const CenteredModal = ({ hideSave = false, footerComponent = null, display = true, scrollControl = true, disableFooter = false, loading = false, modalClass, open, disableSave = false, handleModal, children, handleSave, handleSign, fullscreen, title = "modal-title", sign = "sign", done = "save", close = "close", extraButtons = null }) => {
    useEffect(() => {
        if (scrollControl) {
            if (open !== null) {
                if (open) {
                    document.body.style.overflow = "hidden"
                } else {
                    document.body.style.overflowY = "visible"
                }
            }
        }
    }, [open])

    useEffect(() => {
        if (open !== null) {
            if (open) {
                document.body.style.overflow = "hidden"
            } else {
                document.body.style.overflowY = "visible"
            }
        }
    }, [display])

    return (
        <Modal
            zIndex={open ? '1050' : "1049"}
            wrapClassName={`animatedOpacity ${display ? "" : "send-left"}`}
            isOpen={open}
            toggle={e => handleModal(null)}
            backdrop="static"
            scrollable={scrollControl}
            keyboard={false}
            className={`modal-dialog-centered ${modalClass}`} >
            <ModalHeader className='' toggle={e => handleModal(null)}>
                {title}
            </ModalHeader>


            <ModalBody className='flex-grow-1 pt-2 pb-2' style={{ height: "100vh", overflowY: "scroll" }}>
                {children}
            </ModalBody>
            <ModalFooter>
                <div className=''>
                    <ButtonGroup className="btn-block">
                        <Button color='secondary' onClick={e => handleModal('from-button')} outline>
                            {(close)}
                        </Button>
                        {/* <Button disabled={disableSave} loading={loading} color='primary' outline={extraButtons !== null} onClick={handleSave}>
                            {(done)}
                        </Button> */}

                        {extraButtons}
                    </ButtonGroup>
                </div>

                {
                    footerComponent
                }
            </ModalFooter>
        </Modal>
    )
}

export default CenteredModal
