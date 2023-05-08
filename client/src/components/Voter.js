import React from 'react'
import VoterList from './VoterList'
import VoterRegister from './VoterRegister'

export default function Voter({state,account}) {
  return (
    <div>
       <div>
      <VoterRegister state={state} account={account}></VoterRegister>
      <VoterList state={state} account={account}></VoterList>
    </div>
    </div>
  )
}
