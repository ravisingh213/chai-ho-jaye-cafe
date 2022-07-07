// import React from 'react'

// const Category = () => {
//   return (
//     <div>index</div>
//   )
// }

// export default Category
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { ChevronDown, Edit, Eye, EyeOff, MoreVertical, Plus, RefreshCcw, Sliders, Trash2 } from 'react-feather'
import { useForm } from 'react-hook-form'
import ReactPaginate from 'react-paginate'
import { useHistory } from 'react-router-dom'
import { Button, ButtonGroup, Card, CardHeader, CardTitle, Col, UncontrolledTooltip, Row } from 'reactstrap'
import { createSelectOptions, formatDateTimeByFormat } from '../../utility/Utils'
import Shimmer from '../../component/shimmers/Shimmer'
import BsTooltip from '../../component/tooltip'
import Show from '../../utility/Show'
import AddupModal from './AddupModal'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import DropDownMenu from '../../component/dropdownManu'
// import ConfirmAlert from '../../utility/helpers/ConfirmAlert'
import { deletcategory, loadcategory } from '../../api/category'
import SubCategoryFilter from './subcategory/subCatFilter'
import { useSelector } from 'react-redux'

import Swal from "sweetalert2"
import category from '../../redux/reducers/category'
const Category = () => {
    const { success } = useSelector((state) => state.category.category)
    const data1 = useSelector((state) => state.category.category.data)
    const data = data1.data


    const dispatch = useDispatch()


    const [loading, setLoading] = useState(false)
    const [options1, setoptions] = useState([])
    // const [rowsPerPage, setRowsPerPage] = useState("2")
    const [edit, setEdit] = useState([])
    const [view, setView] = useState([])
    const [subCategoryFilter, setSubCategoryFilter] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const [failed, setFailed] = useState(false)
    const [Open, setOpen] = useState(false)
    const [show, setshow] = useState(false)
    const handerClose = () => setOpen(false)
    const handerOpen = () => setOpen(true)
    //  const [page, setPage] = useState(1)

    const [per_page_record, setper_page_record] = useState(5)
    const [filterData, setFilterData] = useState({
        category: ''
    })
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const [reload, setreload] = useState(false)
    const handlerShow = () => {
        setOpen(!Open)
    }
    const handlerShow1 = () => {
        setOpen(!show)
    }

    const edithandler = (row) => {
        setEdit(row.data)

    }
    // const options = () => {
    //     setoptions(createSelectOptions(data1, "name", 'id'))
    // }
    // useEffect(() => {
    //     options()
    // }, [])
    useEffect(() => {
        if (filterData !== null) setreload(true)
    }, [filterData])
    const HandleDelete = () => {

    }

    // let per_page_record, page

    const handlerDelete = (id) => {
        setDeleted(id)
    }
    useEffect(() => {
        dispatch(loadcategory({ per_page_record: rowsPerPage, page: currentPage, category: filterData.category }))
    }, [filterData])


    useEffect(() => {

        if (deleted) {
            dispatch(deletcategory(deleted))
            if (success === true) {
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
                    if (result.value === true) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
            }
            if (success === false) {
                Swal.fire({
                    title: <>
                        <div className=''>
                            {/* <Spinner animation="border" color='danger' size={"lg"}>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner> */}
                        </div>
                    </>,
                    text: "Please Wait",
                    showConfirmButton: false,
                    showCancelButton: false,
                    allowOutsideClick: false
                })
            }
            // HandleDelete()
        }
    }, [deleted])
    console.log('data1.....', data)

    // const data = [
    //     {
    //         id: 1,
    //         category:'tea'

    //     },
    //     {
    //         id: 2,
    //         category:'bread'

    //     },
    //     {
    //         id: 3,
    //         category:'coffee'


    //     },
    //     {
    //         id: 4,
    //         category:'milk'

    //     },

    // ]
    const handlePagination = page => {
        dispatch(
            loadcategory({
                page: page.selected + 1,
                per_page_record: rowsPerPage,
                category: filterData.category
            })
        )
        setCurrentPage(page.selected + 1)
    }
    const ManuColumn = [

        {

            name: (""),
            selector: (row, i) => (row.id ? (i + 1) : null),
            maxWidth: "10px"

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
            name: "category",
            selector: 'category',
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

                    //         //  onClick={edithandler(row)}

                    //         >

                    //             <Eye size={18} />
                    //         </Button>
                    // </ButtonGroup>
                    <DropDownMenu
                        tooltip={(`menu`)}
                        component={
                            <MoreVertical
                                // color={colors.primary.main}
                                size={18}
                            />
                        }
                        options={[
                            {

                                icon: <Eye size={14} />,
                                name: ("view")
                                // onClick: () => {
                                //     handlerShow1()
                                //      setView(row)
                                // }
                            },
                            {

                                icon: <Edit size={14} />,
                                onClick: () => {
                                    handlerShow()
                                    setEdit(row)
                                },
                                name: "edit"
                            },
                            {

                                icon: <Trash2 size={14} />,
                                onClick: () => {
                                    handlerDelete(row.id)
                                },


                                name: "delete"
                            }
                            // {

                            // {

                            //     // IF: Can(Permissions.employeesDelete) && emp?.id !== user?.id,
                            //     icon: <Trash2 size={14} />,
                            //     name: <ConfirmAlert
                            //         title={("delete-this")}
                            //         color='text-warning'
                            //         // onClickYes={dispatch(deletcategory(row.id))}
                            //         //  onClickYes={() => deleteUser({ id: row.id, dispatch, loading: setLoading, success: setDeleted, error: setFailed })}

                            //         onSuccess={deleted}
                            //         onFailed={failed}
                            //         // onClose={() => { setDeleted(null); setFailed(null) }}
                            //         className=""
                            //     // id={`grid-delete-${user?.id}`}
                            //     >
                            //         {"delete"}
                            //     </ConfirmAlert>


                            // }
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
            <SubCategoryFilter show={subCategoryFilter} filterData={filterData} setFilterData={setFilterData} handleFilterModal={() => { setSubCategoryFilter(false) }} />
            <AddupModal Open={Open} handerClose={handerClose} handerOpen={handerOpen} edit={edit} handlerShow={handlerShow} editId={edit?.id} success={success} />

            <CardHeader className='border-bottom inline  '>
                <Row>
                    <Col md='11' xs={8}>
                        <CardTitle className='text-primary' tag='h4'> Category</CardTitle>

                    </Col>
                    <Col md='1' xs={4}>
                        <ButtonGroup>
                            <UncontrolledTooltip target="create-button">create-category</UncontrolledTooltip>
                            <Button id='create-button'

                                onClick={handlerShow}
                            >

                                <Plus size={18} />
                            </Button>
                            <UncontrolledTooltip target="reload">Filter</UncontrolledTooltip>
                            <Button id='reload'
                                onClick={() => setSubCategoryFilter(true)}
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
                        key={`date-${data?.length}`}
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


export default Category