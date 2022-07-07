
// import React, { useEffect, useState } from 'react'
// import { Edit, Eye, MoreVertical, Plus, Sliders, Trash2 } from 'react-feather'
// import { Card, CardBody, Row , Col, Label, CardHeader, CardTitle, ButtonGroup, UncontrolledTooltip, Button} from 'reactstrap'
// import DropDownMenu from '../../component/dropdownManu'
// import ConfirmAlert from '../../utility/helpers/ConfirmAlert'
// import RecipesFilter from './RecipesFiters'
// import ModalRecipesaddup from './RecipesModaladdup'

// const Recipes  = () => {
//     const [deleted, setDeleted] = useState(false)
//     const [failed, setFailed] = useState(false)
//     const [loading, setLoading] = useState(false)
//    const[Open, setOpen]=useState(false)
//    const [RecipeFilter, setRecipeFilter] = useState(false)
//    const [filterData, setFilterData] = useState(null)
//    const handerClose=()=>setOpen(false)
//    const handerOpen=()=>setOpen(true)
//    const  handlerShow =()=>{
//          setOpen(!Open)
//    }

//    useEffect(() => {
//     if (filterData !== null) setLoading(true)
// }, [filterData])


//     const data = [
//         {   tilte:'Coffee',
//         step:[
//             {Step1: 'Measure for your brew ratio'},
//             {Step1: ' Grind the coffee'},
//             {Step1:' Boil the water and wait 1 minute'},
//             {Step1: 'Place and wet the filter'},
//            {Step1: 'Place the coffee in the filter'},
//             {Step1: 'Pour and wait '},
//             {Step1: 'Continue and complete your pour'},
//             {Step1: 'Enjoy your coffee'}
//         ]

//         },
//         {   tilte:'Coffee',
//         step:[
//             {Step1: 'Measure for your brew ratio'},
//             {Step1: ' Grind the coffee'},
//             {Step1:' Boil the water and wait 1 minute'},
//             {Step1: 'Place and wet the filter'},
//            {Step1: 'Place the coffee in the filter'},
//             {Step1: 'Pour and wait '},
//             {Step1: 'Continue and complete your pour'},
//             {Step1: 'Enjoy your coffee'}
//         ]

//     },
//     {   tilte:'Coffee',
//     step:[
//         {Step1: 'Measure for your brew ratio'},
//     {Step1: ' Grind the coffee'},
//     {Step1:' Boil the water and wait 1 minute'},
//     {Step1: 'Place and wet the filter'},
//    {Step1: 'Place the coffee in the filter'},
//     {Step1: 'Pour and wait '},
//     {Step1: 'Continue and complete your pour'},
//     {Step1: 'Enjoy your coffee'}
//     ]

// },
// {   tilte:'Coffee',
// step:[
//     {Step1: 'Measure for your brew ratio'},
//     {Step1: ' Grind the coffee'},
//     {Step1:' Boil the water and wait 1 minute'},
//     {Step1: 'Place and wet the filter'},
//    {Step1: 'Place the coffee in the filter'},
//     {Step1: 'Pour and wait '},
//     {Step1: 'Continue and complete your pour'},
//     {Step1: 'Enjoy your coffee'}
// ]


// },

//     ]

//   return (
//    <>
//    <RecipesFilter show={RecipeFilter} filterData={filterData} setFilterData={setFilterData} handleFilterModal={() => { setRecipeFilter(false) }} />
//    <ModalRecipesaddup   Open={Open} handerClose={handerClose} handerOpen={handerOpen}   className='overflow-hidden'/>

//    <Row>
//    <Col md='11' xs={8}>
//                         <CardTitle className='text-primary' tag='h4'>Recipes</CardTitle>

//                     </Col>
//                     <Col md='1' xs={4}>
//                         <ButtonGroup>
//                             <UncontrolledTooltip target="create-button">create-Recipe</UncontrolledTooltip>
//                             <Button id='create-button'

//                                  onClick={handlerShow}
//                             >

//                                 <Plus size={18} />
//                             </Button>
//                             <UncontrolledTooltip target="reload">Filter</UncontrolledTooltip>
//                             <Button id='reload'
//                                onClick={() => setRecipeFilter(true)} 
//                             >

//                                 <Sliders size={18} />
//                             </Button>
//                         </ButtonGroup>
//                     </Col>
//    </Row>

//         <Row className='mt-3'>
//            {
//             data?.map((item)=>{
//                 return(
//                     <>

//             <Col md='6' className='  gradient-shadow-white mt- ' >
//                 <Card>
//             {/* <div className='d-flex justify-content-between'> */}
//                 <CardHeader className='d-flex justify-content-between  gradient-shadow-primary 'style={{ paddingLeft:'10px' }} >
//                  <div>
//                     <CardTitle className='d-flex justify-content-start text-white' tag='h5'>{item.tilte}</CardTitle>
//                  </div>
//                   <div className='text-white'>
//                      <DropDownMenu  
//                        tooltip={(`menu`)}
//                        component={
//                            <MoreVertical 
//                            // color={colors.primary.main}
//                            // size={IconSizes.MenuVertical} 
//                            size={25}
//                            />
//                        }
//                        options={[
//                             {

