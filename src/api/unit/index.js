import axios from 'axios'

import { unitDelete, unitLoad, unitSave, unitUpdate, unitView } from '../../redux/reducers/unit'
import clientConfig from '../../confing'


export const addedUnit = (data) => {
    return function (dispatch) {
        axios.post(`${clientConfig.siteUrl}/unit`, data).then((resp) => {
            console.log("resp add", resp)
            if (resp.data.success) {
                dispatch(unitSave(resp.data))
            }

        }).catch(error => console.log(error))
    }
}

export const loadUnit = ({ per_page_record, page, name }) => {
    return function (dispatch) {
        axios.post(`${clientConfig.siteUrl}/units?per_page_record=${per_page_record}&page=${page}&name=${name}`).then((resp) => {
            console.log("res", resp.data)

            if (resp.data.success) {
                dispatch(unitLoad(resp.data))
            }
        }).catch(error => console.log(error))
    }
}

export const deletUnit = (id) => {
    return function (dispatch) {
        axios.delete(`${clientConfig.siteUrl}/unit/${id}`).then((resp) => {
            console.log("resp", resp)

            if (resp.data.success) {
                dispatch(unitDelete(resp.data))
            }

        }).catch(error => console.log(error))
    }
}
export const viewUnit = (id) => {
    return function (dispatch) {
        axios.get(`${clientConfig.siteUrl}/unit/${id}`).then((resp) => {
            console.log("resp", resp)

            if (resp.data.success) {
                dispatch(unitView(resp.data))
            }
        }).catch(error => console.log(error))
    }
}
export const updatUnit = (id, product) => {
    return function (dispatch) {
        axios.put(`${clientConfig.siteUrl}/unit/${id}`, product).then((resp) => {
            console.log("resp", resp)
            if (resp.data.success) {
                dispatch(unitUpdate(resp.data))
            }

        }).catch(error => console.log(error))
    }
}
