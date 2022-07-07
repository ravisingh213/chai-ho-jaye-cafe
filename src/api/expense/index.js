import axios from 'axios'
import { useEffect } from "react"

import clientConfig from '../../confing'
import { expenseDelete, expenseLoad, expenseSave, expenseUpdate, expenseView } from '../../redux/reducers/expense'

export const addedexpense = (data) => {
    return function (dispatch) {
        axios.post(`${clientConfig.siteUrl}/expense`, data).then((resp) => {
            console.log("resp add", resp)

            if (resp.data.success) {
                dispatch(expenseSave(resp.data))
            }

        }).catch(error => console.log(error))
    }
}

export const loadexpense = ({ per_page_record, page, quantity }) => {

    //  console.log('expense seearch', expense)
    return function (dispatch) {
        axios.post(`${clientConfig.siteUrl}/expenses?per_page_record=${per_page_record}&page=${page}&quantity=${quantity}`).then((resp) => {
            console.log("res", resp.data)


            if (resp.data.success) {
                dispatch(expenseLoad(resp.data))
            }
        }).catch(error => console.log(error))
    }
}

export const loadexpenses = () => {


    return function (dispatch) {
        axios.post(`${clientConfig.siteUrl}/expenses`).then((resp) => {
            console.log("res", resp.data)
            if (resp.data.success) {
                dispatch(expenseLoad(resp.data))
            }
        }).catch(error => console.log(error))
    }
}

export const deletexpense = (id) => {
    return function (dispatch) {
        axios.delete(`${clientConfig.siteUrl}/expense/${id}`).then((resp) => {
            console.log("resp", resp)

            if (resp.data.success) {
                dispatch(expenseDelete(resp.data))
            }
        }).catch(error => console.log(error))
    }
}
export const viewexpense = (id) => {
    return function (dispatch) {
        axios.get(`${clientConfig.siteUrl}/expense/${id}`).then((resp) => {
            console.log("resp", resp)

            if (resp.data.success) {
                dispatch(expenseView(resp.data))
            }
        }).catch(error => console.log(error))
    }
}
export const updatexpense = (id, data) => {
    return function (dispatch) {
        axios.put(`${clientConfig.siteUrl}/expense/${id}`, data).then((resp) => {
            console.log("resp", resp)
            dispatch(expenseUpdate(resp.data))
            if (resp.data.success) {
                dispatch(expenseUpdate(resp.data))
            }
        }).catch(error => console.log(error))
    }
}
