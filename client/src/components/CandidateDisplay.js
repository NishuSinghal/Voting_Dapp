import { useEffect, useState } from "react";

function CandidateDisplay({state,account}) {

  const [list, setlist] = useState()

  useEffect(() => {
    let {contract}=state;
   async function candidateDisplay(){
      const list=await contract.methods.candidateList().call();
      setlist(list)
   }
   contract && candidateDisplay()
  }, [state])
  
  return <>
    <table>

      <tbody>
  {list && list.map((e)=>{
        return <tr>
          <td>{e.name}</td>
          <td>{e.age}</td>
          <td>{e.gender}</td>
          <td>{e.party}</td>
        </tr>
  })}
      </tbody>
    </table>
  </>;
}
export default CandidateDisplay;
