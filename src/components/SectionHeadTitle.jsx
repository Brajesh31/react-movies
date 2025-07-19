import React from 'react'

const SectionHeadTitle = ({ title ,description }) => {
  return (
    <div>
        <h2 className="text-white text-2xl pl-4 lg:text-3xl font-bold relative before:absolute before:h-full before:w-2  before:bg-red-10 before:left-0 before:rounded-sm group after:content-['#'] after:ml-5 after:opacity-0 hover:after:opacity-100 transition-all duration-300 after:transition-all after:duration-300 after:text-red-10">
            {title}
        </h2>
        <p className="text-gray-15 text-xs sm:text-sm lg:text-base mt-3 max-w-5xl">{description}</p>
    </div>
  )
}

export default SectionHeadTitle