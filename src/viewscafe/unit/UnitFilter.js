import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import SideModal from '../../component/sideModal'
import { Form, Button, ModalFooter } from "reactstrap"
import FormGroupCustom from '../../component/fromGropCustoms'

const UnitFilter = ({ show, handleFilterModal, setFilterData, filterData }) => {
    const [open, setOpen] = useState(show)
    const [loading, setLoading] = useState(false)
    // const [unit1, setUnit1] = useState([])
    const { formState: { errors }, handleSubmit, control, reset } = useForm()
    useEffect(() => {

        if (show) setOpen(true)
        if (!show) reset()
    }, [show])
    const submitFilter = (d) => {
        setFilterData(d)
        console.log(d, filterData, setLoading)
    }
    return (<>
        <SideModal
            direction={'end'}
            loading={loading}
            handleSave={handleSubmit(submitFilter)}
            open={open}
            handleModal={() => {
                setOpen(false)
                handleFilterModal(false)

            }}
            title={'Unit-filter'}
            done='filter'>
            <Form>
                <FormGroupCustom

                    label={" Enter Unit Name "}
                    name={"name"}
                    type={"text"}
                    errors={errors}
                    className="mb-2"
                    control={control}
                    rules={{ required: false }} />

                <FormGroupCustom

                    label={" Enter Abbreiation"}
                    name="abbreiation"
                    type={"text"}
                    errors={errors}
                    className="mb-2"
                    control={control}
                    rules={{ required: false }} />

                < FormGroupCustom

                    label={" Enter Minvalue "}
                    name={"minvalue"}
                    type={"number"}
                    errors={errors}
                    className="mb-2"
                    control={control}
                    rules={{ required: false }} />
            </Form>

        </SideModal>

    </>)
}

export default UnitFilter