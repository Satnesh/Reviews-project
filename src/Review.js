import React,{useState} from 'react'
import {Button} from 'reactstrap'

import  Data from './Data'
import {FaChevronCircleLeft,FaChevronCircleRight,FaQuoteRight} from 'react-icons/fa'

function Review() {
    const[index,setIndex]=useState(0);
    const{name,job,image,text}=Data[index];

    const prev=()=>{
        setIndex((index)=>{
          const newIndex=index -1;
          return check(newIndex);
        })

    }
    const next=()=>{
        setIndex((index)=>{
           const newIndex=index +1
           return check(newIndex)
        })
    }

    const check=(number)=>{
      if(number > Data.length -1 ){
          return 0
      }

      if(number < 0){
          return Data.length -1
      }
      return number;
    }

    const random=()=>{
        let randomNumber=Math.floor(Math.random() * Data.length);
        if(randomNumber ===index){
            randomNumber= index +1;
        }
        console.log(check(randomNumber))
       setIndex(check(randomNumber));
    }

    
    return (
        <div>
            <h2>Review</h2>
            <img src={image} alt={name}/>
            <span className="fa"><FaQuoteRight/></span>


            <div>
                <h4>{name}</h4>
                <p>{job}</p>
                <p>{text}</p>
                <Button color="primary" onClick={prev} ><FaChevronCircleLeft/></Button>
                <Button color="primary" onClick={next}  ><FaChevronCircleRight/></Button>
                
            </div>
            <br></br>
            <Button color="success" onClick={random}>Surprise Me</Button>
            </div>
           

            
    )
}

export default Review


const record =()=>{
    const randomNumber=Math.floor(Math.random() * Data.length)
}
