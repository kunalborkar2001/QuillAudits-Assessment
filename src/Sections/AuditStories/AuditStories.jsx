import React from 'react'

const AuditStories = () => {
  return (
    <div className='w-full flex justify-center items-center flex-col text-center gap-5 my-20'>
      <h1 className='font-medium text-[2.5rem] text-[#0d3088]'>
        See how QuillAudits is a trusted partner in <br />
        1000+ Audit stories
      </h1>
      <button className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-5 py-3  bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[6px]  relative group transition duration-200 text-white hover:bg-purple-900">
          Request An Audit
        </div>
      </button>
    </div>
  )
}

export default AuditStories
