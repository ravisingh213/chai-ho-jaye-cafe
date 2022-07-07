import axios from 'axios'
import { useEffect } from "react"
import { customerDelete, customerLoad, customerSave, customerUpdate, customerView } from '../../redux/reducers/customer'
import clientConfig from '../../confing'

export const addedCustomer = (data) => {
    return function (dispatch) {
        axios.post(`${clientConfig.siteUrl}/customer`, data).then((resp) => {
            console.log("resp add", resp)

            if (resp.data.success) {
                dispatch(customerSave(resp.data))
            }

        }).catch(error => console.log(error))
    }
}

export const loadCustomer = ({ per_page_record, page, name, email, mobile }) => {
    return function (dispatch) {
        axios.post(`${clientConfig.siteUrl}/customers?per_page_record=${per_page_record}&page=${page}&name=${name}&email=${email}&mobile=${mobile}`).then((resp) => {
            console.log("res", resp.data)


            if (resp.data.success) {
                dispatch(customerLoad(resp.data))
            }
        }).catch(error => console.log(error))
    }
}

export const deletCustomer = (id) => {
    return function (dispatch) {
        axios.delete(`${clientConfig.siteUrl}/customer/${id}`).then((resp) => {
            console.log("resp", resp)

            if (resp.data.success) {
                dispatch(customerDelete(resp.data))
            }

        }).catch(error => console.log(error))
    }
}
export const viewCustomer = (id) => {
    return function (dispatch) {
        axios.get(`${clientConfig.siteUrl}/customer/${id}`).then((resp) => {
            console.log("resp", resp)

            if (resp.data.success) {
                dispatch(customerView(resp.data))
            }

        }).catch(error => console.log(error))
    }
}
export const updatCustomer = (id, customer) => {
    return function (dispatch) {
        axios.put(`${clientConfig.siteUrl}/customer/${id}`, customer).then((resp) => {
            console.log("resp", resp)


            if (resp.data.success) {
                dispatch(customerUpdate(resp.data))
            }
        }).catch(error => console.log(error))
    }
}
