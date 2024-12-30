import React from 'react'

function WorkItem({year_started, year_completed, employer, title, details}) {
    return (
      <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
        <li className="mb-10 ml-4 ">
          <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
          <p className="flex flex-wrap gap-4 flex-row items center justify-start text-sx md:text-sm">
            <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md ">
              {year_started}
            </span>
            <p className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
              /
            </p>
            <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md ">
              
              {year_completed}
            </span>
            <span className='text-lg font-semibold text-[#001b5e] '>{employer}</span>
            <span className='my-1 text-sm font-none text-stone-400'>{title}</span>
          </p>
          <p className='my-2 text-base font-normal text-stone-400'>
            {details}
          </p>
        </li>
      </ol>
    );
}

export default WorkItem
