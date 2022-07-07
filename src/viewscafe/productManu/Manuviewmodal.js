
import React, { useState } from 'react'
import { Button, Card, CardBody, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row, Form } from 'reactstrap'
const Manuviewmodal = ({ Open, handerClose, handerOpen, edit }) => {
  return (
    <>
      <Modal
        size="lg"
        toggle={handerOpen}
        isOpen={Open}
      >

        <ModalHeader toggle={handerClose}>

        </ModalHeader>
        <ModalBody>
          <Card>
            <CardBody>

              <h2>hello</h2>

            </CardBody>
          </Card>
        </ModalBody>


      </Modal>
    </>
  )
}

export default Manuviewmodal 