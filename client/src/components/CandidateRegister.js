function Candidate({state,account}) {

  async function registration(e){
    e.preventDefault();
    try {
  
    let {contract}=state;
    let name=document.querySelector("#name").value;
    let party=document.querySelector("#party").value;
    let age=document.querySelector("#age").value;
    let gender=document.querySelector("#gender").value;
    let tran=await contract.methods.candidateRegister(name,party,age,gender).send({from:account,gas:480000});
          console.log(tran);
  } catch (error) {
      alert(error)
  }
  }
  return (
    <div>
      <form className="form" onSubmit={registration}>
        <label className="label1" htmlFor="name">
          Name:
        </label>
        <input className="innerBoxCand" type="text" id="name"></input>

        <label className="label1" htmlFor="party">
          Party:
        </label>
        <input className="innerBoxCand" type="text" id="party"></input>

        <label className="label1" htmlFor="age">
          Age:
        </label>
        <input className="innerBoxCand" type="text" id="age"></input>

        <label className="label1" htmlFor="gender">
          Gender:
        </label>
        <input className="innerBoxCand" type="text" id="gender"></input>

        <button className="regBtn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
export default Candidate;
