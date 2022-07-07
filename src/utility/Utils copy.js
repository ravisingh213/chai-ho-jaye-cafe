import moment from 'moment'
import { isValid } from './helpers/common'
import { toast } from "react-toastify"
let id = 0
export const getUniqId = (prefix) => {
    id++
    return `${prefix}-${id}`
}


export const formatDate = (value, format = "YYYY-MM-DD") => {
    const d = moment(value).format(format)
    if (d !== "Invalid date") {
        return d
    } else {
        return null
    }
}

export const formatTime = (value, format) => {
    const d = moment(value).format(format)
    if (d !== "Invalid time") {
        return d
    } else {
        return ""
    }
}

export const formatDateTimeByFormat = (value, format) => {
    const d = moment(value).format(format)
    if (d !== "Invalid date time") {
        return d
    } else {
        return ""
    }
}

export const getSelectValues = (val = [], matchWith = null) => {
    if (matchWith) {
        return val?.map(a => a.value[matchWith])
    } else return val?.map(a => a.value)
}
export const matchValue = (value, selected, matchWith) => {
    if (typeof value === "object") {
        return String(value[matchWith]) === String(selected)
    } else {
        return String(value) === String(selected)
    }
}
export const makeSelectValues = (option = [], value = [], multi = false, matchWith = null, grouped = false, setOption = null) => {
    try {
        let re = []
        if (!multi) {
            re = option?.find(c => matchValue(c?.value, value, matchWith))
            // log('matchWith', matchWith)
            // log(option, value)
        } else {
            if (value?.length > 0) {
                value?.forEach((v, i) => {
                    let x = []
                    if (grouped) {
                        option?.forEach((q) => {
                            if (isValid(q?.options?.find(a => matchValue(a?.value, v, matchWith)))) {
                                x = q?.options?.find(a => matchValue(a?.value, v, matchWith))
                            }
                        })
                    } else {
                        x = option?.find(a => matchValue(a?.value, v, matchWith))
                    }
                    // log("x", x)
                    // log("option", option)
                    if (x) re.push(x)
                })
            }

        }

        return re
    } catch (error) {
        // console.log();("makeSelectValues", error)
        // log(option, value)
        // log(matchWith, multi)
    }

}
export const createSelectOptions = (array, label, value = null) => {
    const data = []
    array.forEach((option) => {
        data.push({
            label: option[label],
            value: value ? option[value] : option

        })
    })
    return data
}
export const createConstSelectOptions = (object, hide = () => { return false }) => {
    const data = []
    for (const [key, value] of Object.entries(object)) {
        if (!hide(value)) {
            data.push({
                label: (key),
                value
            })
        }
    }
    return data
}

export const createAsyncSelectOptions = (res, page, label, value, setOptions = () => { }) => {
    const response = res?.data?.payload
    let results = {}
    if (response?.data?.length > 0) {
        results = {
            ...response,
            data: createSelectOptions(response?.data, label, value)
        }
        setOptions(results?.data)

        return {
            options: results?.data ?? [],
            hasMore: (parseInt(results?.last_page) !== parseInt(results?.current_page)),
            additional: {
                page: page + 1
            }
        }
    } else {
        return {
            options: [],
            hasMore: false
        }
    }
}


export const SuccessToast = (message, settings = {}, comp = null) => {
    toast(comp ?? (message, settings), { type: toast.TYPE.SUCCESS, ...settings })
}
/**
 * Display Success Tost Messages
 *
 * @param {*} message 
 * @param {*} [settings={}] You can add toast settings
 */
export const MessageToast = (message, settings = {}) => {
    toast(message, { type: toast.TYPE.DEFAULT, ...settings })
}
/**
 * Display Error Tost Messages
 *
 * @param {*} message 
 * @param {*} [settings={}] You can add toast settings
 */
export const ErrorToast = (message, settings = {}, comp = null) => {
    toast(comp ?? (message, settings), { type: toast.TYPE.ERROR, limit: 1, ...settings })
}
export const gender = Object.freeze({
    male: "male",
    female: 'female',
    other: "other"
})

/**
 * Display Warning Tost Messages
 *
 * @param {*} message 
 * @param {*} [settings={}] You can add toast settings
 */
export const WarningToast = (message, settings = {}) => {
    toast((message, settings), { type: toast.TYPE.WARNING, ...settings })
}

