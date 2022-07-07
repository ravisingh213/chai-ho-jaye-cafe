import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import SideModal from '../../component/sideModal'
import { Form, Button, ModalFooter } from "reactstrap"
import FormGroupCustom from '../../component/fromGropCustoms'

const ProductFilter = ({ show, handleFilterModal, setFilterData, filterData }) => {
    const [open, setOpen] = useState(show)
    const [loading, setLoading] = useState(false)
    const [unit1, setUnit1] = useState([])
    const { register, formState: { errors }, handleSubmit, control, getValues, watch, reset } = useForm()

    useEffect(() => {
        if (show) setOpen(true)
        if (!show) reset()
    }, [show])

    const submitFilter = (d) => {
        setFilterData(d)
        console.log(d)
    }

    return (
        <>
            <SideModal
                direction={'end'}
                loading={loading}
                handleSave={handleSubmit(submitFilter)}
                open={open}
                handleModal={() => {
                    setOpen(false)
                    handleFilterModal(false)

                }}
                title={'Product-filter'}
                done='filter'>
                <Form>
                    <FormGroupCustom
                        label={" Enter product "}
                        name={"name"}
                        type={"text"}
                        errors={errors}
                        className="mb-2"
                        control={control}
                        rules={{ required: false }} />

                    <FormGroupCustom
                        label={" Enter quanitity"}
                        name={"quanitity"}
                        type={"number"}
                        errors={errors}
                        className="mb-2"
                        control={control}
                        rules={{ required: false }} />

                    <FormGroupCustom
                        label={" Enter Price"}
                        name={"price"}
                        type={"number"}
                        errors={errors}
                        className="mb-2"
                        control={control}
                        rules={{ required: false }} />

                    <FormGroupCustom
                        label={" Enter description"}
                        name={"description"}
                        type={"textarea"}
                        errors={errors}
                        className="mb-2"
                        control={control}
                        rules={{ required: false }} />
                </Form>
            </SideModal>

        </>)
}

export default ProductFilter