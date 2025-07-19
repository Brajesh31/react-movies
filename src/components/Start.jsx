import React from 'react'
import Button from './Button'

const Start = () => {
  return (
    <div className="mt-20 mb-5 py-4 w-screen start-page relative">
      <div className="max-container h-full flex justify-center py-7 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-1/2 items-center">
        <div className="size-full flex flex-col md:flex-row gap-5 items-center justify-between">
            <div>
                <p className="text-white text-2xl md:text-3xl font-semibold">
                  Start your free trial today!
                </p>
                <p className='text-gray-15 text-sm mt-2 max-w-5xl'>
                This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.
                </p>
            </div>
            <Button id="start-trail" title="Start Free Trail" />
        </div>
      </div>
    </div>
  )
}

export default Start
