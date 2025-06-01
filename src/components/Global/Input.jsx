import React from 'react'

const Input = ({ titleName, type, onChange, eyeIcon }) => {
    return (
        <div>
            {titleName}
            <label>
                {iconName}
                <input type={type} onChange={onChange} />
                {eyeIcon}
            </label>
        </div>
    )
}

export default Input
