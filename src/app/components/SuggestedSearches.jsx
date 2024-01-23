import React from 'react'

function SuggestedSearches() {
  return (
    <div className='flex flex-wrap justify-center gap-4 px-4 md:px-0 my-3'>
        <div className='infoText'>
            <div className='font-bold text-xs'>Plan a trip</div>
            <p className='text-mainColor text-xs truncate text-ellipsis'>to see the northern lights in Norway</p>
        </div>
        <div className='infoText'>
            <div className='font-bold text-xs'>Show me a code snippet</div>
            <p className='text-mainColor text-xs truncate text-ellipsis'>of a website's sticky header</p>
        </div>
        <div className='infoText'>
            <div className='font-bold text-xs'>Brainstorm names</div>
            <p className='text-mainColor text-xs truncate text-ellipsis'>for an orange cat we're adopting from the shelter</p>
        </div>
        <div className='infoText'>
            <div className='font-bold text-xs'>Give me ideas</div>
            <p className='text-mainColor text-xs truncate text-ellipsis'>about how to plan my New Years Resolution</p>
        </div>
    </div>
  )
}

export default SuggestedSearches