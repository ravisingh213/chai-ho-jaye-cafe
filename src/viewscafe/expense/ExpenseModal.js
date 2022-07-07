import React, { useEffect, useState } from 'react'

import { useFieldArray, useForm } from 'react-hook-form'
import FormGroupCustom from '../../component/fromGropCustoms'
import { Button, Card, CardBody, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row, Form, UncontrolledTooltip, Label } from 'reactstrap'
import { createSelectOptions } from '../../utility/Utils'
import { FileMinus, Plus } from 'react-feather'
import CategoryModalAdd from './CategoryModalAdd'
import { isValid } from '../../utility/common'
import Show from '../../utility/Show'
import { loadcategory, loadcategorys } from '../../api/category'
import { useDispatch, useSelector } from 'react-redux'
import clientConfig from '../../confing'
import axios from 'axios'
import { addedexpense, updatexpense } from '../../api/expense'
const ExpenseModal = ({ Open, handerClose, handerOpen, edit = null, editID = null }) => {
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
    const dispatch = useDispatch()
    const test = useSelector((state) => state.category?.category?.data)
    console.log("nj,nj.", test)
    const [options1, setoptions] = useState(null)
    const [price, setprice] = useState(0)
    const [quantity, setquantity] = useState(0)
    const [show, setShow1] = useState(false)
    const [Unit, setUnit] = useState(null)
    const [id, setId] = useState(null)
    const handerClose1 = () => setShow1(false)
    const handershow1 = () => setShow1(true)

    const onsubmit = (data) => {

        if (isValid(id)) {
            dispatch(updatexpense(data, id))
            handerClose()
        } else {
            console.log(data)
            dispatch(addedexpense(data))
            handerClose()
        }

    }
    useEffect(() => {
        (async () => {
            const result = await axios.post(`${clientConfig.siteUrl}/categorys`)
            setoptions(createSelectOptions(result?.data?.data, "category", "id"))

        })()
    }, [])

    useEffect(() => {
        (async () => {
            const result = await axios.post(`${clientConfig.siteUrl}/units`)
            setUnit(createSelectOptions(result?.data?.data, "name", "id"))


        })()
    }, [])

    // let gram='gram'
    // //     useEffect(()=>{

    // //     if(watch('unit_id')=== gram){
    // //         setValue("quantity", (watch('quantity')/1000))
    // //   }
    // //     },[ watch('quantity')])
    // const test = [
    //     {
    //         id: 1,
    //         name: 'tea'
    //     },
    //     {
    //         id: 2,
    //         name: 'salary'
    //     },
    //     {
    //         id: 3,
    //         name: 'transport'
    //     },
    //     {
    //         id: 4,
    //         name: 'rent'
    //     },
    //     {
    //         id: 5,
    //         name: 'petrol'
    //     }

    // ]

    const handlerCategory = () => {
        setShow1(!show)
    }
    useEffect(() => {
        setId(editID)
    }, [editID])
    useEffect(() => {
        setValue("totalExpense", (watch('quantity') * watch('rate')))
    }, [watch('quantity'), watch('rate')])

    console.log(parseInt(watch('amount')), "vghg")
    return (

        <>
            <CategoryModalAdd handerClose1={handerClose1} handershow1={handershow1} show={show} control={control} />
            <div>

                <Modal
                    size="lg"
                    toggle={handerOpen}
                    isOpen={Open}
                >

                    <ModalHeader toggle={handerClose}>
                        'Create_Expense
                    </ModalHeader>
                    {
                        edit ?
                            <Form onSubmit={handleSubmit(onsubmit)}>
                                <ModalBody>
                                    <Card>
                                        <CardBody>

                                            <Row>

                                                <Col md='10' sm='8' >

                                                    <FormGroupCustom

                                                        placeholder={("product")}
                                                        // isMulti
                                                        type={"select"}
                                                        name="product_id"
                                                        label={("product")}
                                                        className='mb-2 '
                                                        // errors={errors}
                                                        control={control}
                                                        options={options1}
                                                        // loadOptions={options1}
                                                        value={edit?.product_id}
                                                        rules={{ required: true }}

                                                    />

                                                </Col>

                                                <Col md='2' xs='4' className='mt-4 p-2'>
                                                    <UncontrolledTooltip target="create-category">create-category</UncontrolledTooltip>
                                                    <Button
                                                        onClick={handlerCategory}
                                                        id='create-category'
                                                    >

                                                        <Plus size={18} />
                                                    </Button>
                                                </Col>

                                                {/* <Col md='2' className='mt-4 p-2'>
                                            <UncontrolledTooltip target="create-category">create-category</UncontrolledTooltip>
                                            <Button
                                                onClick={handlerCategory}
                                                id='create-category'
                                            >

                                                <Plus size={18} />
                                            </Button>
                                        </Col> */}
                                            </Row>
                                            <h5>Billed item</h5>


                                            <Row>
                                                {
                                                    watch('product_id') ? null :
                                                        <FormGroupCustom

                                                            placeholder={("items")}
                                                            type="text"
                                                            name="items"
                                                            label={("items")}
                                                            className='mb-1'
                                                            // errors={errors}
                                                            control={control}
                                                            value={edit?.item}
                                                        // rules={{ required: true }}
                                                        />

                                                }
                                            </Row>

                                            <Row>


                                                {/* {watch('items_name')? <Label className='fw-bolder' >
                                            <Button>click</Button>
                                        </Label>:null
                                        
                                        } */}


                                                <Col md='4'>

                                                    <FormGroupCustom

                                                        placeholder={("Quantity")}
                                                        type="number"
                                                        name="quantity"
                                                        label={("Quantity")}
                                                        className='mb-1'
                                                        // errors={errors}
                                                        control={control}
                                                        value={edit?.quantity}
                                                        rules={{ required: true }}
                                                    />
                                                </Col>
                                                <Col md='2'>

                                                    <FormGroupCustom

                                                        placeholder={("unit")}
                                                        type="select"
                                                        name="unit_id"
                                                        label={("Unit")}
                                                        className='mb-1'
                                                        // errors={errors}
                                                        control={control}
                                                        options={Unit}
                                                        value={edit?.unit_id}
                                                    // rules={{ required: true }}
                                                    />
                                                </Col>
                                                <Col md='6'>

                                                    <FormGroupCustom

                                                        placeholder={("Rate")}
                                                        type="number"
                                                        name="rate"
                                                        label={("Rate")}
                                                        className='mb-1'
                                                        // errors={errors}
                                                        control={control}

                                                    // rules={{ required: true }}
                                                    />
                                                </Col>


                                                {/* <p> {watch("quantity") * watch("rate")} </p> */}
                                                <Col md='3'>
                                                    {/* <Label className='fw-bolder'>
                                                Amount
                                            </Label > */}
                                                    {/* {watch("rate") > 0 ? <p className='text-success'> {watch("quantity") * watch("rate")} </p> : ""} */}


                                                    {/* <FormGroupCustom
                                                key={watch("quantity") * watch("rate")}
                                                placeholder={("Amount")}
                                                type="text"
                                                name="totalExpense"
                                                label={("Amount")}
                                                className='mb-1'
                                                errors={errors}
                                                control={control}
                                                value={watch("quantity") * watch("rate")}
                                            // rules={{ required: true }}

                                            /> */}

                                                </Col>
                                            </Row>
                                            {/* <Label>hfffj</Label>
                                    <Row className='mt-2 '>

                                        <Col md='6'>
                                            <span>TotalExpense:</span>
                                        </Col>
                                        <Col md='6'>
                                            <span>{watch("quantity") * watch("rate")}</span>
                                        </Col>
                                    </Row> */}
                                            {/* {watch('rate') ?

                                        <Card>
                                            <CardBody>
                                                <Row className='mt-5'>

                                                    <Col md='8'>
                                                        payment
                                                    </Col>
                                                    <Col md='2'>
                                                        <FormGroupCustom

                                                            placeholder={("category")}
                                                            // isMulti
                                                            type="select"
                                                            name="category"
                                                            label={("Category")}
                                                            className='mb-1'
                                                            // errors={errors}
                                                            control={control}
                                                            options={options1}
                                                            // value={edit?.question}
                                                            rules={{ required: true }}
                                                        />
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                        </Card> : null

                                    } */}
                                            <Row className='mt-4'>
                                                <FormGroupCustom

                                                    placeholder={("description")}
                                                    type="textarea"
                                                    name="description"
                                                    label={("description")}
                                                    className='mb-1'
                                                    // errors={errors}
                                                    control={control}
                                                    value={edit?.description}
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
                                    <Button onClick={handerClose}>
                                        Cancel
                                    </Button>

                                </ModalFooter>
                            </Form> : <Form onSubmit={handleSubmit(onsubmit)}>
                                <ModalBody>
                                    <Card>
                                        <CardBody>

                                            <Row>

                                                <Col md='10' sm='8' >

                                                    <FormGroupCustom

                                                        placeholder={("product")}
                                                        // isMulti
                                                        type={"select"}
                                                        name="product_id"
                                                        label={("product")}
                                                        className='mb-2 '
                                                        // errors={errors}
                                                        control={control}
                                                        options={options1}
                                                        // loadOptions={options1}
                                                        // value={edit?.question}
                                                        rules={{ required: true }}

                                                    />

                                                </Col>

                                                <Col md='2' xs='4' className='mt-4 p-2'>
                                                    <UncontrolledTooltip target="create-category">create-category</UncontrolledTooltip>
                                                    <Button
                                                        onClick={handlerCategory}
                                                        id='create-category'
                                                    >

                                                        <Plus size={18} />
                                                    </Button>
                                                </Col>

                                                {/* <Col md='2' className='mt-4 p-2'>
                                            <UncontrolledTooltip target="create-category">create-category</UncontrolledTooltip>
                                            <Button
                                                onClick={handlerCategory}
                                                id='create-category'
                                            >

                                                <Plus size={18} />
                                            </Button>
                                        </Col> */}

                                            </Row>
                                            {/* <h5>Billed item</h5><Row>
                                                {
                                                    watch('product_id') ? null
                                                      :
                                                        <FormGroupCustom

                                                            placeholder={("items")}
                                                            type="text"
                                                            name="items"
                                                            label={("items")}
                                                            className='mb-1'
                                                            // errors={errors}
                                                            control={control}

                                                        // rules={{ required: true }}
                                                        />

                                                }
                                            </Row>  */}

                                            <Row>


                                                {/* {watch('items_name')? <Label className='fw-bolder' >
                                            <Button>click</Button>
                                        </Label>:null
                                        
                                        } */}


                                                <Col md='4'>

                                                    <FormGroupCustom

                                                        placeholder={("Quantity")}
                                                        type="number"
                                                        name="quantity"
                                                        label={("Quantity")}
                                                        className='mb-1'
                                                        // errors={errors}
                                                        control={control}
                                                        // value={(watch('quantity') / 100)}
                                                        rules={{ required: true }}
                                                    />
                                                </Col>
                                                <Col md='2'>

                                                    <FormGroupCustom

                                                        placeholder={("unit")}
                                                        type="select"
                                                        name="unit_id"
                                                        label={("Unit")}
                                                        className='mb-1'
                                                        // errors={errors}
                                                        control={control}
                                                        options={Unit}
                                                    // rules={{ required: true }}
                                                    />
                                                </Col>
                                                <Col md='6'>

                                                    <FormGroupCustom

                                                        placeholder={("Rate")}
                                                        type="number"
                                                        name="rate"
                                                        label={("Rate")}
                                                        className='mb-1'
                                                        // errors={errors}
                                                        control={control}

                                                    // rules={{ required: true }}
                                                    />
                                                </Col>


                                                {/* <p> {watch("quantity") * watch("rate")} </p> */}
                                                <Col md='3'>
                                                    {/* <Label className='fw-bolder'>
                                                Amount
                                            </Label > */}
                                                    {/* {watch("rate") > 0 ? <p className='text-success'> {watch("quantity") * watch("rate")} </p> : ""} */}


                                                    {/* <FormGroupCustom
                                                key={watch("quantity") * watch("rate")}
                                                placeholder={("Amount")}
                                                type="text"
                                                name="totalExpense"
                                                label={("Amount")}
                                                className='mb-1'
                                                errors={errors}
                                                control={control}
                                                value={watch("quantity") * watch("rate")}
                                            // rules={{ required: true }}

                                            /> */}

                                                </Col>
                                            </Row>
                                            {/* <Label>hfffj</Label>
                                    <Row className='mt-2 '>

                                        <Col md='6'>
                                            <span>TotalExpense:</span>
                                        </Col>
                                        <Col md='6'>
                                            <span>{watch("quantity") * watch("rate")}</span>
                                        </Col>
                                    </Row> */}
                                            {/* {watch('rate') ?

                                        <Card>
                                            <CardBody>
                                                <Row className='mt-5'>

                                                    <Col md='8'>
                                                        payment
                                                    </Col>
                                                    <Col md='2'>
                                                        <FormGroupCustom

                                                            placeholder={("category")}
                                                            // isMulti
                                                            type="select"
                                                            name="category"
                                                            label={("Category")}
                                                            className='mb-1'
                                                            // errors={errors}
                                                            control={control}
                                                            options={options1}
                                                            // value={edit?.question}
                                                            rules={{ required: true }}
                                                        />
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                        </Card> : null

                                    } */}
                                            <Row className='mt-4'>
                                                <FormGroupCustom

                                                    placeholder={("description")}
                                                    type="textarea"
                                                    name="description"
                                                    label={("description")}
                                                    className='mb-1'
                                                    // errors={errors}
                                                    control={control}
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
                                    <Button onClick={handerClose}>
                                        Cancel
                                    </Button>

                                </ModalFooter>
                            </Form>
                    }
                </Modal>
            </div>
        </>
    )
}
export default ExpenseModal