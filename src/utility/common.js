
// import i18next from 'i18next'
// import i18n from '../../configs/i18n'
export const isValid = (val, extra = null) => {
    let r = true
    if (val === null) {
        r = false
    } else if (val === undefined) {
        r = false
    } else if (val === "") {
        r = false
    } else if (val === extra) {
        r = false
    } else if (val === "null") {
        r = false
    }
    return r
}
export const log = (log, log2 = "") => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        console.log(log, log2)
    } else {
        return false
    }
}

//  export const FM = (id, values) => {
//       try {
//           const { i18n, t } = useTranslation()
//           if (values === null) values = {}
//           return t(id, { ...values })
//       } catch (error) {
//      if (values === null) values = {}
//      return i18n.t(id, { ...values })
//       }

//  }


//   setValue("amount", (watch('quantity') * watch('rate')))

