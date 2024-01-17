import React from 'react'

const MessageTextArea = () => {
  return (
    <textarea id="message" name='message' placeholder='Message'  rows="6" cols="52" required className='text-[14px] w-[100%] p-4 bg-transparent border border-[#bdb5b5] rounded-md' />
  )
}

export default MessageTextArea