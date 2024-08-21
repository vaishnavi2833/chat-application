import React from 'react'

const Gender = () => {
  return (
    <div className='flex pt-4 gap-10'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='text-white pr-3'>Male</span>
                <input type='checkbox' className='checkbox border-slate-900' />
            </label>
        </div>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='text-white pr-4'>Female</span>
                <input type='checkbox' className='checkbox border-slate-900' />
            </label>
        </div>
    </div>
  )
}

export default Gender