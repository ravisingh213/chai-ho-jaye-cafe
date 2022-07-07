import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import SelectReact from 'react-select'
import classNames from 'classnames'
import { Controller } from 'react-hook-form'
import { getSelectValues, makeSelectValues } from "../../utility/Utils"
const Select = ({ error = null, control, key, value, name, rules, matchWith = null, onChangeValue = () => { }, isMulti, errors, options, async = false, isClearable = false, components, loadOptions = () => { }, ...rest }) => {
    const [v, setV] = useState(null)

    if (async) {
        return (
            <>
                <Controller
                    control={control}
                    defaultValue={value}
                    name={name}
                    rules={rules}
                    render={({ field: { onChange, ref } }) => (
                        <AsyncPaginate
                             key={`control-select-${key}-${options?.length}`}
                            placeholder={"select"}
                            name={name}
                            // ref={ref}
                            selectRef={ref}
                            isMulti={isMulti}
                            components={components}
                            //theme={selectThemeColors}
                            className={classNames('react-select', { 'is-invalid': (error ?? errors[name]) })}
                            classNamePrefix='select'
                            isClearable={isClearable}
                            loadOptions={loadOptions}
                            value={v ? makeSelectValues(options, v, isMulti) : makeSelectValues(options, value, isMulti)}
                            onChange={val => {
                                if (isMulti) {
                                    onChange(getSelectValues(val, matchWith))
                                    setV(getSelectValues(val, matchWith))
                                    onChangeValue(getSelectValues(val, matchWith))
                                } else {
                                    if (matchWith) {
                                        onChange(val?.value[matchWith])
                                        setV(val?.value[matchWith])
                                        onChangeValue(val?.value[matchWith])
                                    } else {
                                        onChange(val?.value)
                                        setV(val?.value)
                                        onChangeValue(val?.value)
                                    }
                                }
                            }}
                            additional={{
                                page: 1
                            }}
                            {
                            ...rest
                            }
                        />
                    )}
                />
            </>
        )
    } else {
        return (
            <>

                <Controller
                    control={control}
                    defaultValue={value}
                    name={name}
                    rules={rules}
                    render={({ field: { onChange, ref } }) => (
                        <SelectReact


                            ref={ref}
                            isMulti={isMulti}
                            placeholder={"select"}
                            name={name}
                            //theme={selectThemeColors}
                            className={classNames('react-select', { 'is-invalid': (error ?? errors[name]) })}
                            classNamePrefix='select'
                            isClearable={isClearable}
                            options={options}
                            components={components}
                            value={v ? makeSelectValues(options, v, isMulti) : makeSelectValues(options, value, isMulti)}
                            onChange={val => {
                                if (isMulti) {
                                    onChange(getSelectValues(val))
                                    setV(getSelectValues(val))
                                } else {
                                    onChange(val?.value)
                                    setV(val?.value)
                                }
                            }}
                            {
                            ...rest
                            }
                        />
                    )}
                />
            </>
        )
    }
}

export default Select