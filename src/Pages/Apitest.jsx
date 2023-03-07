import { CircularProgress, LinearProgress, Rating } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Apitest(){

    const Getcourse = async ()=>{

       const  fetchdata = new FormData()

        const response = await axios.post("https://skillsuprise.com/get-courses.php",fetchdata,{'content-type':'multipart/form-data'})

        if(response){
            if(response.data){
                console.log(response.data)
                setcourses(response.data)
            }
          
            console.log("got response")
        }else{
            console.log("no data fetched")
        }
    }
    

    useEffect(()=>{
        Getcourse()
    },[])

    const [courses,setcourses]= useState(null)


    return(
        <div>



               {courses?<>

               <div className="d-flex flex-wrap container mt-5">
               
               {courses.map((data)=>( <>

                              <div className="shadow mb-3 p-2 col-lg-3">
                                <img src={data.course_cover_url} className="w-100" alt="" />
                                 <h3>{data.course_title}</h3>
                                 <h6>Price: {data.course_price}</h6>
                                 <p>Rating: {data.rating}</p> <Rating name="half-rating" readOnly value={data.rating} precision={0.5}/>
                                 <div className="flex">
                                 <Link to={'/buynow/'+data.course_url} className="btn bg-info"> buy now</Link>
                                 <Link className="btn bg-warning"> Course details</Link>
                                 </div>
                              </div>
                              
                                       </> ))} 
                                    
                </div>
                      </>:

               <> 
               <LinearProgress color="secondary"/>               
               </>}




        </div>
    )
}
export default Apitest