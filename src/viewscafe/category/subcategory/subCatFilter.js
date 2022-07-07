import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Form } from 'reactstrap'
import { loadcategory } from '../../../api/category'
import FormGroupCustom from '../../../component/fromGropCustoms'
// import { FM } from '../../../../utility/helpers/common'

// import Select from '../components/select'
import SideModal from '../../../component/sideModal'

const SubCategoryFilter = ({ show, handleFilterModal, setFilterData, filterData }) => {

    // Dispatch
    const dispatch = useDispatch()

    // Form Validation
    const { register, formState: { errors }, handleSubmit, control, getValues, watch, reset } = useForm()
    // const history = useHistory()
    // States

    const [open, setOpen] = useState(show)
    const [loading, setLoading] = useState(false)

    const submitFilter = (d) => {
        setFilterData(d)
        handleFilterModal(false)
        // console.log(d)
    }


//    useEffect(()=>{
//       dispatch(loadcategory({per_page_record:10, page:1, category:filterData.category }))
//    },[])
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
            title={'category-filter'}
            done='filter'>
            <Form>
               <FormGroupCustom
                    placeholder={("enter-name")}
                    type="text"
                    name="category"
                    label={("category")}
                    className='mb-1'
                    errors={errors}
                    control={control}
                />
                {/* <FormGroupCustom
                    placeholder={("enter-name")}
                    type="text"
                    name="subcategory"
                    label={("subcategory")}
                    className='mb-1'
                    errors={errors}
                    control={control}
                />

                <FormGroupCustom
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

export default SubCategoryFilter