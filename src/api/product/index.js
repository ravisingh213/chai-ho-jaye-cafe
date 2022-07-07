import axios from 'axios'
import { useEffect } from "react"
import { productDelete, productLoad, productSave, productUpdate, productView } from '../../redux/reducers/product'
import clientConfig from '../../confing'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

// export const AddedProduct = (data) => {

//     axios.post(`http://localhost:5000/Product`, data).then((resp) => {
//         console.log("resp add", resp)

//         Swal.fire({
//             title: "Success",
//             text: "Alert successful",
//             icon: "success",
//             confirmButtonText: "OK",
//         })
//         // dispatch(productSave(resp?.data))

//         // loadProduct()

//     }).catch(error => {
//         Swal.fire({
//             title: "Oops....",
//             text: "Something went wrong",
//             icon: "error",
//             confirmButtonText: "OK",
//         })

//     })
// }

export const addedProduct = (data) => {
    return function (dispatch) {
        axios.post(`${clientConfig.siteUrl}/product-info`, data).then((resp) => {
            console.log("resp add", resp)


            if (resp.data.success) {
                dispatch(productSave(resp.data))
            }

        }).catch(error => console.log(error))
    }
}
export const loadProduct = ({ per_page_record, page, name }) => {
    return function (dispatch) {
        axios.post(`${clientConfig.siteUrl}/product-infos?per_page_record=${per_page_record}&page=${page}&name=${name}`).then((resp) => {
            console.log("res", resp.data)

            if (resp.data.success) {
                dispatch(productLoad(resp.data))
            }
        }).catch(error => console.log(error))
    }
}

export const deletProduct = (id) => {
    return function (dispatch) {
        axios.delete(`${clientConfig.siteUrl}/product-info/${id}`).then((resp) => {
            console.log("resp", resp)

            if (resp.data.success) {
                dispatch(productDelete(resp.data))
            }

        }).catch(error => console.log(error))
    }
}
export const viewProduct = (id) => {
    return function (dispatch) {
        axios.get(`${clientConfig.siteUrl}/product-info/${id}`).then((resp) => {
            console.log("resp", resp)

            if (resp.data.success) {
                dispatch(productView(resp.data))
            }
        }).catch(error => console.log(error))
    }
}
export const updatProduct = (id, product) => {
    return function (dispatch) {
        axios.put(`${clientConfig.siteUrl}/product-info/${id}`, product).then((resp) => {
            console.log("resp", resp)
            if (resp.data.success) {
                dispatch(productUpdate(resp.data))
            }

        }).catch(error => console.log(error))
    }
}
