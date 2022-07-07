import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { Eye, HelpCircle, Info } from 'react-feather'
import { Controller } from 'react-hook-form'
import Flatpickr from 'react-flatpickr'
import { Input, InputGroup, InputGroupText, Label, UncontrolledTooltip } from 'reactstrap'
import Cleave from 'cleave.js/react'
import { formatDate, getUniqId } from '../../utility/Utils'
import Select from '../select'
import "flatpickr/dist/flatpickr.css"
const FormGroupCustom = ({
    defaultChecked = false,
    noLabel = false,
    noGroup = false,
    message = null,
    // classNameInput = "",
    classNameLabel = "",
    feedback = null,
    options = [],
    prepend = null,
    append = null,
    rules = {},
    components,
    control,
    isMulti = false,
    setValue = () => { },
    loadOptions = () => { },
    onChangeValue = () => { },
    name,
    label = null,
    value = null,
    values = null,
    type,
    errors = [],
    error = null,
    // innerRef,
    className = "",
    id = null,
    // tooltip = null,
    maskOptions = '',
    dateFormat = "YYYY-MM-DD",
    refreshInput = false,
    ...extra
}) => {
    const [passType, setPassType] = useState('password')
    const [key, setId] = useState(getUniqId("input-field"))
    // const [editorValue, setEditorValue] = useState(null)
    const [refresh, setRefresh] = useState(null)
    // const [kid, setKid] = useState(getUniqId("i"))
    useEffect(() => {
        setId(getUniqId("input-field-updated"))
    }, [refreshInput])

    useEffect(() => {
        setRefresh(null)
    }, [key])

    useEffect(() => {
        setRefresh(value ? value : values ? values[name] : null)
    }, [value, values])

    // useEffect(() => {
    //     if (type === 'editor') {
    //         setEditorValue(EditorState.createWithContent(
    //             ContentState.createFromBlockArray(
    //                 convertFromHTML((value ? value : values ? values[name] : "<p></p>"))
    //             )))
    //     }
    // }, [type, value, values])

    const inputController = () => {
        const Comp = (type === "mask" ? Cleave : Input)
        return (
            <>

                <Controller
                    key={`${key}-controller`}
                    control={control}
                    defaultValue={value ? value : values ? values[name] : ''}
                    name={name}
                    rules={rules}
                    render={({ field: { onChange, name, ref } }) => (
                        <>
                            <Comp
                                options={maskOptions}
                                key={key}
                                defaultValue={value ? value : values ? values[name] : ''}
                                placeholder={label}
                                type={type === "password" ? passType : type}
                                name={name}
                                onChange={(e) => {
                                    onChange(e?.target?.value)
                                }}
                                invalid={error ?? errors?.hasOwnProperty(name)}
                                {
                                ...extra
                                }
                                className='form-control'
                                innerRef={ref}
                                id={id ? id : `input-${name}`}
                            />

                        </>
                    )}
                />
            </>
        )
    }
    const inputCheckboxController = () => {
        return (
            <>

                <Controller
                    key={`${key}-controller`}
                    control={control}
                    defaultValue={value ? value : values ? values[name] : ''}
                    name={name}
                    rules={rules}
                    render={({ field: { onChange, ref } }) => (
                        <Input
                            key={key}
                            name={name}
                            value={value ? value : values ? values[name] : ''}
                            invalid={error ?? errors?.hasOwnProperty(name)}
                            defaultChecked={(value ? value : values ? values[name] : '') === 1}
                            onChange={(e) => {
                                onChangeValue(e.target.checked)
                                if (e.target.checked) {
                                    onChange(1)
                                } else {
                                    onChange(0)
                                }
                            }}
                            type={type}
                            {...extra}
                            innerRef={ref}
                            id={id ? id : `${name}-${type}-${key}`}
                        />

                    )}
                />
            </>
        )
    }
    const inputRadioController = () => {
        return (
            <>

                <Controller
                    key={`${key}-controller`}
                    control={control}
                    defaultValue={value ? value : values ? values[name] : ''}
                    name={name}
                    rules={rules}
                    render={({ field: { onChange, ref } }) => (
                        <Input
                            key={key}
                            name={name}
                            value={(value ? value : values ? values[name] : '')}
                            invalid={error ?? errors?.hasOwnProperty(name)}
                            defaultChecked={defaultChecked}
                            onChange={(e) => {
                                onChange(e.target.value)
                                setValue(name, e.target.value)
                            }}
                            type={type}
                            {...extra}
                            innerRef={ref}
                            id={id ? id : `${name}-${type}-${key}`}
                        />

                    )}
                />
            </>
        )
    }
    const selectController = () => {
        return (
            <Select


                loadOptions={loadOptions}
                control={control}
                value={value ? value : values ? values[name] : ''}
                options={options}
                errors={errors}
                isMulti={isMulti}
                rules={{ ...rules }}
                // matchWith={100}
                components={components}
                name={name}
                id={`input-${name}-tooltip`}
                {
                ...extra
                }
            />
        )
    }
    // const textEditor = () => {
    //     return (
    //         <Controller
    //             key={`${key}-controller`}
    //             control={control}
    //             defaultValue={value ? value : values ? values[name] : ''}
    //             name={name}
    //             rules={rules}
    //             render={({ field: { onChange, name, ref } }) => (
    //                 <div className={className}>
    //                     <Editor wrapperClassName={error || errors?.hasOwnProperty(name) ? "invalid" : ""} editorState={editorValue} onEditorStateChange={data => {
    //                         setEditorValue(data)
    //                         onChange(draftToHtml(convertToRaw(data?.getCurrentContent())))
    //                     }} />
    //                 </div>
    //             )}
    //         />
    //     )
    // }

    const dateController = () => {
        return (
            <Controller
                key={`${key}-controller`}
                control={control}
                defaultValue={value ? value : values ? values[name] : ''}
                name={name}
                rules={rules}
                render={({ field: { onChange, ref } }) => (
                    <Flatpickr
                        className={classNames("form-control flatpickr-input", { "is-invalid": errors?.hasOwnProperty(name), "border-end-0": refresh !== null })}
                        key={key}
                        options={{
                            time_24hr: true,
                            ...options
                        }}
                        value={value ? value : values ? values[name] : ''}
                        placeholder={label}
                        name={name}
                        onChange={(e) => {
                            setRefresh(e[0])
                            if (dateFormat) {
                                onChange(formatDate(e[0], dateFormat))
                            } else {
                                onChange(e[0])
                            }
                        }}
                        invalid={error ?? errors?.hasOwnProperty(name)}
                        {
                        ...extra
                        }
                        innerRef={ref}
                        id={id ? id : `input-${name}`}
                    />
                )}
            />
        )
    }

    if (type === "select") {
        if (control === undefined) {
            console.log('Control Not Found!! Please pass the control form React Hook Form')
            throw new Error('Control Not Found!! Please pass the control form React Hook Form')
        }
        return (
            <>
                {noLabel ? null : <Label for={name}>{label} {" "}
                    {message ? <>

                        <HelpCircle className='fw-bold' style={{ marginTop: "-2px" }} size={20} id={`help-tooltip-message-${name}`} />
                    </> : null}
                </Label>}
                {
                    (errors[name]?.message) ? <UncontrolledTooltip target={`input-${name}-tooltip`}>
                        {errors[name]?.message ?? "sa"}
                    </UncontrolledTooltip> : feedback ? <UncontrolledTooltip target={`input-${name}-tooltip`}>
                        {feedback}
                    </UncontrolledTooltip> : null
                }
                {

                    noGroup ? selectController() : <>
                        <InputGroup className={classNames(className)}>
                            {
                                prepend ?? ''
                            }
                            <div className='flex-1'>
                                {selectController()}
                            </div>

                            {
                                noLabel && message ? <InputGroupText className='cursor-pointer '>
                                    <Info size={500} id={`help-tooltip-message-${name}`} />
                                    <UncontrolledTooltip target={`help-tooltip-message-${name}`}>
                                        {message}
                                    </UncontrolledTooltip>
                                </InputGroupText> : null}
                            {
                                append ?? ''
                            }
                        </InputGroup>

                    </>
                }

            </>
        )
    } else if (type === "checkbox" || type === "radio") {
        if (control === undefined) {
            console.log('Control Not Found!! Please pass the control form React Hook Form')
            throw new Error('Control Not Found!! Please pass the control form React Hook Form')
        }
        return (
            <>
                {
                    noGroup ? (type === "radio" ? inputRadioController() : inputCheckboxController()) : <div className={`form-check ${className}`}>
                        {noLabel ? null : <>
                            <Label style={{ marginBottom: 2, cursor: "pointer" }} className={classNameLabel} for={id ? id : `${name}-${type}-${key}`}>
                                {label}
                            </Label>
                            {(type === "radio" ? inputRadioController() : inputCheckboxController())}
                        </>}
                    </div>
                }

            </>
        )
    } else if (type === "date") {
        if (control === undefined) {
            console.log('Control Not Found!! Please pass the control form React Hook Form')
            throw new Error('Control Not Found!! Please pass the control form React Hook Form')
        }
        return (
            <>
                {noLabel ? null : <Label for={name}>{label} {" "}
                    {message ? <>
                        <UncontrolledTooltip target={`help-tooltip-message-${name}`}>
                            {message}
                        </UncontrolledTooltip>
                        <HelpCircle className='fw-bold' style={{ marginTop: "-2px" }} size={20} id={`help-tooltip-message-${name}`} />
                    </> : null}
                </Label>}
                {
                    noGroup ? dateController() : <> <InputGroup className={classNames(className)}>
                        {
                            prepend ?? ''
                        }
                        <div className='flex-1'>
                            {dateController()}
                        </div>

                        {
                            errors[name] && feedback ? <UncontrolledTooltip target={`input-${name}-tooltip`}>
                                {feedback}
                            </UncontrolledTooltip> : null}
                        {
                            noLabel && message ? <InputGroupText className='cursor-pointer'>
                                <Info size={20} id={`help-tooltip-message-${name}`} />
                                <UncontrolledTooltip target={`help-tooltip-message-${name}`}>
                                    {message}
                                </UncontrolledTooltip>
                            </InputGroupText> : null}
                        {/* {refresh !== null?<UncontrolledTooltip target={`clear-tooltip-message-${kid}`}>
                                {FM("clear")}
                            </UncontrolledTooltip>
                            <InputGroupText id={`clear-tooltip-message-${kid}`} className='border-start-0 cursor-pointer' onClick={() => { setId(getUniqId("date-cleated")) }}>
                                <X size={16} />
                            </InputGroupText>:null} */}


                        {
                            append ?? ''
                        }
                    </InputGroup>
                    </>

                }
                {/* {messageType === "default" && message ? <FormText>
                    {message}
                </FormText> : null}
                {feedbackType === "default" && feedback && errors[name] ? <FormFeedback>
                    {errors[name]?.message !== "" ? errors[name]?.message : feedback}
                </FormFeedback> : null} */}
            </>
        )
    } else if (type === "editor") {
        if (control === undefined) {
            console.log('Control Not Found!! Please pass the control form React Hook Form')
            throw new Error('Control Not Found!! Please pass the control form React Hook Form')
        }
        return (
            <>
                {noLabel ? null : <Label for={name}>{label} {" "}
                    {message ? <>
                        <UncontrolledTooltip target={`help-tooltip-message-${name}`}>
                            {message}
                        </UncontrolledTooltip>
                        <HelpCircle className='fw-bold' style={{ marginTop: "-2px" }} size={20} id={`help-tooltip-message-${name}`} />
                    </> : null}
                </Label>}
                {
                    (errors[name]?.message) ? <UncontrolledTooltip target={`input-${name}-tooltip`}>
                        {errors[name]?.message}
                    </UncontrolledTooltip> : feedback ? <UncontrolledTooltip target={`input-${name}-tooltip`}>
                        {feedback}
                    </UncontrolledTooltip> : null
                }
                {

                }
                {/* {messageType === "default" && message ? <FormText>
                    {message}
                </FormText> : null}
                {feedbackType === "default" && feedback && errors[name] ? <FormFeedback>
                    {errors[name]?.message !== "" ? errors[name]?.message : feedback}
                </FormFeedback> : null} */}
            </>
        )
    } else {
        if (control === undefined) {
            console.log('Control Not Found!! Please pass the control form React Hook Form')
            throw new Error('Control Not Found!! Please pass the control form React Hook Form')
        }
        return (
            <>
                {noLabel ? null : <Label for={name}>{label} {" "}
                    {message ? <>
                        <UncontrolledTooltip target={`help-tooltip-message-${name}`}>
                            {message}
                        </UncontrolledTooltip>
                        <HelpCircle className='fw-bold' style={{ marginTop: "-2px" }} size={20} id={`help-tooltip-message-${name}`} />
                    </> : null}
                </Label>}
                {
                    (errors[name]?.message) ? <UncontrolledTooltip target={`input-${name}-tooltip`}>
                        {errors[name]?.message}
                    </UncontrolledTooltip> : feedback ? <UncontrolledTooltip target={`input-${name}-tooltip`}>
                        {feedback}
                    </UncontrolledTooltip> : null
                }
                {
                    noGroup ? inputController() : <InputGroup className={classNames(className)}>
                        {
                            prepend ?? ''
                        }

                        {inputController()}

                        {
                            noLabel && message ? <InputGroupText className='cursor-pointer'>
                                <Info size={20} id={`help-tooltip-message-${name}`} />
                                <UncontrolledTooltip target={`help-tooltip-message-${name}`}>
                                    {message}
                                </UncontrolledTooltip>
                            </InputGroupText> : null}
                        {
                            append ?? ''
                        }
                        {
                            !append && type === "password" ? <InputGroupText className={classNames("cursor-pointer", { "text-primary": (passType === "text") })} onClick={() => {
                                setPassType((passType === "password" ? "text" : "password"))
                            }}>
                                <Eye size={20} />
                            </InputGroupText> : null
                        }
                    </InputGroup>

                }
                {/* {messageType === "default" && message ? <FormText>
                    {message}
                </FormText> : null}
                {feedbackType === "default" && feedback && errors[name] ? <FormFeedback>
                    {errors[name]?.message !== "" ? errors[name]?.message : feedback}
                </FormFeedback> : null} */}
            </>
        )
    }
}
export default FormGroupCustom