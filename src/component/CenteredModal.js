import { useEffect } from 'react'
import {
    Button, ButtonGroup, Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap'
import Hide from '../utility/Hide'
const CenteredModal = ({ hideSave = false, footerComponent = null, display = true, scrollControl = true, disableHeader = false, disableFooter = false, loading = false, modalClass, open, disableSave = false, handleModal, children, handleSave, handleSign, fullscreen, title = "modal-title", sign = "sign", done = "save", close = "close", extraButtons = null }) => {
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
            className={`modal-dialog-centered ${modalClass}`}
            fullscreen={fullscreen}
        >
            <Hide IF={disableHeader}>
                <ModalHeader className='' toggle={e => handleModal(null)}>
                    {title}
                </ModalHeader>
            </Hide>
            <ModalBody className='flex-grow-1 p-0'>
                {children}
            </ModalBody>
            <Hide IF={disableFooter}>
                <ModalFooter>
                    <Hide IF={footerComponent}>
                        <div className=''>
                            <ButtonGroup className="btn-block">
                                <Button.Ripple color='secondary' onClick={e => handleModal('from-button')} outline>
                                    {(close)}
                                </Button.Ripple>
                                <Hide IF={hideSave}>
                                    <Button disabled={disableSave} loading={loading} color='primary' outline={extraButtons !== null} onClick={handleSave}>
                                        {(done)}
                                    </Button>
                                </Hide>


                                {extraButtons}
                            </ButtonGroup>
                        </div>
                    </Hide>
                    {
                        footerComponent
                    }
                </ModalFooter>
            </Hide>
        </Modal>
    )
}
export default CenteredModal