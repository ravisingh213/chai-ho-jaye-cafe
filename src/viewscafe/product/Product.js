import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { ChevronDown, Edit2, Edit, Eye, EyeOff, Plus, RefreshCcw, Sliders, Trash2, Trash } from 'react-feather'
import { useForm } from 'react-hook-form'
import ReactPaginate from 'react-paginate'
import { useHistory } from 'react-router-dom'
import { Button, ButtonGroup, Card, CardHeader, CardTitle, Col, UncontrolledTooltip, Row } from 'reactstrap'
import { formatDateTimeByFormat } from '../../utility/Utils'
import Shimmer from '../../component/shimmers/Shimmer'
import BsTooltip from '../../component/tooltip'
import Show from '../../utility/Show'

import ProductForm from './ProductForm'
import { useDispatch, useSelector } from 'react-redux'
import { loadProduct, deletProduct } from '../../api/product'
import ProductFilter from './ProductFilter'
import ProductView from './ProductView'
 import Swal from 'sweetalert2'

// const HandleDelete = () => {
//     Swal.fire({
//         // ...this.props,
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Yes, delete it!',
//         onOpen: () => {
//             // code
//         }
//     }).then((result) => {
//         if (result.value) {
//             Swal.fire(
//                 'Deleted!',
//                 'Your file has been deleted.',
//                 'success'
//             )
//         }
//     });
// }

// const handlerDelete = (id) => {
//     setDeleted(id)
// }
// useEffect(() => {
//     dispatch(loadcategory())
// }, [])
// useEffect(() => {
//     dispatch(deletcategory(deleted))
//    if(deleted){
//     HandleDelete()
//    }
// }, [deleted])
const Product = () => {

    const data2 = useSelector(state => state.product.products.data)
    const data1 = data2?.data
    const [loading, setLoading] = useState(false)
    const [reaload, setReload] = useState(true)
    const [formModal, setFormModal] = useState(false)
    const [formModal1, setFormModal1] = useState(false)
    const [productFilter, setProductFilter] = useState(false)
    const [filterData, setFilterData] = useState({
        name: ""
    })

    const [add, setAdd] = useState(null)
    const [deleted, setDeleted] = useState('')
    const [editData, setEditData] = useState(null)
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const dispatch = useDispatch()

    const handleImport = () => setFormModal(!formModal)

    const handleClose = (e) => {
        if (e === false) {
            setEditData(null)
            setFormModal1(e)
        }
    }

    // useEffect(() => {
    //     if (editData !== null) setReload(true)
    // }, [reaload, editData])
    const handlePagination = page => {
        dispatch(
            loadProduct({
                page: page.selected + 1,
                per_page_record: rowsPerPage,
                name: filterData.name
            })
        )
        setCurrentPage(page.selected + 1)
    }

    useEffect(() => {
        dispatch(loadProduct({ per_page_record: rowsPerPage, page: currentPage, name: filterData.name }))
    }, [filterData])

    console.log("hello", data1)
    // const data = [
    //     {
    //         id: 1,
    //         name: "potato",
    //         quanitity: 5,
    //         unit: "kg",
    //         price: 50,
    //         description: "best qualty"

    //     },
    //     {
    //         id: 2,
    //         name: "tomato",
    //         quanitity: 3,
    //         unit: "kg",
    //         price: "60",
    //         description: "best qualty"

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
            dispatch(deletProduct(deleted))
            HandleDelete()
        }
    }, [deleted])

    const ProductColumn = [
        {
            name: ("#"),
            selector: (row, i) => (row.id ? (i + 1) : null),
            maxWidth: "10px"

        },


        {
            name: "product",
            selector: 'name',
            sortable: true,
            minWidth: '150px'
        },
        {
            name: "quanitity",
            selector: 'quanitity',
            sortable: true,
            minWidth: '150px'
        },

        {
            name: " unit",
            selector: 'units_name',
            sortable: true,
            minWidth: '150px'

        },

        {
            name: " price(Rs)/",
            selector: 'price',
            sortable: true,
            minWidth: '150px'
        },
        // {
        //     name: ("total"),
        //     selector: (row, i) => (row.id ? (row.quanitity * row.price) : null),
        //     maxWidth: "10px"
        // },

        // {
        //     name: "type",
        //     selector: 'type',
        //     sortable: true,
        //     minWidth: '150px',
        //     cell: row => {
        //         return (
        //             <>
        //                 {row?.type === "1" ? 'In' : 'Out'}
        //             </>
        //         )
        //     }
        // },
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

                    <UncontrolledTooltip placement='top' id='view' target='view'>
                        {("view")}
                    </UncontrolledTooltip>
                    <div className='d-flex m-2' id='view' >
                        <Eye size={18}
                            onClick={() => {
                                setAdd(row)
                                setEditData(data1)
                                setFormModal1(true)

                            }}

                        />
                    </div>
                    <UncontrolledTooltip placement='top' id='edit' target='edit'>
                        {("edit")}
                    </UncontrolledTooltip>
                    <div className='d-flex m-2' id='edit' >
                        <Edit size={18}
                            onClick={() => {
                                setAdd(row)
                                setEditData(data1)
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
            <ProductView showModal={formModal1} setShowModal={handleClose} edit={editData} show1={add} noView />
            <ProductFilter show={productFilter} filterData={filterData} setFilterData={setFilterData} handleFilterModal={() => { setProductFilter(false) }} />
            <ProductForm show={formModal} show1={add} edit={editData} handleModal={handleImport} />
            {/* <Card> */}
            {/* <CardHeader className='border-bottom inline d-flex justify-content-between'>
                <CardTitle className='text-primary' tag='h4'>Product Info   </CardTitle>
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
            </CardHeader> */}
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
                        key={`date-${data1?.length}`}
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
                        data={data1}
                    />

                </>
                }
            </Row>

        </>
    )
}


export default Product