import { Carousel, CarouselItem } from "react-bootstrap"


function HomePage(){


    return(

         <div className="home">
       
    

       <Carousel style={{height:"300px"}} interval={10} indicators={false} >

<CarouselItem className="w-100">
    <img style={{height:"300px"}} className="w-100" 
    src="https://rukminim1.flixcart.com/fk-p-flap/50/50/image/67e7491bb6947bc7.jpg?q=50" alt="" />
</CarouselItem>

<CarouselItem className="w-100">
    <img style={{height:"300px"}} className="w-100" 
    src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/919f02df87f24c5f.jpg?q=50" alt="" />
</CarouselItem>

<CarouselItem className="w-100">
    <img style={{height:"300px"}} className="w-100" 
    src="https://rukminim1.flixcart.com/fk-p-flap/50/50/image/67e7491bb6947bc7.jpg?q=50" alt="" />
</CarouselItem>
</Carousel>

       </div>
       
       
    )
}

export default HomePage
