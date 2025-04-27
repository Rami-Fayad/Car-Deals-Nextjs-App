'use client'

import Image from 'next/image'
import { ButtonProps } from "@/props"

const CustomButton = ({title, containerStyles, handleClick, btnType, rightIcon ,textStyles}: ButtonProps) => {
  return (
    <button
    disabled={false}
    type={btnType}

    className={`custom-btn ${containerStyles} `}
    onClick={handleClick}>
    <span className={`flex-1 ${textStyles}`}>{title}</span>
   
     {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          src={rightIcon}
          alt="arrow_left"
          fill
          className="object-contain"
        />
      </div>
    )}
    </button>
  )
}

export default CustomButton
