import React from 'react'

const Button = ({text, bg_color, onClick, type, className}) => {
  return (
    <button type={type} onClick={onClick} className={bg_color == 'bg-black' ? `text-white rounded-[5px] px-8 py-3 bg-black text-[17px] ${className}` : bg_color == 'bg-btn' ? `text-white rounded-[5px] px-8 py-3 text-[17px] bg-[#C8815F] ${className}`  : `text-black rounded-[5px] px-8 py-3 text-[17px] bg-white ${className}` }>
        {text}
    </button>
  )
}

export default Button
