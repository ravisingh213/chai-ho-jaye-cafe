import React, { useEffect, useState, Fragment } from "react"
import { useForm } from 'react-hook-form'
import { useDispatch } from "react-redux"
import { Edit, Plus, User, X } from 'react-feather'
import { Badge, Alert, Col, Card, CardBody, CardTitle, Button, Modal, ModalFooter, ModalBody, ModalHeader, ButtonGroup, AccordionBody, AccordionHeader, AccordionItem, UncontrolledAccordion, ControlledAccordion, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'
import CenteredModal from "../../component/model/centreModel"

const ProductView = ({ showModal, setShowModal, edit, show1 }) => {
    console.log("", show1)
    const dispatch = useDispatch()
    const form = useForm()
    const { formState: { errors }, handleSubmit, control, register, reset, setValue } = form
    const [loading, setLoading] = useState(false)
    const [loadingDetails, setLoadingDetails] = useState(false)
    const [editData, setEditData] = useState(show1)
    const [open, setOpen] = useState(null)
    const [resLabel, setResLabel] = useState(null)

    const requiredEnabled = true

    const handleModal = () => {
        setOpen(!open)
        setShowModal(!open)
        reset()

    }
    const handleCloses = (from = null) => {
        handleModal()
    }
    const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleModal} />
    useEffect(() => {
        if (showModal) handleModal()
    }, [showModal])

    useEffect(() => {
        if (show1) {
            setEditData(show1)
        }
    }, [show1])

    return (
        <>
            <CenteredModal disableFooter={true} title={`${resLabel ? resLabel?.title : ''} ${(`Product-details`)}`} disableSave={loadingDetails} loading={loading} modalClass={"modal-md"} open={open} handleModal={handleCloses}>
                <span>Product_name:{editData ? editData.name : null}</span><br />
                <span>Product_price:{editData ? editData.price : null}</span><br />
                <span>Product_quanitity:{editData ? editData.quanitity : null}</span><br />
                <span>Product_units_name:{editData ? editData.units_name : null}</span><br />
                <span>Product_created_at:{editData ? editData.created_at : null}</span>
            </CenteredModal>
        </>
    )
}
export default ProductView

// created_at: "2022-07-02 12:18:55"
// description: "small very  in size"
// id: 24
// name: "milk"
// price: 40
// quanitity: 55
// unit_id: 1
// units_name: "Litre"
// updated_at: "2022-07-02 12:18:55"