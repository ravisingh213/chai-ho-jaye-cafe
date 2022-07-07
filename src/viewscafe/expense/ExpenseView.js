import React from 'react'
import { Button, Card, CardBody, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row, Form, UncontrolledTooltip, Label } from 'reactstrap'
const ExpenseView = ({ Open, handerClose, handerOpen, edit = null }) => {
    return (
        <>

            <Modal
                size="lg"
                toggle={handerOpen}
                isOpen={Open}
            >
                <Form >
                    <ModalHeader toggle={handerClose}>
                        'View_Expense
                    </ModalHeader>
                    <ModalBody>
                        <Card>
                            <CardBody>
                                <h1>hello</h1>

                            </CardBody>
                        </Card>
                  </ModalBody>

                </Form>
            </Modal>

        </>
    )
}

export default ExpenseView