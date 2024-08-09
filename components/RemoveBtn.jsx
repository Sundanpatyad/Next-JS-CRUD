'use client'
import React from 'react'
import {HiOutlineTrash} from 'react-icons/hi'


const RemoveBtn = ({id}) => {

    const removeTopic = async() =>{
        const confirmed = confirm("Are You Sure You Want To Delete a Topic");
        
        if(confirmed){
            await fetch(`/api/topics?id=${id}`,{
                method: 'DELETE',
            })
        }
        
        
        }
  return (
    <button onClick={removeTopic} className="text-red-400 hover:text-red-500">
     <HiOutlineTrash size={24} />
    </button>
  )
}

export default RemoveBtn