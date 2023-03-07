import axios from "axios"
import { useEffect, useState } from "react"

function Apitrail() {
    const [uname, setuname] = useState("chay")
    var [pnum, setpnum] = useState("9550557555")

    const getanime = async () => {

        const formdata = new FormData()

        const response = await axios.post("https://rnitfrs.ap.gov.in", formdata, { "Content-Type": "application/json" })

        if (response) {
            if (response.data) {

                setanime(response.data)
            }
            console.log(uname)
            console.log(response)
        } else {
            console.log("NO response")
        }
    }

    useEffect(() => {

        getanime()

    }, [])


    const [anime, setanime] = useState(null)


    return (

        <div>
            <h1>Thi is Api trail</h1>

            {anime ? <>

                <div className="d-flex flex-wrap container mt-5">

                    {anime.map((data) => (<>
                       
                       
                        <h1>
                            {data.name}
                        </h1>


                    </>  ))}

                    
                </div>
            </> :
                <>

                </>}



        </div>
    )
}
export default Apitrail