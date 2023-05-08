import Vote from "./Vote";

function ElectionCommision({state,account}) {


  async function votingTime(e){
    try {
      e.preventDefault();
  
    let {contract}=state;
    let start=document.querySelector("#start").value;
    let end=document.querySelector("#end").value;
    let tran=await contract.methods.voteTime(start,end).send({from:account,gas:480000});
          console.log(tran);
  } catch (error) {
      alert(error)
  }
  }

  return (
    <>
      <div>
        <form className="form" onSubmit={votingTime}>
          <label className="label2" htmlFor="start">
            Start Time:
          </label>
          <input className="innerBoxVote" type="text" id="start"></input>

          <label className="label2" htmlFor="end">
            End Time:
          </label>
          <input className="innerBoxVote" type="text" id="end"></input>

          <button className="regBtn" type="submit">
            Voting Start
          </button>
        </form>
      </div>
      <div className="space">
        <button className="emerBtn" onClick>
          Emergency
        </button>
        <button className="resBtn" onClick>
          Result
        </button>
      </div>
      <Vote state={state} account={account}/>
    </>
  );
}
export default ElectionCommision;
