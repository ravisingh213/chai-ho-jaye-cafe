import { useEffect, useState } from 'react'
import { Plus } from 'react-feather'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux/es/exports'
import { Button, Card, CardBody, Col, Form, Modal, ModalBody, ModalFooter, ModalHeader, Row, UncontrolledTooltip } from 'reactstrap'
import { addedcategory, updatcategory } from '../../api/category'
import FormGroupCustom from '../../component/fromGropCustoms'
import { isValid } from '../../utility/common'
import Addupsubcategory from './subcategory/Addupsubcategory'

const AddupModal = ({ Open, handerClose, handerOpen, handlerShow, edit = null, editId }) => {

    const dispatch = useDispatch()
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
        watch,
        getValues,
        setError
    } = useForm()


    const [show, setShow1] = useState(false)

    const handerClose1 = () => setShow1(false)
    const handershow1 = () => setShow1(true)
    const [category, setcategory] = useState([])
    const [id, setId] = useState(null)
    const handlerCategory = () => {
        setShow1(!show)
    }

    const onsubmit = (data) => {
        // if (isValid(id)) {
        //     dispatch(updatcategory(id, data))
        //     handerClose()
        // }
        // else {
        //     dispatch(addedcategory(data))
        //     handerClose()
        // }
    }
    useEffect(() => {
        setId(editId)
    }, [editId])

    return (
        <>
            <Addupsubcategory handerClose1={handerClose1} handershow1={handershow1} show={show} />
            <Modal
                size="md"
                toggle={handerOpen}
                isOpen={Open}
            >
                {/* <Form   onSubmit={handleSubmit(onsubmit)}> */}
                <ModalHeader toggle={handerClose} className='bg-secondry'>
                    {edit ? 'Update_Expense' : 'Create_Expense'}
                    {/* Create_Category */}
                </ModalHeader>
                   {
                    edit ? <Form onSubmit={handleSubmit(onsubmit)}>
                        <ModalBody>

                            <Card>
                                <CardBody>

                                    <Row>

    <Col md='10' xs='8'>

                                            <FormGroupCustom

                                                placeholder={("category")}
                                                isMulti
                                                type="text"
                                                name="category"
                                                label={("Category")}
                                                className='mb-1'
                                                // errors={errors}
                                                control={control}
                                                // options={options1}
                                                value={edit?.category}
                                                rules={{ required: true }}
                                            />

                                        </Col>

                                        <Col md='2' xs='4' className='mt-4 p-1'>
                                            <UncontrolledTooltip target="create-subcategory">create-subcategory</UncontrolledTooltip>
                                            <Button
                                                onClick={handlerCategory}
                                                id='create-subcategory'
                                            >

                                                <Plus size={18} />
                                            </Button>
                                        </Col>

                                    </Row>
                             </CardBody>
                            </Card>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="primary"
                                type='submit'
                            // onClick={}
                            >
                                save
                            </Button>
                            {' '}
                            <Button onClick={handerClose}>
                                Cancel
                            </Button>

                        </ModalFooter>
                    </Form> :
                        <Form onSubmit={handleSubmit(onsubmit)}>
                            <ModalBody>

                                <Card>
                                    <CardBody>

                                        <Row>

                                      <Col md='10' xs='8'>

                                                <FormGroupCustom

                                                    placeholder={("category")}
                                                    isMulti
                                                    type="text"
                                                    name="category"
                                                    label={("Category")}
                                                    className='mb-1'
                                                    // errors={errors}
                                                    control={control}
                                                    // options={options1}
                                                    // value={edit?.question}
                                                    rules={{ required: true }}
                                                />

                                            </Col>

                                            <Col md='2' xs='4' className='mt-4 p-1'>
                                                <UncontrolledTooltip target="create-subcategory">create-subcategory</UncontrolledTooltip>
                                                <Button
                                                    onClick={handlerCategory}
                                                    id='create-subcategory'
                                                >

                                                    <Plus size={18} />
                                                </Button>
                                            </Col>

                                        </Row>
                                 </CardBody>
                                </Card>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="primary"
                                    type='submit'
                                // onClick={}
                                >
                                    save
                                </Button>
                                {' '}
                                <Button onClick={handerClose}>
                                    Cancel
                                </Button>

                            </ModalFooter>
                        </Form>
                }
            </Modal></>
    )
}

export default AddupModal