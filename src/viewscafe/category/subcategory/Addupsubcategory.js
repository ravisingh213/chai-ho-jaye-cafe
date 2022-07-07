
import React, { useEffect, useState } from 'react'
import { Plus } from 'react-feather'
import { useFieldArray, useForm } from 'react-hook-form'
import { Button, Card, CardBody, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row, Form, UncontrolledTooltip } from 'reactstrap'
import FormGroupCustom from '../../../component/fromGropCustoms'

// import { createSelectOptions } from '../../utility/Utils'
const Addupsubcategory = ({ handerClose1, handershow1, show }) => {

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

    const onsubmit = (data) => {
        console.log('subcategory', data)

    }
    return (
        <>
            <Modal
                size="md"
                toggle={handershow1}
                isOpen={show}
            >
                <Form onSubmit={handleSubmit(onsubmit)}>
                    <ModalHeader toggle={handerClose1} className='bg-secondry'>
                        {/* {edit ? 'Update_Expense' : 'Create_Expense'} */}
                        Create_SubCategory
                    </ModalHeader>
                    <ModalBody>
                        <Card>
                            <CardBody>

                                <Row>
                                    <FormGroupCustom

                                        placeholder={("sub_category")}
                                        isMulti
                                        type="text"
                                        name="sub_category"
                                        label={("Sub_Category")}
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

export default Addupsubcategory