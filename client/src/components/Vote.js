import {useEffect,useState} from 'react'

function Vote({state,account}) {

  const [status, setstatus] = useState()
  
  async function votes(e){
    try {
      e.preventDefault();
  
    let {contract}=state;
    let voterId=document.querySelector("#voterId").value;
    let candidateId=document.querySelector("#candidateId").value;
    let tran=await contract.methods.vote(voterId,candidateId).send({from:account,gas:480000});
          console.log(tran);
  } catch (error) {
      alert(error)
  }
  }

  useEffect(() => {
    let {contract}=state;
    async function status(){
      let st=await contract.methods.votingStatus().call();
      setstatus(st)
      console.log(st);
    }
    contract && status()
  }, [state])
  

  return (
    <div>
      <form className="form" onSubmit={votes}>
        <p className="status">Voting Status: {status}</p>
        <label className="label2" htmlFor="voterId">
          VoterId:
        </label>
        <input className="innerBoxVote" type="text" id="voterId"></input>

        <label className="label2" htmlFor="candidateId">
          Candidate Id:
        </label>
        <input className="innerBoxVote" type="text" id="candidateId"></input>
        <button className="regBtn" type="submit">
          Vote
        </button>
      </form>
    </div>
  );
}
export default Vote;
