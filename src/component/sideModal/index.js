// ** React Imports
import { X } from 'react-feather'
import { Offcanvas, OffcanvasBody, OffcanvasHeader, ButtonGroup, Button, ModalFooter } from 'reactstrap'
const SideModal = ({ loading = false, open, disableSave = false, direction, handleModal, children, handleSave, title = "modal-title", done = "done", close = "close" }) => {
    // ** State
    // const [Picker, setPicker] = useState(new Date())

    // ** Custom close btn
    const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleModal} />

    return (
        <Offcanvas
            isOpen={open}
            toggle={handleModal}
            className='sidebar-sm'
            direction={direction}
            modalClassName='modal-slide-start'
            contentClassName='pt-0 pb-0'
        >
            <OffcanvasHeader className='mb-0' toggle={handleModal} close={CloseBtn} tag='div'>
                <h5 className='modal-title'>
                    {(title)}
                </h5>
            </OffcanvasHeader >
            <OffcanvasBody className='flex-grow-1 pt-2 pb-2' style={{ height: "100vh", overflowY: "scroll" }}>
                {children}
            </OffcanvasBody>
            <ModalFooter>
                <ButtonGroup className="btn-block">
                    <Button color='secondary' onClick={handleModal} outline>
                        {(close)}
                    </Button>
                    <Button disabled={disableSave} loading={loading} color='primary' onClick={handleSave}>
                        {(done)}
                    </Button>

                </ButtonGroup>
            </ModalFooter>
        </Offcanvas>
    )
}

export default SideModal
