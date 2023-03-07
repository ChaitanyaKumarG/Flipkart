import axios from "axios"

function Frsapp(){


  const getfrs = async ()=>{
        const frsdata = new FormData()
  const response = await axios.post("https://frs_react.deta",frsdata,{"Content-Type": "application/json"})


if(response){

    console.log(response)

}else{
    console.log("not ok")
}


}
getfrs()








    return(
<div>
    <h1></h1>
</div>
    )
}
export default Frsapp