//                                icon: <Eye size={14} />,
//                                name: ("view"),
//                            //      onClick: () => {
//                            //         handlerShow()
//                            //          setEdit(row)
//                            //      }
//                            },
//                            {

//                                icon:<Edit size={14} />,
//                             //    onClick: () => {
//                             //        // setShowModal(!showModal)
//                             //        handlerShow()
//                             //        setEdit(row)
//                             //    },
//                                name: "edit"
//                            },


//                          { 
//                             // IF: Can(Permissions.employeesDelete) && emp?.id !== user?.id,
//                             icon: <Trash2 size={14} />,
//                             name: <ConfirmAlert
//                                 title={("delete-this")}
//                                 color='text-warning'
//                                 onClickYes={"hello"}
//                                 // onClickYes={() => deleteUser({ id: user?.id, dispatch, loading: setLoading, success: setDeleted, error: setFailed })}
//                                 onSuccess={deleted}
//                                 onFailed={failed}
//                                 // onClose={() => { setDeleted(null); setFailed(null) }}
//                                 className=""
//                                 // id={`grid-delete-${user?.id}`}
//                                 >
//                                 {"delete"}
//                             </ConfirmAlert>


//                          }
//                        ]}

//                      />

//                     </div>


//                 </CardHeader>
//              {/* <CardBody> */}

//              <div className='text-start mt-4'>
//              <ol>
//                {/* <img className='text-center' src='https://pbs.twimg.com/media/FQ2R-FLWYAEUaIg?format=jpg&name=small' alt=""  style={{width:'350px' , height:'20vh'}}/> */}
//                 {item.step.map(ingredient=>{
//                     return(
//                         <>

//                          <li>{ingredient.Step1}</li>

//                         </>
//                     )
//               })}
//             </ol>
//             </div>
//              {/* </CardBody> */}

//           </Card>
//             </Col>

//             </>
//                 )
//             })
//            }
//         </Row>
//    </>
//   )
// }

