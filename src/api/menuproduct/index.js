import axios from 'axios'
import { useEffect } from "react"
import { menuDelete, menuLoad, menuSave, menuUpdate, menuView } from '../../redux/reducers/Menuproduct'
import clientConfig from '../../confing'
export const addedMenu = (data) => {
    return function (dispatch) {
        axios.post(`${clientConfig.siteUrl}/product-menu`, data).then((resp) => {
            console.log("resp add", resp)


            if (resp.data.success) {
                dispatch(menuSave(resp.data))
            }

        }).catch(error => console.log(error))
    }
}

export const loadMenu = ({ per_page_record, page, price, product }) => {
    return function (dispatch) {
        axios.post(`${clientConfig.siteUrl}/product-menus?per_page_record=${per_page_record}&page=${page}& price=${price}&product=${product}`).then((resp) => {
            console.log("res", resp.data)

            if (resp.data.success) {
                dispatch(menuLoad(resp.data))
            }
        }).catch(error => console.log(error))
    }
}

export const deletMenu = (id) => {
    return function (dispatch) {
        axios.delete(`${clientConfig.siteUrl}/product-menu/${id}`).then((resp) => {
            console.log("resp", resp)

            if (resp.data.success) {
                dispatch(menuDelete(resp.data))
            }

        }).catch(error => console.log(error))
    }
}
export const viewMenu = (id) => {
    return function (dispatch) {
        axios.get(`${clientConfig.siteUrl}/product-menu/${id}`).then((resp) => {
            console.log("resp", resp)

            if (resp.data.success) {
                dispatch(menuView(resp.data))
            }
        }).catch(error => console.log(error))
    }
}
export const updatMenu = (id, data) => {
    return function (dispatch) {
        axios.put(`${clientConfig.siteUrl}/product-menu/${id}`, data).then((resp) => {
            console.log("resp", resp)
            if (resp.data.success) {
                dispatch(menuUpdate(resp.data))
            }

        }).catch(error => console.log(error))
    }
}
// export const searchMenu = (id, data) => {
//     return function (dispatch) {
//         axios.post(`${clientConfig.siteUrl}/product-menu/${data}`, data).then((resp) => {
//             console.log("resp", resp);
//             dispatch(menuUpdate(resp.data));
//         }).catch(error => console.log(error));
//     }
// }
