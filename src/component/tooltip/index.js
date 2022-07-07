import React, {  useState } from 'react'
import { UncontrolledTooltip } from 'reactstrap'
import { getUniqId } from '../../utility/Utils'
const BsTooltip = ({ Tag = "span", title, children, placement = "top", ...rest }) => {
    const [id, setId] = useState(getUniqId("tooltip"))
    console.log(setId)

    if (isValid(title)) {
        return (
            <>
                <UncontrolledTooltip placement={placement} target={id}>
                    {title}
                </UncontrolledTooltip>
                <Tag id={id} {...rest}>
                    {children}
                </Tag>
            </>
        )
    } else {
        return <Tag id={id} {...rest}>
            {children}
        </Tag>
    }
}

export default BsTooltip