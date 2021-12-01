import React,{useState,useEffect} from 'react'
import axios from 'axios'


export default function getPersonInformation() {
    const [data,setData] = setData([])

    useEffect(()=>{
        axios.post("/user")
        .then(res=>{
          setData(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    return (
        <div>
            
        </div>
    )
}
