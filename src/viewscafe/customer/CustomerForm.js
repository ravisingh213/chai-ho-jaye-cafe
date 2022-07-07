import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Row, Col, Input, Form, ButtonGroup } from 'reactstrap'
import { Star, X } from 'react-feather'

import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import FormGroupCustom from "../../component/fromGropCustoms/index.js"
import { createConstSelectOptions, createAsyncSelectOptions, gender } from '../../utility/Utils'

import { addedCustomer, updatCustomer } from '../../api/customer/index.js'
import Swal from "sweetalert2"
const CustomerForm = ({ show, edit = null, handleModal, show1 }) => {
    console.log("..edit", show1)
    const [open, setOpen] = useState(show)
    const [loading, setLoading] = useState(false)
    const [adddata, setAdddata] = useState(null)
    const [editData, setEditData] = useState(show1)
    const [unit1, setUnit1] = useState([])
    const form = useForm()
    const id = show1?.id
    const dispatch = useDispatch()
    const { formState: { errors }, handleSubmit, control, register, reset, setValue, watch } = form
    const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleModal} />
    useEffect(() => {
        if (show) setOpen(true)
        if (!show) reset()
    }, [show])

    useEffect(() => {
        if (show1) { setEditData(show1) }
    }, [show1])

    const Handlesub = () => {
        Swal.fire({
            // ...this.props,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, added it!',
            onOpen: () => {
                // code
            }
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'added success!',
                    'Your file has been added.',
                    'success'
                )
            }
        })
    }

    useEffect(() => {
        dispatch(addedCustomer(adddata))
        if (adddata) {
            Handlesub()
        }
    }, [adddata])

    const onSubmit = (data) => {
        // if (show1 && show1) {
        //     dispatch(updatCustomer(id, data))

        // }
        // else {
        //     setAdddata(data)
        // }
    }

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
                                label={" Enter customer name "}
                                name={"name"}
                                type={"text"}
                                errors={errors}
                                className="mb-2"
                                control={control}
                                rules={{ required: true }} />

                            <FormGroupCustom
                                value={editData?.email}
                                label={" Enter email_id"}
                                name="email"
                                type={"email"}
                                errors={errors}
                                className="mb-2"
                                control={control}
                                rules={{ required: true }} />

                            < FormGroupCustom
                                value={editData?.mobile}
                                label={" Enter contact number "}
                                name={"mobile"}
                                type={"number"}
                                errors={errors}
                                className="mb-2"
                                control={control}
                                rules={{ required: true }} />


                            < FormGroupCustom
                                value={editData?.address}
                                label={" Enter address "}
                                name={"address"}
                                type={"textarea"}
                                errors={errors}
                                className="mb-2"
                                control={control}
                                rules={{ required: true }} />

                            <FormGroupCustom
                                label={"gender"}
                                type={"select"}
                                value={editData?.gender}
                                control={control}
                                rules={{ required: true }}
                                errors={errors}
                                options={createConstSelectOptions(gender)}
                                name={"gender"}
                                className="mb-2"
                            />
                            <div className='d-flex justify-content-end'>
                                <ButtonGroup >
                                    <Button type='submit' color='primary'>
                                        submit
                                    </Button>
                                    <Button outline color='secondary' onClick={handleModal}  >
                                        close
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </Form>
                    </>
                </ModalBody>
            </Modal>
        </div>
    </>)
}

export default CustomerForm