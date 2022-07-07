import React, { useEffect, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { Button, Card, CardBody, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row, Form } from 'reactstrap'
import FormGroupCustom from '../../component/fromGropCustoms'
import { createSelectOptions } from '../../utility/Utils'
const CategoryModalAdd = ({ handerClose1, handershow1, show }) => {


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
    // const [options1, setoptions] = useState([])


    // const options = () => {
    //     setoptions(createSelectOptions(test, "name", 'id'))
    // }
    // useEffect(() => {
    //     options()
    // }, [])
    const test = [
        {
            id: 1,

            name: 'Indirect Expense'
        },
        {
            id: 2,

            name: 'Direct Expense'
        }

    ]

    const onsubmit = (data) => {
        console.log('category', data)
    }
    return (
        <>

            <Modal
                size="sm"
                toggle={handershow1}
                isOpen={show}
            >
                <Form onSubmit={handleSubmit(onsubmit)}>
                    <ModalHeader toggle={handerClose1} className='bg-secondry'>
                        {/* {edit ? 'Update_Expense' : 'Create_Expense'} */}
                        Create_Category
                    </ModalHeader>
                    <ModalBody>
                        <Card>
                            <CardBody>

                                <Row>
                                    <FormGroupCustom

                                        placeholder={("category")}
                                        // isMulti
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


                                </Row>

                                <Row>
                                    <FormGroupCustom

                                        placeholder={("expense_type")}
                                        // isMulti
                                        type="select"
                                        name="expense_type"
                                        label={("Expense_Type")}
                                        className='mb-1'
                                        // errors={errors}
                                        control={control}
                                        // options={options1}
                                        // value={edit?.question}
                                        rules={{ required: true }}
                                    />
                                </Row>
                            </CardBody>
                        </Card>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="primary"
                        // onClick={}
                        >
                            save
                        </Button>
                        {' '}
                        <Button onClick={handerClose1}>
                            Cancel
                        </Button>

                    </ModalFooter>
                </Form>
            </Modal>
        </>
    )
}

export default CategoryModalAdd