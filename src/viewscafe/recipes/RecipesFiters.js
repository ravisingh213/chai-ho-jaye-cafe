import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
// import { useHistory } from 'react-router-dom'
import { Form } from 'reactstrap'
import FormGroupCustom from '../../component/fromGropCustoms'
import SideModal from '../../component/sideModal'

// import { FM } from '../../../../utility/helpers/common'

// import Select from '../components/select'
const RecipesFilter = ({ show, handleFilterModal, setFilterData, filterData }) => {

    // Dispatch
 

    // Form Validation
    const {
        // register,
         formState: { errors },
          handleSubmit, control, 
        //   getValues,
        //    watch,
            reset
         } = useForm()
    // const history = useHistory()
    // States

    const [open, setOpen] = useState(show)
    const [loading, setLoading] = useState(false)

    const submitFilter = (d) => {
        setFilterData(d)
        console.log(d, filterData, setLoading)
    }

    // Show/Hide Modal
    useEffect(() => {
        if (show) setOpen(true)
        if (!show) reset()
    }, [show])

    return (
        <SideModal
            direction={'end'}
            loading={loading}
            handleSave={handleSubmit(submitFilter)}
            open={open}
            handleModal={() => {
                setOpen(false)
                handleFilterModal(false)

            }}
            title={'Recipes-filter'}
            done='filter'>
             <Form>
               <FormGroupCustom
                    placeholder={("enter-name")}
                    type="text"
                    name="name"
                    label={("category")}
                    className='mb-1'
                    errors={errors}
                    control={control}
                />
                <FormGroupCustom
                    placeholder={("enter-name")}
                    type="text"
                    name="subcategory"
                    label={("subcategory")}
                    className='mb-1'
                    errors={errors}
                    control={control}
                />

                {/* <FormGroupCustom
                    type="checkbox"
                    name="status"
                    value={1}
                    label={("subcategory-status")}
                    className='mb-1'
                    errors={errors}
                    control={control}
                /> */}
            </Form> 
        </SideModal>
    )
}

export default RecipesFilter