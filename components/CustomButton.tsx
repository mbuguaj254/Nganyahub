"use client";

import { CustomButtonProps } from '@/types';
import Image from 'next/image'


const CustomButton = ( {title, containerStyles, handleclick, btnType}: CustomButtonProps ) => {
  return (
    <div>
      <button
          disabled={false}
          type={btnType || "button"}
          className={`custom-btn ${containerStyles}`}
          onClick={handleclick}
          >
        <span className="{`flex-1`}">
          {title}
        </span>
      </button>
    </div>
  )
}

export default CustomButton