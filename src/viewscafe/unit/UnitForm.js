import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, ButtonGroup } from 'reactstrap'
import { X } from 'react-feather'

import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

import FormGroupCustom from "../../component/fromGropCustoms/index.js"

import { addedUnit, updatUnit } from "../../api/unit/index"
import Swal from "sweetalert2"
const UnitForm = ({ show, edit = null, handleModal, show1 }) => {
    console.log("..edit", show1, edit)
    const [open, setOpen] = useState(show)
    // const [loading, setLoading] = useState(false)
    const [editData, setEditData] = useState(show1)
    // const [unit1, setUnit1] = useState([])
    const [adddata, setAdddata] = useState(null)
    const form = useForm()
    const id = show1?.id
    const dispatch = useDispatch()
    const { formState: { errors }, handleSubmit, control, reset } = form
    const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleModal} />
    useEffect(() => {
        if (show) setOpen(true)
        if (!show) reset()
    }, [show])
    console.log(open)
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
        handleModal()
    }
    useEffect(() => {

        dispatch(addedUnit(adddata))
        if (adddata) {
            Handlesub()
        }
    }, [adddata])

    const onSubmit = (data) => {
        // if (show1 && show1) {
        dispatch(updatUnit(id, data))
        // }
        // else {
        setAdddata(data)

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
                                label={" Enter Unit Name "}
                                name={"name"}
                                type={"text"}
                                errors={errors}
                                className="mb-2"
                                control={control}
                                rules={{ required: true }} />

                            <FormGroupCustom
                                value={editData?.abbreiation}
                                label={" Enter Abbreiation"}
                                name="abbreiation"
                                type={"text"}
                                errors={errors}
                                className="mb-2"
                                control={control}
                                rules={{ required: true }} />

                            < FormGroupCustom
                                value={editData?.minvalue}
                                label={" Enter Minvalue "}
                                name={"minvalue"}
                                type={"number"}
                                errors={errors}
                                className="mb-2"
                                control={control}
                                rules={{ required: true }} />
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

export default UnitForm