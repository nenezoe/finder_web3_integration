import React from "react";

interface CheckBoxProps {
  checked?: any,
  label?: any,
  onChange: () => void,
}

const CheckBox: React.FC<CheckBoxProps> = (props) => {
  const {checked,label,onChange, ...rest} = props
    return(
        <div className="flex gap-1">
               <input type="checkbox" {...rest} />
               <label>{label}</label>
        </div>
    )
}

export default CheckBox