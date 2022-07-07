import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useForm, useFieldArray } from 'react-hook-form'
import FormGroupCustom from '../../component/fromGropCustoms'
import { Button, Card, CardBody, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row, Form } from 'reactstrap'
import { Plus, X } from 'react-feather'
import SlideDown from 'react-slidedown'
import Show from '../../utility/Show'
import Hide from '../../utility/Hide'
import BsTooltip from '../../component/tooltip'
import { createSelectOptions } from '../../utility/Utils'
import clientConfig from '../../confing'
const ModalRecipesaddup = ({ Open, handerClose, handerOpen, edit }) => {
    const {
        control,
        handleSubmit
        // formState: { errors },
        // reset,
        // setValue,
        // watch,
        // getValues,
        // setError
    } = useForm()

    const { fields, append, remove } = useFieldArray({
        control,
        name: "recipes_method"
    })
    const [Unit, setUnit] = useState(null)
    const onsubmit = (data) => {
        console.log(data, edit)
    }
    useEffect(() => {
        (async () => {
            const result = await axios.post(`${clientConfig.siteUrl}/units`)
            setUnit(createSelectOptions(result?.data?.data, "name", "id"))

        })()
    }, [])
    useEffect(() => {
        // append ({
        //     recepie : "dsjfd"
        // })
        append({
            // name: 'sdhfsdf',
            // quantity: 'dfdkl',
            // unit: 'dds'
        })

    }, [])

    return (
        <>

            <div>

                <Modal
                    size="lg"
                    toggle={handerOpen}
                    isOpen={Open}
                >

                    <ModalHeader toggle={handerClose}>
                        'Create_Recipes
                    </ModalHeader>
                    <Form onSubmit={handleSubmit(onsubmit)}>
                        <ModalBody>
                            <Card>
                                <CardBody>

                                    <Row>

                                        <Col md='4' xs='8'>

                                            <FormGroupCustom

                                                placeholder={("Title")}
                                                // isMulti
                                                type="text"
                                                name="title"
                                                label={("Title")}
                                                className='mb-1'
                                                // errors={errors}
                                                control={control}
                                                // options={options1}
                                                // value={edit?.question}
                                                rules={{ required: true }}
                                            />

                                        </Col>
                                        {/* 
                                        <Col md='4'>
                                            <FormGroupCustom

                                                placeholder={("category")}
                                                type="text"
                                                name="category"
                                                label={("category")}
                                                className='mb-1'
                                                // errors={errors}
                                                control={control}
                                                value={edit?.question}
                                                rules={{ required: true }}
                                            />
                                        </Col> */}
                                        {/* <Col md='4'>
                                            <FormGroupCustom

                                                placeholder={("subcategory")}
                                                type="select"
                                                name="subcategory"
                                                label={("subcategory")}
                                                className='mb-1'
                                                // errors={errors}
                                                control={control}
                                                value={edit?.question}
                                                rules={{ required: true }}
                                            />
                                        </Col> */}

                                    </Row>

                                    <Row className='mt-4'>


                                        {/* <ul> */}
                                        {
                                            fields.map((item, i) => {
                                                return (
                                                    <>
                                                        <SlideDown key={item?.id}>


                                                            <Row>

                                                                < Col md="4" className=''>
                                                                    <FormGroupCustom

                                                                        placeholder={("item_name")}
                                                                        type="text"
                                                                        name={`recipes_method.${i}.name`}
                                                                        label={("Item_name")}
                                                                        className='mb-1'
                                                                        // errors={errors}
                                                                        control={control}
                                                                        value={item?.name}
                                                                        rules={{ required: true }}
                                                                    />
                                                                </Col>
                                                                < Col md="4" className=''>
                                                                    <FormGroupCustom

                                                                        placeholder={("quantity")}
                                                                        type="number"
                                                                        name={`recipes_method.${i}.quantity`}
                                                                        label={("quantity")}
                                                                        className='mb-1'
                                                                        // errors={errors}
                                                                        control={control}
                                                                        value={item?.quantity}
                                                                        rules={{ required: true }}
                                                                    />
                                                                </Col>
                                                                < Col md="4" className=''>
                                                                    <FormGroupCustom

                                                                        placeholder={("unit")}
                                                                        type="select"
                                                                        name={`recipes_method.${i}.unit`}
                                                                        label={("unit")}
                                                                        className='mb-1'
                                                                        // errors={errors}
                                                                        control={control}
                                                                        value={item?.unit}
                                                                        options={Unit}
                                                                        rules={{ required: true }}
                                                                    />
                                                                </Col>
                                                                <Col md="12" className='d-flex justify-content-end mt-1'>
                                                                    <Show IF={fields.length - 1 === i}>
                                                                        <BsTooltip Tag={Plus} title={("add_list")} size={18} className="me-1" role="button" color='green' onClick={() => {
                                                                            append({
                                                                                name: "",
                                                                                quantity: "",
                                                                                unit: ""
                                                                            })
                                                                        }} />
                                                                    </Show>
                                                                    <Hide IF={i === 0}>
                                                                        <BsTooltip Tag={X} title={("remove")} size={18} color="red" role="button" className='' onClick={() => {
                                                                            remove(i)
                                                                            // removeByIndex(x, getValues("repeat_datetime"), e => setValue("repeat_datetime", e))
                                                                        }} />
                                                                    </Hide>

                                                                </Col>
                                                            </Row>
                                                            {/* <Button type="button" onClick={() => remove(i)}>

                                                            </Button>
                                                            <Button
                                                                type="button"
                                                                onClick={() => append({ recepie: "" })}
                                                            >
                                                                <Plus size={18} />
                                                            </Button> */}
                                                        </SlideDown>

                                                    </>
                                                )
                                            })
                                        }


                                    </Row>
                                    <Row>
                                        < Col md="12" className=''>
                                            <FormGroupCustom

                                                placeholder={("description")}
                                                type="textarea"
                                                name={`description`}
                                                label={("description")}
                                                className='mb-1'
                                                // errors={errors}
                                                control={control}
                                                // value={item?.unit}
                                                rules={{ required: true }}
                                            />
                                        </Col>

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
                </Modal>
            </div>
        </>
    )
}

export default ModalRecipesaddup