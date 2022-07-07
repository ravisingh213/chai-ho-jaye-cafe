import axios from 'axios'
import clientConfig from '../../confing'
import { categoryDelete, categoryLoad, categorySave, categoryUpdate, categoryView } from '../../redux/reducers/category'
export const addedcategory = (data) => {
    return function (dispatch) {
        axios.post(`${clientConfig.siteUrl}/category`, data).then((resp) => {
            console.log("resp add", resp)
            dispatch(categorySave(resp.data))

        }).catch(error => console.log(error))
    }
}
export const loadcategory = ({ per_page_record, page, category }) => {
    return function (dispatch) {
        axios.post(`${clientConfig.siteUrl}/categorys?per_page_record=${per_page_record}&page=${page}&category=${category}`).then((resp) => {
            console.log("res", resp.data)

            if (resp.data.success) {
                dispatch(categoryLoad(resp.data))
            }
        }).catch(error => console.log(error))
    }
}
export const loadcategorys = () => {


    return function (dispatch) {
        axios.post(`${clientConfig.siteUrl}/categorys`).then((resp) => {
            console.log("res", resp.data)

            if (resp.data.success) {
                dispatch(categoryLoad(resp.data))
            }
        }).catch(error => console.log(error))
    }
}

export const deletcategory = (id) => {
    return function (dispatch) {
        axios.delete(`${clientConfig.siteUrl}/category/${id}`).then((resp) => {
            console.log("resp", resp)

            if (resp.data.success) {
                dispatch(categoryDelete(resp.data))
            }

        }).catch(error => console.log(error))
    }
}
export const viewcategory = (id) => {
    return function (dispatch) {
        axios.get(`${clientConfig.siteUrl}/category/${id}`).then((resp) => {
            console.log("resp", resp)

            if (resp.data.success) {
                dispatch(categoryView(resp.data))
            }

        }).catch(error => console.log(error))
    }
}
export const updatcategory = (id, data) => {
    return function (dispatch) {
        axios.put(`${clientConfig.siteUrl}/category/${id}`, data).then((resp) => {
            console.log("resp", resp)


            if (resp.data.success) {
                dispatch(categoryUpdate(resp.data))
            }
        }).catch(error => console.log(error))
    }
}
