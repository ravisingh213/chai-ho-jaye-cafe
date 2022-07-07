import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import SideModal from '../../component/sideModal'
import { Form, Button, ModalFooter } from "reactstrap"
import FormGroupCustom from '../../component/fromGropCustoms'

const CustomerFilter = ({ show, handleFilterModal, setFilterData, filterData }) => {
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
        <SideModal
            direction={"end"}
            loading={loading}
            handleSave={handleSubmit(submitFilter)}
            open={open}
            handleModal={() => {
                setOpen(false)
                handleFilterModal(false)

            }}
            title={'Customer-filter'}
            done='filter'>
            <Form >
                <FormGroupCustom

                    label={" Enter customer name "}
                    name={"name"}
                    type={"text"}
                    errors={errors}
                    className="mb-2"
                    control={control}
                    rules={{ required: false }} />

                <FormGroupCustom

                    label={" Enter email_id"}
                    name="email"
                    type={"email"}
                    errors={errors}
                    className="mb-2"
                    control={control}
                    rules={{ required: false }} />

                < FormGroupCustom

                    label={" Enter contact number "}
                    name={"mobile"}
                    type={"number"}
                    errors={errors}
                    className="mb-2"
                    control={control}
                    rules={{ required: false }} />


                < FormGroupCustom

                    label={" Enter address "}
                    name={"address"}
                    type={"textarea"}
                    errors={errors}
                    className="mb-2"
                    control={control}
                    rules={{ required: false }} />
    </Form>

        </SideModal>
    )
}

export default CustomerFilter