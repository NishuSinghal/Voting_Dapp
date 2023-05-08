import { useEffect,useState } from "react";

function Winner({state}) {
const [status, setstatus] = useState("Not connected")

useEffect(() => {
  let {contract}=state;
  async function status(){
    let st=await contract.methods.winner().call();
    if(st!="0x0000000000000000000000000000000000000000"){

      setstatus(st)
    }
    console.log(st);
  }
  contract && status()
}, [state])


  return <div className="win">Winner is : {status}</div>;

}
export default Winner;
