import { useEffect, useState } from "react";

function VoterList({state,account}) {
  
const [list, setlist] = useState()

useEffect(() => {
  let { contract } = state;
  async function votersDisplay() {
    const list = await contract.methods.voterList().call();
    setlist(list)
    console.log(list);
  }
  contract && votersDisplay()
}, [state])
  return <>
    <table>

      <tbody>
        {list && list.map((e) => {
          return <tr>
            <td>{e.name}</td>
            <td>{e.age}</td>
            <td>{e.gender}</td>
          </tr>
        })}
      </tbody>
    </table></>;
}
export default VoterList;
