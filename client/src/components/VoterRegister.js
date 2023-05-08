function VoterRegister({state,account}) {
  async function voterRegistration(e){
    e.preventDefault();
    try {
  
    let {contract}=state;
    let name=document.querySelector("#name").value;
    let age=document.querySelector("#age").value;
    let gender=document.querySelector("#gender").value;
    let tran=await contract.methods.voterRegister(name,age,gender).send({from:account,gas:480000});
          console.log(tran);
  } catch (error) {
      alert(error)
  }
  }
  return (
    <div>
      <div className="btnContainer">
        <form className="form" onSubmit={voterRegistration}>
          <label className="label2" htmlFor="name">
            Name:
          </label>
          <input className="innerBoxVote" type="text" id="name"></input>

          <label className="label2" htmlFor="age">
            Age:
          </label>
          <input className="innerBoxVote" type="text" id="age"></input>

          <label className="label2" htmlFor="gender">
            Gender:
          </label>
          <input className="innerBoxVote" type="text" id="gender"></input>

          <button className="regBtn" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
export default VoterRegister;
