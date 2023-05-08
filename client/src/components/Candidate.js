import React from 'react'
import CandidateRegister from './CandidateRegister';
import CandidateDisplay from './CandidateDisplay';

export default function Candidate({state,account}) {
  return (
    <div>
      <CandidateRegister state={state} account={account}></CandidateRegister>
      <CandidateDisplay state={state} account={account}></CandidateDisplay>
    </div>
  )
}
