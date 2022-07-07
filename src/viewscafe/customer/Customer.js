import { useEffect, useState } from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component'
import { ChevronDown, Edit2, Edit, Eye, EyeOff, Plus, RefreshCcw, Sliders, Trash2, Trash } from 'react-feather'
import { useForm } from 'react-hook-form'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button, ButtonGroup, Card, CardHeader, CardTitle, Col, UncontrolledTooltip, Row } from 'reactstrap'
import { formatDateTimeByFormat } from '../../utility/Utils'
import Shimmer from '../../component/shimmers/Shimmer'
import BsTooltip from '../../component/tooltip'
import Show from '../../utility/Show'

import CustomerForm from './CustomerForm'
import Swal from "sweetalert2"
import CustomerFilter from './CustomerFilter'
import { loadCustomer, deletCustomer } from "../../api/customer/index.js"
const Customer = () => {
    const [loading, setLoading] = useState(false)
    const [formModal, setFormModal] = useState(false)
    const [deleted, setDeleted] = useState('')
    const [failed, setFailed] = useState(false)
    const [formModel1, setFormModal1] = useState(false)
    const [data1, setData1] = useState([])
    const [productFilter, setProductFilter] = useState(false)
    const [unitData, setUnitData] = useState(false)
    const [reaload, setReload] = useState(true)
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const [filterData, setFilterData] = useState({
        name: "",
        email: "",
        mobile: ""
    })
    const [add, setAdd] = useState(null)
    const [editData, setEditData] = useState(null)
    const dispatch = useDispatch()
    const data3 = useSelector(state => state?.customer.customers?.data)
    const data2 = data3?.data
    console.log("...", data2)
    const handleImport = () => setFormModal(!formModal)
    const handleClose = (e) => {
        if (e === false) {
            setEditData(null)
            setFormModal1(e)
        }
    }
    useEffect(() => {
        if (filterData !== null) setReload(true)
    }, [filterData])
    const handlePagination = page => {
        dispatch(
            loadCustomer({
                page: page.selected + 1,
                per_page_record: rowsPerPage,
                name: filterData.name,
                email: filterData.email,
                mobile: filterData.mobile
            })
        )
        setCurrentPage(page.selected + 1)
    }

    useEffect(() => {
        dispatch(loadCustomer({ per_page_record: rowsPerPage, page: currentPage, name: filterData.name, email: filterData.email, mobile: filterData.mobile }))
    }, [filterData])

    const HandleDelete = () => {
        Swal.fire({
            // ...this.props,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            onOpen: () => {
                // code
            }
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }
    const handlerDelete = (id) => {
        setDeleted(id)
    }
    useEffect(() => {
        if (deleted) {
            dispatch(deletCustomer(deleted))
            HandleDelete()
        }
    }, [deleted])
    const ProductColumn = [
        {
            name: ("#"),
            selector: (row, i) => (row.id ? (i + 1) : null),
            maxWidth: "10px"

        },
        // {
        //     name: ("#"),
        //     selector: (row, i) => (row.id ? (row.quanitity * row.sellprice) : null),
        //     maxWidth: "10px"
        // },


        {
            name: "name",
            selector: 'name',
            sortable: true,
            minWidth: '150px'
        },
        {
            name: "email",
            selector: 'email',
            sortable: true,
            minWidth: '150px'
        },

        {
            name: "gender",
            selector: 'gender',
            sortable: true,
            minWidth: '150px'
        },
        {
            name: "contact",
            selector: 'mobile',
            sortable: true,
            minWidth: '150px'
        },
        {
            name: "address",
            selector: 'address',
            sortable: true,
            minWidth: '150px'
        },

        // {
        //     name: ("date"),
        //     selector: ({ value }) => {
        //         return value !== null ? formatDateTimeByFormat(value, "YYYY-MM-DD") : ""
        //     },
        //     sortable: true,
        //     minWidth: '150px'
        // },
        {
            name: ("actions"),
            allowOverflow: true,
            minWidth: "70px",
            cell: row => {

                return (<ButtonGroup>
                    <UncontrolledTooltip placement='top' id='edit' target='edit'>
                        {("edit")}
                    </UncontrolledTooltip>
                    <div className='d-flex m-2' id='edit' >
                        <Edit size={18}
                            onClick={() => {
                                setAdd(row)
                                setEditData(data2)
                                setFormModal(!formModal)


                            }}
                        />
                    </div>
                    <UncontrolledTooltip placement='top' id='delete' target='delete'>
                        {("delete")}
                    </UncontrolledTooltip>
                    <div className='d-flex text-danger m-2' id='delete' >
                        <Trash2 size={18}
                            onClick={() => {
                                handlerDelete(row.id)
                            }}
                        />

                    </div>
    </ButtonGroup>
                )
            }
        }
    ]

    const CustomPagination = () => {
        const count = Math.ceil(data3?.total / data3?.per_page)
        return (
            <ReactPaginate
                initialPage={data3?.current_page - 1}
                disableInitialCallback
                previousLabel={''}
                nextLabel={''}
                breakLabel='...'
                pageCount={count}
                activeClassName='active'
                forcePage={currentPage !== 0 ? currentPage - 1 : 0}
                onPageChange={page => handlePagination(page)}
                pageClassName={'page-item'}
                nextLinkClassName={'page-link'}
                nextClassName={'page-item next'}
                previousClassName={'page-item prev'}
                previousLinkClassName={'page-link'}
                pageLinkClassName={'page-link'}
                breakClassName='page-item'
                breakLinkClassName='page-link'
                containerClassName={
                    'pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1'
                }
            />

        )
    }

    const customStyles = {
        title: {
            style: {
                fontColor: 'red',
                fontWeight: '900'
            }
        },
        rows: {
            style: {
                minHeight: '72px'// override the row height
            }
        },
        headCells: {
            style: {
                fontSize: '19px',
                fontWeight: '500',
                textTransform: 'captilize',
                paddingLeft: '0 8px'
                // background: "orange"
            }
        },
        cells: {
            style: {
                fontSize: '14px',
                paddingLeft: '0 8px'
            }
        }
    }
    return (
        <>
            <CustomerFilter show={productFilter} filterData={filterData} setFilterData={setFilterData} handleFilterModal={() => { setProductFilter(false) }} />
            {/* <UnitForm show={formModal} show1={add} edit={editData} handleModal={handleImport} />   */}
            {/* <Card> */}
            <CustomerForm show={formModal} show1={add} edit={editData} handleModal={handleImport} />
            <CardHeader className='border-bottom inline d-flex justify-content-between'>

                <CardTitle className='text-primary ' tag='h4'>Cusomers Info </CardTitle>
                <ButtonGroup>
                    <UncontrolledTooltip target="create-button">create-new</UncontrolledTooltip>
                    <Button id='create-button' color="primary"
                        onClick={() => {
                            setFormModal(!formModal)
                            setEditData(null)
                        }}
                    >

                        <Plus size={18} />
                    </Button>
                    <UncontrolledTooltip target="reload">Filter</UncontrolledTooltip>
                    <Button id='reload' onClick={() => setProductFilter(true)}>

                        <Sliders size={18} />
                    </Button>
                </ButtonGroup>

            </CardHeader>
            <Row>

                {loading ? <>
                    <Shimmer style={{ width: "100%", height: 50, marginBottom: 5, marginTop: 5 }} />
                    <Shimmer style={{ width: "100%", height: 50, marginBottom: 5 }} />
                    <Shimmer style={{ width: "100%", height: 50, marginBottom: 5 }} />
                    <Shimmer style={{ width: "100%", height: 50, marginBottom: 5 }} />
                    <Shimmer style={{ width: "100%", height: 50, marginBottom: 5 }} />
                    <Shimmer style={{ width: "100%", height: 50, marginBottom: 5 }} />
                    <Shimmer style={{ width: "100%", height: 50, marginBottom: 5 }} />
                    <Shimmer style={{ width: "100%", height: 50, marginBottom: 5 }} />
                    <Shimmer style={{ width: "100%", height: 50, marginBottom: 5 }} />
                </> : <>
                    <DataTable
                        key={`date-${data2?.length}`}
                        noHeader
                        selectableRows
                        pagination
                        paginationServer
                        className='react-dataTable'
                        columns={ProductColumn}
                        noDataComponent={<div className="nodata-class">
                            {("no-record")}
                        </div>}
                        customStyles={customStyles}
                        sortIcon={<ChevronDown size={12} />}
                        paginationComponent={CustomPagination}
                        data={data2}
                    />

                </>
                }
            </Row>
            {/* </Card> */}
        </>
    )
}


export default Customer