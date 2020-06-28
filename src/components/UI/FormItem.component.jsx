import React from 'react'

const FormItem = ({labelName, formItemName, input}) => {
    return (
        <div className="form-item mb-3">
            <label
                htmlFor={formItemName}
                className="block white-text mb-1">
                {labelName}
            </label>
            {input}
        </div>
    )
}

export default FormItem