import React from 'react'
import ProposalTable from '../feature/proposals/ProposalTable'

function Proposals() {
  return (
    <div className='font-black text-ssecondary-700 text-xl mb-8'>
    <h1>
       لیست پروپوزال ها 
    </h1>
    <ProposalTable />
    </div>
  )
}

export default Proposals