// export default Recipes 
import { Fragment, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { ChevronDown, MoreVertical, Plus, Sliders } from 'react-feather'
import { useForm } from 'react-hook-form'
import ReactPaginate from 'react-paginate'
import { useHistory } from 'react-router-dom'
import { Button, ButtonGroup, CardHeader, CardTitle, Col, UncontrolledTooltip, Row, Card } from 'reactstrap'
import { formatDateTimeByFormat } from '../../utility/Utils'
import Shimmer from '../../component/shimmers/Shimmer'
import BsTooltip from '../../component/tooltip'
import Show from '../../utility/Show'
import DropDownMenu from '../../component/dropdownManu'

// import { loadexpense } from '../../api/expense'
import { useDispatch } from 'react-redux'
import ModalRecipesaddup from './RecipesModaladdup'

import RecipesFilter from './RecipesFiters'


const Recipes = () => {

    const dispatch = useDispatch()
    //    const data1= useSelector((state)=>state.expense.expense.data)
    //    const data =data1.data

    const [loading, setLoading] = useState(false)


    const [edit, setEdit] = useState([])
    const [view, setView] = useState([])
    const [deleted, setDeleted] = useState(false)
    const [failed, setFailed] = useState(false)
    const [Open, setOpen] = useState(false)
    const [RecipeFilter, setRecipeFilter] = useState(false)
    const [filterData, setFilterData] = useState(null)
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const [show, setshow] = useState(false)
    const handerClose = () => setOpen(false)
    const handerOpen = () => setOpen(true)
    const handlerShow = () => {
        setOpen(!Open)
    }

    useEffect(() => {
        if (filterData !== null) setLoading(true)
    }, [filterData])

    // const handlerShow1 = () => {
    //     setOpen(!show)
    // }

    // const edithandler = (row) => {
    //     setEdit(row.data)

    // }

    // const data = [
    //     {
    //         id: 1,
    //         category:'veg',
    //         items:'oil',
    //         quantity:2,
    //         rate:200,
    //         totalExpense:400,
    //         description: 'this is best samosa',


    //     },
    //     {
    //         id: 2,
    //         description: 'this is best samosa',
    //         Investment: '2000',
    //         expense: '500',
    //         saving: '1000000',
    //         category:'petrol'

    //     },
    //     {
    //         id: 3,
    //         description: 'this is best samosa',

    //         expense: '500',
    //         category:'coffi'


    //     },
    //     {
    //         id: 4,
    //         description: 'this is best samosa',
    //         Investment: '2000',
    //         expense: '500',
    //         total: '1000000',
    //         category:'transport'

    //     },

    // ]

    // useEffect(() => {
    //     dispatch(loadexpense({per_page_record:rowsPerPage,page:currentPage}))
    // }, [dispatch])
    // const handlePagination = page => {
    //     dispatch(
    //       loadexpense({
    //         page: page.selected + 1,
    //         per_page_record: rowsPerPage,
    //         // q: searchValue
    //       })
    //     )
    //     setCurrentPage(page.selected + 1)
    //   }


    const data = [
        {
            tilte: 'Coffee',
            step: [
                { Step1: 'Measure for your brew ratio' },
                { Step1: ' Grind the coffee' },
                { Step1: ' Boil the water and wait 1 minute' },
                { Step1: 'Place and wet the filter' },
                { Step1: 'Place the coffee in the filter' },
                { Step1: 'Pour and wait ' },
                { Step1: 'Continue and complete your pour' },
                { Step1: 'Enjoy your coffee' }
            ]

        },
        {
            tilte: 'Coffee',
            step: [
                { Step1: 'Measure for your brew ratio' },
                { Step1: ' Grind the coffee' },
                { Step1: ' Boil the water and wait 1 minute' },
                { Step1: 'Place and wet the filter' },
                { Step1: 'Place the coffee in the filter' },
                { Step1: 'Pour and wait ' },
                { Step1: 'Continue and complete your pour' },
                { Step1: 'Enjoy your coffee' }
            ]

        },
        {
            tilte: 'Coffee',
            step: [
                { Step1: 'Measure for your brew ratio' },
                { Step1: ' Grind the coffee' },
                { Step1: ' Boil the water and wait 1 minute' },
                { Step1: 'Place and wet the filter' },
                { Step1: 'Place the coffee in the filter' },
                { Step1: 'Pour and wait ' },
                { Step1: 'Continue and complete your pour' },
                { Step1: 'Enjoy your coffee' }
            ]

        },
        {
            tilte: 'Coffee',
            step: [
                { Step1: 'Measure for your brew ratio' },
                { Step1: ' Grind the coffee' },
                { Step1: ' Boil the water and wait 1 minute' },
                { Step1: 'Place and wet the filter' },
                { Step1: 'Place the coffee in the filter' },
                { Step1: 'Pour and wait ' },
                { Step1: 'Continue and complete your pour' },
                { Step1: 'Enjoy your coffee' }

            ]
        }
    ]
    const ManuColumn = [

        {

            name: ("#"),
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
            name: "product",
            selector: 'product',
            sortable: true,
            minWidth: '150px'
        },

        {
            name: "items",
            selector: 'items',
            sortable: true,
            minWidth: '150px'
        },
        {
            name: "quantity",
            selector: 'quantity',
            sortable: true,
            minWidth: '150px'
        },
        {
            name: "rate",
            selector: 'quantity',
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
            name: ("actions"),
            allowOverflow: true,
            minWidth: "70px",
            cell: row => {
                console.log(row)
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
                    // options={[

                    // ]}
                    />
                )
            }
        }
    ]

    const CustomPagination = () => {
        //  const count = Math.ceil(data1?.total / data1?.per_page)
        return (
            <ReactPaginate
                //  initialPage={data1?.current_page - 1}
                disableInitialCallback
                previousLabel={''}
                nextLabel={''}
                breakLabel='...'

                // forcePage={currentPage !== 0 ? currentPage - 1 : 0}
                pageCount={5}
                activeClassName='active'
                //  onPageChange={page => handlePagination(page)}
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
            <RecipesFilter show={RecipeFilter} filterData={filterData} setFilterData={setFilterData} handleFilterModal={() => { setRecipeFilter(false) }} />
            <ModalRecipesaddup Open={Open} handerClose={handerClose} handerOpen={handerOpen} className='overflow-hidden' />
            {/* {/* 
          <ExpenseView  Open={Open} handerClose={handerClose} handerOpen={handerOpen} edit={view} /> */}
            {/* <ExpenseModal Open={Open} handerClose={handerClose} handerOpen={handerOpen} edit={edit} /> */}
            {/* < CardHeader className='border-bottom inline  ' >
                <Row>
                    <Col md='11' xs={8}>
                        <CardTitle className='text-primary' tag='h4'>Recipes</CardTitle>

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

                                onClick={() => setRecipeFilter(true)}
                            >

                                <Sliders size={18} />
                            </Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </CardHeader > */}
            {/* <Row>

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
            </Row> */}

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
                                                color='primary'
                                                onClick={handlerShow}
                                            >

                                                <Plus size={14} />
                                            </Button>
                                            <UncontrolledTooltip target="reload">Filter</UncontrolledTooltip>
                                            <Button id='reload'

                                                onClick={() => setRecipeFilter(true)}
                                            >

                                                <Sliders size={14} />
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
                    </div>
                </Card>
            </Fragment>

        </>
    )
}


export default Recipes
