
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { ChevronDown, Edit, Eye, EyeOff, MoreVertical, Plus, RefreshCcw, Sliders, Trash2 } from 'react-feather'
import { useForm } from 'react-hook-form'
import ReactPaginate from 'react-paginate'
import { useHistory } from 'react-router-dom'
import { Button, ButtonGroup, Card, CardHeader, CardTitle, Col, UncontrolledTooltip, Row, Spinner } from 'reactstrap'
import { formatDateTimeByFormat } from '../../utility/Utils'
import Shimmer from '../../component/shimmers/Shimmer'
import BsTooltip from '../../component/tooltip'
import Show from '../../utility/Show'
import ModalManu from './ModalManu'
import DropDownMenu from '../../component/dropdownManu'


import Manuviewmodal from './Manuviewmodal'
import { useDispatch, useSelector } from 'react-redux'
import { deletMenu, loadMenu } from '../../api/menuproduct'
import Swal from "sweetalert2"
import FiterManu from './FiterManu'
const ProductManu = () => {


    const dispatch = useDispatch()
    const data = useSelector((state) => state.Menuproduct.menu.data.data)
    const data1 = useSelector((state) => state.Menuproduct.menu.data)
    const [loading, setLoading] = useState(false)


    const [edit, setEdit] = useState('')
    const [deleted, setDeleted] = useState(false)
    const [failed, setFailed] = useState(false)
    const [filterData, setFilterData] = useState({
        price: '',
        product: ''

    })
    const [Open, setOpen] = useState(false)
    const [reload, setreload] = useState(false)
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const [ManuFilter, setManuFilter] = useState()
    const handerClose = () => setOpen(false)
    const handerOpen = () => setOpen(true)
    const handlerShow = () => {
        setOpen(!Open)
    }

    const edithandler = (row) => {
        setEdit(row.data)

    }
    useEffect(() => {
        if (filterData !== null) setreload(true)
    }, [filterData])

    useEffect(() => {
        dispatch(loadMenu({
            per_page_record: rowsPerPage,
            page: currentPage,
            price: filterData.price,
            product: filterData.product
        }))
    }, [filterData])
    console.log('........dsd', filterData.price)
    // const data = [
    //     {
    //         id: 1,
    //         product: 'samosa',
    //         price: '20',
    //         description: 'this is best samosa',
    //         date:''

    //     },
    //     {
    //         id: 2,
    //         product: 'coeffi',
    //         price: '20',
    //         description: 'this is best samosa'

    //     },
    //     {
    //         id: 3,
    //         product: 'milk',
    //         price: '20',
    //         description: 'this is best samosa'

    //     },
    //     {
    //         id: 4,
    //         product: 'samosa',
    //         price: '20',
    //         description: 'this is best samosa'

    //     },
    //     {
    //         id: 5,
    //         product: 'coeffi',
    //         price: '20',
    //         description: 'this is best samosa'

    //     },
    //     {
    //         id: 6,
    //         product: 'milk',
    //         price: '20',
    //         description: 'this is best samosa'

    //     }
    // ]
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
                if (result.value === true) {
                    Swal.fire({
                        title: <>
                            <div className=''>
                                <Spinner animation="border" color='danger' size={"lg"}>
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </div>
                        </>,
                        text: "Please Wait",
                        showConfirmButton: true,
                        // showCancelButton: true,
                        allowOutsideClick: true
                    })
                }
                 if (result.value === false) {
                    Swal.fire({
                        title: <>
                            <div className=''>
                                <Spinner animation="border" color='danger' size={"lg"}>
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </div>
                        </>,
                        text: "Please Wait",
                        showConfirmButton: true,
                        // showCancelButton: false,
                        allowOutsideClick: false
                    })
                }
            }
        })
    }
    const deleteHandler = (id) => {
        setDeleted(id)
    }
    useEffect(() => {
        if (deleted) {
            dispatch(deletMenu(deleted))
            HandleDelete()
        }

    }, [deleted])
    const handlePagination = page => {
        dispatch(
            loadMenu({
                page: page.selected + 1,
                per_page_record: rowsPerPage,
                price: filterData.price,
                product: filterData.product
            })
        )
        setCurrentPage(page.selected + 1)
    }

    const ManuColumn = [

        {

            name: ("#"),
            selector: (row, i) => (row.id ? (i + 1) : null),
            maxWidth: "10px"

        },


        {
            name: "product",
            selector: 'product',
            sortable: true,
            minWidth: '150px'
        },
        {
            name: "price",
            selector: 'price',
            sortable: true,
            minWidth: '150px'
        },
        {
            name: "description",
            selector: 'description',
            sortable: true,
            minWidth: '150px'
        },

        {
            name: ("date"),
            selector: ({ value }) => {
                return value !== null ? formatDateTimeByFormat(value, "YYYY-MM-DD") : ""
            },
            sortable: true,
            minWidth: '150px'
        },
        {
            name: ("actions"),
            allowOverflow: true,
            minWidth: "70px",
            cell: row => {

                return (
                    // <ButtonGroup >
                    //     {/* <Hide IF={row?.file === null}> */}
                    //     {/* {row?.data !== null ? <BsTooltip className="ms-1" Tag={"a"} role={"button"} target={"_blank"} href={row?.file} title={("View")}>
                    //         <Eye size="18" />
                    //     </BsTooltip> : <BsTooltip className="ms-1" Tag={"a"} role={"button"} title={("no-View")}>
                    //         <EyeOff size="18" />
                    //     </BsTooltip>} */}
                    //     {/* </Hide> */}
                    //     <UncontrolledTooltip target="View-Manu">View-Manu</UncontrolledTooltip>
                    //         <Button id='View-Manu'

                    //          onClick={edithandler(row)}

                    //         >

                    //             <Eye size={18} />
                    //         </Button>
                    // </ButtonGroup>
                    <DropDownMenu
                        tooltip={(`menu`)}
                        component={
                            <MoreVertical
                                // color={colors.primary.main}
                                // size={IconSizes.MenuVertical} 
                                size={18}
                            />
                        }
                        options={[
                            // {

                            //     icon: <Eye size={14} />,
                            //     name: ("view"),
                            //      onClick: () => {
                            //         handlerShow()
                            //          setEdit(row)
                            //      }
                            // },
                            {

                                icon: <Edit size={14} />,
                                onClick: () => {
                                    // setShowModal(!showModal)
                                    handlerShow()
                                    setEdit(row)
                                },
                                name: "edit"
                            },

                            {

                                icon: <Trash2 size={14} />,
                                onClick: () => {
                                    deleteHandler(row.id)
                                },
                                name: "delete"
                            }
                            // {

                            //     // IF: Can(Permissions.employeesDelete) && emp?.id !== user?.id,
                            //     icon: <Trash2 size={14} />,
                            //     name: <ConfirmAlert
                            //         title={("delete-this")}
                            //         color='text-warning'
                            //         onClickYes={"hello"}
                            //         // onClickYes={() => deleteUser({ id: user?.id, dispatch, loading: setLoading, success: setDeleted, error: setFailed })}
                            //         onSuccess={deleted}
                            //         onFailed={failed}
                            //         // onClose={() => { setDeleted(null); setFailed(null) }}
                            //         className=""
                            //         // id={`grid-delete-${user?.id}`}
                            //         >
                            //         {"delete"}
                            //     </ConfirmAlert>


                            //  }
                        ]}
                    />

                )
            }
        }
    ]

    const CustomPagination = () => {
        const count = Math.ceil(data1?.total / data1?.per_page)
        return (
            <ReactPaginate
                initialPage={data1?.current_page - 1}
                disableInitialCallback
                previousLabel={''}
                nextLabel={''}
                breakLabel='...'

                forcePage={currentPage !== 0 ? currentPage - 1 : 0}
                pageCount={count}
                activeClassName='active'
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

            {/* <Card> */}
            {/* <ManuViewModal  edit={edit}/> */}
            <FiterManu show={ManuFilter} filterData={filterData} setFilterData={setFilterData} handleFilterModal={() => { setManuFilter(false) }} />
            <ModalManu Open={Open} handerClose={handerClose} handerOpen={handerOpen} edit={edit} editId={edit?.id} />
            {/* < Manuviewmodal  Open={Open} handerClose={handerClose} handerOpen={handerOpen} edit={edit}  /> */}
            <CardHeader className='border-bottom inline'>
                <Row>
                    <Col md='11' xs={8}>
                        <CardTitle className='text-primary' tag='h4'>Product Manu</CardTitle>

                    </Col>
                    <Col md='1' xs={4}>
                        <ButtonGroup>
                            <UncontrolledTooltip target="create-button">create-new</UncontrolledTooltip>
                            <Button id='create-button'

                                onClick={handlerShow}
                            >

                                <Plus size={18} />
                            </Button>
                            <UncontrolledTooltip target="reload">Filter</UncontrolledTooltip>
                            <Button id='reload'
                                onClick={() => setManuFilter(true)}
                            >

                                <Sliders size={18} />
                            </Button>
                        </ButtonGroup>
                    </Col>
                </Row>
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
                        noHeader
                        selectableRows
                        pagination
                        paginationServer
                        className='react-dataTable'
                        columns={ManuColumn}
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
            </Row>
            {/* </Card> */}
        </>
    )
}


export default ProductManu

