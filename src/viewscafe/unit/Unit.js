import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DataTable from 'react-data-table-component'
import { ChevronDown, Edit, Plus, Sliders, Trash2 } from 'react-feather'
import ReactPaginate from 'react-paginate'
import { Button, ButtonGroup, CardHeader, CardTitle, UncontrolledTooltip, Row, Col, Card } from 'reactstrap'
import Shimmer from '../../component/shimmers/Shimmer'
// import BsTooltip from '../../component/tooltip'
// import Show from '../../utility/Show'
import UnitFilter from './UnitFilter'
import UnitForm from './UnitForm'
// import ConfirmAlert from '../../utility/helpers/ConfirmAlert'
import { deletUnit, loadUnit } from '../../api/unit'
import Swal from "sweetalert2"
// import clientConfig from '../../confing';
const Unit = () => {
    const [loading, setLoading] = useState(false)
    const [formModal, setFormModal] = useState(false)
    const [formModel1, setFormModal1] = useState(false)
    const [deleted, setDeleted] = useState('')
    // const [failed, setFailed] = useState(false)
    const [data1, setData1] = useState([])
    const [productFilter, setProductFilter] = useState(false)

    const [reload, setReload] = useState(false)
    const [filterData, setFilterData] = useState({
        name: ""
    })
    const [add, setAdd] = useState(null)
    const [editData, setEditData] = useState(null)
    const handleImport = () => setFormModal(!formModal)
    const dispatch = useDispatch()
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const data2 = useSelector(state => state.unit.units.data)
    const data = data2?.data
    console.log("hello", data)
    useEffect(() => {
        if (filterData !== null) setReload(true)
    }, [filterData])
    console.log("", filterData, setLoading, formModel1, reload, setRowsPerPage, setData1, setFormModal1)

    useEffect(() => {
        dispatch(loadUnit({ per_page_record: rowsPerPage, page: currentPage, name: filterData.name }))
    }, [filterData])
    console.log("...", data1)

    const handlePagination = page => {
        dispatch(
            loadUnit({
                page: page.selected + 1,
                per_page_record: rowsPerPage,
                name: filterData.name

            })
        )
        setCurrentPage(page.selected + 1)
    }
    // const handleClose = (e) => {
    //     if (e === false) {
    //         setEditData(null)
    //         setFormModal1(e)
    //     }
    // }
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
    useEffect(() => {
        if (deleted) {
            dispatch(deletUnit(deleted))
            HandleDelete()

        }
    }, [deleted])
    console.log("...", deleted)
    const HandleClick = (id) => {
        setDeleted(id)
    }

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
            name: "UnitName",
            selector: 'name',
            sortable: true,
            minWidth: '150px'
        },
        {
            name: "Abbreiation",
            selector: 'abbreiation',
            sortable: true,
            minWidth: '150px'
        },

        {
            name: " MinValue",
            selector: 'minvalue',
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
                                setEditData(data)
                                setFormModal(!formModal)


                            }}
                        />
                    </div>
                    <UncontrolledTooltip placement='top' id='delete' target='delete'>
                        {("delete")}
                    </UncontrolledTooltip>
                    <div className='d-flex text-danger m-2' id='delete' >

                        <Trash2 size={18}
                            onClick={() => HandleClick(row.id)}
                        />
                    </div>
                </ButtonGroup>
                )
            }
        }
    ]

    const CustomPagination = () => {
        const count = Math.ceil(data2?.total / data2?.per_page)
        return (
            <ReactPaginate
                initialPage={data2?.current_page - 1}
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
                paddingLeft: '0 12px'
                // background: "orange"
            }
        },
        cells: {
            style: {
                fontSize: '14px',
                paddingLeft: '0 12px'
            }
        }
    }
    return (
        <>

            <UnitFilter show={productFilter} filterData={filterData} setFilterData={setFilterData} handleFilterModal={() => { setProductFilter(false) }} />
            <UnitForm show={formModal} show1={add} edit={editData} handleModal={handleImport} />
            {/* <Fragment>
                <Card>

                <div className=' d-flex justify-content-between'>

                    <div>
                        <CardHeader className='border-bottom'>
                            <CardTitle tag='h4'>Server Side</CardTitle>
                        </CardHeader>
                    </div>
                    <div>
                        <Row className='mx-0 mt-1 mb-50'>
                            <Col sm='6'>
                                <div className='d-flex align-items-center'>
                                    <ButtonGroup>
                                        <UncontrolledTooltip target="create-button">create-new</UncontrolledTooltip>
                                        <Button id='create-button'
                                            onClick={() => {
                                                setFormModal(!formModal)
                                                setEditData(null)
                                            }}
                                        >

                                            <Plus size={18} />
                                        </Button>
                                        <UncontrolledTooltip target="reload">Filter</UncontrolledTooltip>
                                        <Button id='reload'

                                            onClick={() => setProductFilter(true)}>


                                            <Sliders size={18} />
                                        </Button>
                                    </ButtonGroup>
                                </div>
                            </Col>

                        </Row>
                    </div>
                </div>
                <div className='react-dataTable'>
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
                            key={`date-${data?.length}`}
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
                            data={data}
                        />

                    </>
                    }
                </div>
            </Card>
        </Fragment> */}
            <Fragment>
                <Card>

                    <div className=' d-flex justify-content-between'>

                        <div>
                            <CardHeader className='border-bottom'>
                                <CardTitle tag='h4'>Server Side</CardTitle>
                            </CardHeader>
                        </div>
                        <div>
                            <Row className='mx-0 mt-1 mb-50'>
                                <Col sm='6'>
                                    <div className='d-flex align-items-center'>
                                        <ButtonGroup>
                                            <UncontrolledTooltip target="create-button">create-new</UncontrolledTooltip>
                                            <Button id='create-button'
                                                onClick={() => {
                                                    setFormModal(!formModal)
                                                    setEditData(null)
                                                }}
                                            >

                                                <Plus size={18} />
                                            </Button>
                                            <UncontrolledTooltip target="reload">Filter</UncontrolledTooltip>
                                            <Button id='reload'

                                                onClick={() => setProductFilter(true)}>


                                                <Sliders size={18} />
                                            </Button>
                                        </ButtonGroup>
                                    </div>
                                </Col>

                            </Row>
                        </div>
                    </div>
                    <div className='react-dataTable'>
                        {
                            loading ? <>
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
                                    key={`date-${data?.length}`}
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
                                    data={data}
                                />
                            </>
                        }
                    </div>
                </Card>
            </Fragment>
        </>
    )
}
export default Unit