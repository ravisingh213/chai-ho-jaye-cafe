import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Row, Col, Input, Form, ButtonGroup } from 'reactstrap'
import { Star, X } from 'react-feather'
import SideModal from '../../component/sideModal'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import FormGroupCustom from "../../component/fromGropCustoms/index.js"
import { createSelectOptions, createAsyncSelectOptions } from '../../utility/Utils'
import { addedProduct } from '../../api/product/index.js'
import { loadUnit } from '../../api/unit'
// import { useAlert } from 'react-alert'
import clientConfig from '../../confing'
const ProductForm = ({ show, edit = null, handleModal, show1 }) => {
    console.log("..edit", show1)
    const [open, setOpen] = useState(show)
    const [loading, setLoading] = useState(false)
    const [editData, setEditData] = useState(show1)
    const [unit1, setUnit1] = useState([])
    const form = useForm()
    const dispatch = useDispatch()
    // const optio = useSelector(state => state.unit.units.data)
    // // console.log("mmmmm", optio)
    // const alert = useAlert()
    const { formState: { errors }, handleSubmit, control, register, reset, setValue, watch } = form
    const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleModal} />
    useEffect(() => {
        if (show) setOpen(true)
        if (!show) reset()
    }, [show])

    useEffect(() => {
        if (show1) { setEditData(show1) }
    }, [show1])

    useEffect(() => {
        (async () => {
            const result = await axios.post(`${clientConfig.siteUrl}/units`)
            setUnit1(createSelectOptions(result?.data?.data, "name", "id"))

        })()
    }, [])

    const onSubmit = (data) => {
        dispatch(addedProduct(data))
    }
    // watch("unit_id") === 2 ? parseInt("quanitity") / 1000 : "quantity"
    return (<>
        <div>
            <Modal isOpen={show} toggle={handleModal}
                close={CloseBtn}
                className='modal-dialog-centered'>
                <ModalHeader toggle={handleModal} >{show1 ? "Update Form" : "Create form"}</ModalHeader>
                <ModalBody>
                    <>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <FormGroupCustom
                                value={editData?.name}
                                label={" Enter product "}
                                name={"name"}
                                type={"text"}
                                errors={errors}
                                className="mb-2"
                                control={control}
                                rules={{ required: true }} />
                            <Row>
                                <Col md="8">
                                    <FormGroupCustom
                                        value={editData?.quanitity}
                                        label={" Enter quanitity"}
                                        name={"quanitity"}
                                        type={"number"}
                                        errors={errors}
                                        className="mb-2"
                                        control={control}
                                        rules={{ required: true }} />
                                </Col>
                                <Col md="4">
                                    <FormGroupCustom
                                        value={editData?.unit_id}
                                        label={" Enter unit"}
                                        name={"unit_id"}
                                        options={unit1}
                                        type={"select"}
                                        errors={errors}
                                        className="mb-2"
                                        control={control}
                                        rules={{ required: true }} />
                                </Col>
                            </Row>
                            <FormGroupCustom
                                value={editData?.price}
                                label={" Enter Price"}
                                name={"price"}
                                type={"number"}
                                errors={errors}
                                className="mb-2"
                                control={control}
                                rules={{ required: true }} />

                            <FormGroupCustom
                                value={editData?.description}
                                label={" Enter description"}
                                name={"description"}
                                type={"textarea"}
                                errors={errors}
                                className="mb-2"
                                control={control}
                                rules={{ required: true }} />

                            <ModalFooter>
                                <Button type='submit' color='primary'>
                                    submit
                                </Button>
                                <Button outline color='secondary' onClick={handleModal}  >
                                    close
                                </Button>
                            </ModalFooter>
                        </Form>
                    </>
                </ModalBody>
            </Modal>
        </div>
    </>)
}

export default ProductForm
