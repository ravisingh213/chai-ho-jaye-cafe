import React, { useEffect, useState } from 'react'
import Swal from "sweetalert2"
import { useFieldArray, useForm } from 'react-hook-form'
import FormGroupCustom from '../../component/fromGropCustoms'
import { Button, Card, CardBody, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row, Form } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addedMenu, updatMenu } from '../../api/menuproduct'
// import { isValid } from '../../utility/helpers/common'
import { createSelectOptions } from '../../utility/Utils'

import axios from 'axios'
import clientConfig from '../../confing'
const ModalManu = ({ Open, handerClose, handerOpen, edit = null, editId = null }) => {

  const dispatch = useDispatch()
  const test = useSelector((s) => s.category.category.data.data)
  console.log('.......data', test)
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
  const [data, setdata] = useState([])
  const [id, setId] = useState(null)
  const [options1, setoptions1] = useState(null)
  const HandleClick = () => {
    Swal.fire({
      title: "Success",
      text: "Alert successful",
      icon: "success",
      confirmButtonText: "OK"

    })
  }

  useEffect(() => {
    (async () => {
      const result = await axios.post(`${clientConfig.siteUrl}/categorys`)
      setoptions1(createSelectOptions(result?.data?.data, "category", "id"))

    })()
  }, [])

  console.log(options1, ",...sdsfdsfdsfjodoif")
  // const onsubmit = (data) => {
  //   console.log(data)
  //   if (isValid(id)) {
  //     dispatch(updatMenu(id, data))
  //     HandleClick()
  //     handerClose()
  //   }
  //   else (dd){
  //     dispatch(addedMenu((data)))
  //     HandleClick()
  //     handerClose()
  //   }

  // }
  // useEffect(()=>{
  //      dispatch(addedMenu((data)))
  //      reset()
  // },[data, reset])
  //   useEffect(()=>{
  //   dispatch(loadcategory())
  // }, [])
  //   const options = () => {
  //     setoptions1(createSelectOptions(test, "category", "id"))
  // }
  // useEffect(() => {
  //     options()
  //     // reset()
  // }, [])

  useEffect(() => {
    setId(editId)
  }, [editId])
  return (
    <>
      <Modal
        size="lg"
        toggle={handerOpen}
        isOpen={Open}
      >

        <ModalHeader toggle={handerClose}>
          {edit ? 'Update_Menu' : 'Create_Menu'}
        </ModalHeader>
        {edit ? <Form onSubmit={handleSubmit(onsubmit)}>

          <ModalBody>
            <Card>
              <CardBody>

                <Row>
                  <Col md='12'>
                    <FormGroupCustom

                      placeholder={("product")}
                      type="text"
                      name="product"
                      label={("product")}
                      className='mb-1'
                      // errors={errors}
                      control={control}
                      value={edit?.product}
                      rules={{ required: true }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md='6'>
                    <FormGroupCustom

                      placeholder={("category")}
                      type="select"
                      name="category_id"
                      label={("category")}
                      className='mb-1'
                      // errors={errors}
                      control={control}
                      value={edit?.category_id}
                      options={options1}
                      rules={{ required: true }}
                    />
                  </Col>

                  {/* <Col md='6'>
                    <FormGroupCustom

                      placeholder={("subcategory")}
                      type="text"
                      name="subcategory_id"
                      label={("subcategory")}
                      className='mb-1'
                      // errors={errors}
                      control={control}
                      value={edit?.subcategory}
                    // rules={{ required: true }}
                    />
                  </Col> */}
                </Row>
                <Row>
                  <Col md='12'>
                    <FormGroupCustom

                      placeholder={("price")}
                      type="number"
                      name="price"
                      label={("price")}
                      className='mb-1'
                      // errors={errors}
                      control={control}
                      value={edit?.price}
                      rules={{ required: true }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md='12'>
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

        </Form> : <Form onSubmit={handleSubmit(onsubmit)}>

          <ModalBody>
            <Card>
              <CardBody>

                <Row>
                  <Col md='12'>
                    <FormGroupCustom

                      placeholder={("product")}
                      type="text"
                      name="product"
                      label={("product")}
                      className='mb-1'
                      // errors={errors}
                      control={control}

                      rules={{ required: true }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md='6'>
                    <FormGroupCustom

                      placeholder={("category")}
                      type="select"
                      name="category_id"
                      label={("category_id")}
                      className='mb-1'
                      // errors={errors}
                      control={control}
                      // value={edit?.category}
                      options={options1}
                      rules={{ required: true }}
                    />
                  </Col>

                  {/* <Col md='6'>
                    <FormGroupCustom

                      placeholder={("subcategory")}
                      type="text"
                      name="subcategory_id"
                      label={("subcategory_id")}
                      className='mb-1'
                      // errors={errors}
                      control={control}
                    // value={edit?.subcategory}
                    // rules={{ required: true }}
                    />
                  </Col> */}
                </Row>
                <Row>
                  <Col md='12'>
                    <FormGroupCustom

                      placeholder={("price")}
                      type="number"
                      name="price"
                      label={("price")}
                      className='mb-1'
                      // errors={errors}
                      control={control}
                      value={edit?.price}
                    // rules={{ required: true }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md='12'>
                    <FormGroupCustom

                      placeholder={("description")}
                      type="textarea"
                      name="description"
                      label={("description")}
                      className='mb-1'
                      // errors={errors}
                      control={control}
                      // value={edit?.description}
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

        }
      </Modal>

    </>
  )
}

export default ModalManu