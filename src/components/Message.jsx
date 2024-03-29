import React from 'react'
import { footerText } from '../constants'
function Message() {
  return (
    <div>
      <div className='flex justify-center items-center flex-col p-[5rem]'>
        <div className=' max-w-[40rem] text-center'>
          {footerText.map((item, index) => (
            <p key={index} className={`${item.font} Reenie Beanie ${index == 0 ?
              'text--secondary sm:text-[3em] text-[2.4em]' :
              'text-[black] sm:text-[2em] text-[1.8em] '}`}>{item.content}</p>
          ))}

        </div>

      </div>
    </div>
  )
}

export default Message