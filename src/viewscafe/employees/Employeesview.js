import React, { useState } from 'react'
import { ChevronDown, Eye, EyeOff, Plus, RefreshCcw, Sliders } from 'react-feather'
import { Button, ButtonGroup, Card, CardHeader, CardTitle, Col, UncontrolledTooltip, Row } from 'reactstrap'

import 'bootstrap'
import EmpModal from './CreateEmpModal'

const Employeesview = () => {
    const [openmodal, setopenModal] = useState(false)
    const handlerShow = () => {
        setopenModal(!openmodal)
    }
    return (
        <div>

            <EmpModal open={openmodal} setopenModal={setopenModal} />
            <CardHeader className='border-bottom inline d-flex justify-content-between'>


                <CardTitle className='text-primary' tag='h4'>Employees</CardTitle>


                <ButtonGroup>
                    <UncontrolledTooltip target="create-button">create-new</UncontrolledTooltip>
                    <Button id='create-button'
                        onClick={handlerShow}
                    >
                        <Plus size={18} />
                    </Button>
                    <UncontrolledTooltip target="reload">create-new</UncontrolledTooltip>
                    <Button id='reload'>

                        <Sliders size={18} />
                    </Button>
                </ButtonGroup>


            </CardHeader>

        </div>
    )
}

export default Employeesview

