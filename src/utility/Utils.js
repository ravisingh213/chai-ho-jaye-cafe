import { DefaultRoute } from '../router/routes'
import moment from 'moment'

import { isValid } from './common'
import { toast } from "react-toastify"
// ** Checks if an object is empty (returns boolean)
export const isObjEmpty = obj => Object.keys(obj).length === 0

// ** Returns K format from a number
export const kFormatter = num => (num > 999 ? `${(num / 1000).toFixed(1)}k` : num)

// ** Converts HTML to string
export const htmlToString = html => html.replace(/<\/?[^>]+(>|$)/g, '')

// ** Checks if the passed date is today
const isToday = date => {
  const today = new Date()
  return (
    /* eslint-disable operator-linebreak */
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
    /* eslint-enable */
  )
}

/**
 ** Format and return date in Humanize format
 ** Intl docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 ** Intl Constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * @param {String} value date to format
 * @param {Object} formatting Intl object to format with
 */

export const formatDateToMonthShort = (value, toTimeForCurrentDay = true) => {
  const date = new Date(value)
  let formatting = { month: 'short', day: 'numeric' }

  if (toTimeForCurrentDay && isToday(date)) {
    formatting = { hour: 'numeric', minute: 'numeric' }
  }

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
}

/**
 ** Return if user is logged in
 ** This is completely up to you and how you want to store the token in your frontend application
 *  ? e.g. If you are using cookies to store the application please update this function
 */
export const isUserLoggedIn = () => localStorage.getItem('userData')
export const getUserData = () => JSON.parse(localStorage.getItem('userData'))

/**
 ** This function is used for demo purpose route navigation
 ** In real app you won't need this function because your app will navigate to same route for each users regardless of ability
 ** Please note role field is just for showing purpose it's not used by anything in frontend
 ** We are checking role just for ease
 * ? NOTE: If you have different pages to navigate based on user ability then this function can be useful. However, you need to update it.
 * @param {String} userRole Role of user
 */
export const getHomeRouteForLoggedInUser = userRole => {
  if (userRole === 'admin') return DefaultRoute
  if (userRole === 'client') return '/access-control'
  return '/login'
}

// ** React Select Theme Colors
export const selectThemeColors = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: '#7367f01a', // for option hover bg-color
    primary: '#7367f0', // for selected option bg-color
    neutral10: '#7367f0', // for tags bg-color
    neutral20: '#ededed', // for input border-color
    neutral30: '#ededed' // for input hover border-color
  }
})
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
export const makeSelectValues = (option = [], value = [], multi = false, matchWith = null, grouped = false) => {
  try {
    let re = []
    if (!multi) {
      re = option?.find(c => matchValue(c?.value, value, matchWith))
      // log('matchWith', matchWith)
      // log(option, value)
    } else {
      if (value?.length > 0) {
        value?.forEach((v) => {
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

