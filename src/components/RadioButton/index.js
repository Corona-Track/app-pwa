import React from 'react'
import './index.css'

export default function RadioButton(props) {
    const { label, value } = props
    return (
        <div>
            <label class="radio">{label}
                <input type="radio" name="radio" value={value} />
                <span class="checkmark"></span>
            </label>
        </div>
    )
}
