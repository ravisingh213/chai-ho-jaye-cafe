import classNames from 'classnames'
import React, { useState } from 'react'
import { MoreVertical } from 'react-feather'
import { Link } from 'react-router-dom'
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledButtonDropdown, UncontrolledTooltip } from 'reactstrap'
import { getUniqId } from '../../utility/Utils'
const DropDownMenu = ({ direction = "start", button = null, tag = "span", component = null, options = [], tooltip = null }) => {
    const [id] = useState(getUniqId("dropdown"))
    return (
        <>
            {tooltip ? <UncontrolledTooltip target={id}>
                {tooltip}
            </UncontrolledTooltip> : null}
            <UncontrolledButtonDropdown direction={direction}>
                {button} 
                {
                    button ? <DropdownToggle className='dropdown-toggle-split' id={id} outline color='primary' caret /> : <DropdownToggle
                        className={classNames('cursor-pointer')}
                        id={id}
                        tag={tag}>
                        {component ?? <MoreVertical />}
                    </DropdownToggle>}
                <DropdownMenu>
                    {
                        options?.map((o) => {
                            const IF = (o?.IF === undefined || o?.IF === null) ? true : o?.IF

                            if (o?.to) {
                                return (
                                    <>

                                        <Link className='dropdown-item' to={o?.to} key={o?.name} onClick={o?.onClick}>
                                            {o?.icon ? <><span className='me-1'>{o?.icon}</span>{o?.name}</> : o?.name}
                                        </Link>

                                    </>
                                )
                            } else {
                                return (
                                    <>
                                        <span role={"button"} className='dropdown-item' key={o?.name} onClick={o?.onClick}>
                                            {o?.icon ? <><span className='me-1'>{o?.icon}</span>{o?.name}</> : o?.name}
                                        </span>

                                    </>
                                )
                            }
                        })
                    }
                </DropdownMenu>
            </UncontrolledButtonDropdown>
        </>
    )
}

export default DropDownMenu