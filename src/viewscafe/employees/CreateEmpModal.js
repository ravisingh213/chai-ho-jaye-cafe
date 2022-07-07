import React, { useEffect, useState } from 'react'
import 'bootstrap'
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2'
import { Info, info } from "react-feather"
import { Button, ButtonGroup, Card, CardBody, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row, Form } from 'reactstrap'
import { min } from 'moment'

export default function CreateEmpModal({ open, setopenModal }) {
    //vvvvvvv
    const err = null
    const [alert, setalert] = useState(false)
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm()
    const handleForm = (data) => {
        console.log(data)
        setopenModal(false)
        Swal.fire({
            title: "Success",
            text: "Alert successful",
            icon: "success",
            confirmButtonText: "OK"
        })
        reset()
    }
    const handelClosebtn = () => {
        setopenModal(false)
        reset()
    }
    return (
        <div>
            <Modal isOpen={open}
            // centered={true}
            // toggle={toggle}
            >
                <Form onSubmit={handleSubmit(handleForm)}>
                    <ModalHeader toggle={handelClosebtn} >
                        Register employee
                    </ModalHeader>
                    <ModalBody>
                        <Row className='mb-3'>
                            <Col>
                                <label>Full name:</label>
                                <input type='text'
                                    {...register("fullName", { required: true, maxLength: 15, minLength: 3 })}
                                    name='fullName'
                                    placeholder='enter full name'
                                />
                                {errors.fullName?.type === 'required' && <p style={{ backgroundColor: 'red', borderRadius: '5px' }}> <Info color='black' size="20" /> full name required</p>}
                                {errors.fullName?.type === 'minLength' && <p style={{ backgroundColor: 'red', borderRadius: '5px' }}> <Info color='black' size="20" /> minimum 3 character</p>}
                                {errors.fullName?.type === 'maxLength' && <p style={{ backgroundColor: 'red', borderRadius: '5px' }}> <Info color='black' size="20" /> maximum 15 character </p>}
                            </Col>
                            <Col className='md-4'>
                                <label>Email address:</label>
                                <input type='text'
                                    {...register("email", { required: true })}
                                    name='email'
                                    placeholder='enter email address'
                                />
                                {errors.email?.type === 'required' && <p style={{ backgroundColor: 'red', borderRadius: '5px' }}>  <Info color='black' size="20" /> email required</p>}
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col className='md-4'>
                                <label>Contact number:</label>
                                <input type='number'
                                    {...register("phone", { required: true, minLength: 10, maxLength: 10 })}
                                    name='phone'
                                    placeholder='enter contact number'
                                />
                                {errors.phone?.type === 'required' && <p style={{ backgroundColor: 'red', borderRadius: '5px' }}>  <Info color='black' size="20" /> contact number requied</p>}
                                {errors.phone?.type === 'minLength' && <p style={{ backgroundColor: 'red', borderRadius: '5px' }}>  <Info color='black' size="20" /> minimum 10 digit required</p>}
                                {errors.phone?.type === 'maxLength' && <p style={{ backgroundColor: 'red', borderRadius: '5px' }}>  <Info color='black' size="20" /> maximum 10 digit allowed</p>}

                            </Col>
                            <Col className='md-4'>
                                <label>Desiganation:</label>
                                <input type='text'
                                    {...register("designation", { required: true })}
                                    name='designation'
                                    placeholder='enter your designation'
                                />
                                {errors.designation?.type === 'required' && <p style={{ backgroundColor: 'red', borderRadius: '5px' }}>  <Info color='black' size="20" /> designation required</p>}
                            </Col>
                        </Row>
                        <Row className='mb-3'>
                            <Col className='md-4'>
                                <label>Date of joining:</label>
                                <input type='date'
                                    {...register("joining_date", { required: true })}
                                    name='joining_date'
                                    placeholder='enter full name'
                                />
                                {errors.joining_date?.type === 'required' && <p style={{ backgroundColor: 'red', borderRadius: '5px' }}>  <Info color='black' size="20" /> joining_date required</p>}
                            </Col>

                            <Col className='md-4'>
                                <label>Employee address:</label>
                                <input type='text'
                                    {...register("address", { required: true })}
                                    name='address'
                                    placeholder='enter your address'
                                />
                                {errors.address?.type === 'required' && <p style={{ backgroundColor: 'red', borderRadius: '5px' }}> <Info color='black' size="20" /> address required</p>}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label>Date of Birth:</label>
                                <input type='date'
                                    {...register("Birth_date", { required: true })}
                                    name='Birth_date'
                                    placeholder='dd/mm/yyyy'
                                />
                                {errors.Birth_date?.type === 'required' && <p style={{ backgroundColor: 'red', borderRadius: '5px' }}>  <Info color='black' size="20" /> birth_date required</p>}
                            </Col>
                            <Col>
                                <label>Gender:</label><br />
                                <input type='radio'
                                    {...register("gender")}
                                    name='gender'
                                    value='male'
                                />
                                <label className='mx-2' >Male</label>
                                <input type='radio'
                                    {...register("gender")}
                                    name='gender'
                                    value='female'
                                    className='mx-2'
                                />
                                <label>Female</label>
                            </Col>
                        </Row>
                    </ModalBody>

                    <ModalFooter>
                        <Button className='primary'>Register</Button>
                        <Button className='primary' onClick={handelClosebtn}>Close</Button>
                    </ModalFooter>
                </Form>

            </Modal>
        </div>
    )
}
