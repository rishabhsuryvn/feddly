"use client"
import { Clipboard } from 'lucide-react'
import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  
const CopyButton = ({text}:{
    text: string
}) => {
    const copyToClipboard = (text:string) => {
        navigator.clipboard.writeText(text).then(()=>{
            alert ("copied to clipboard")
        })
    }
     
  return (
    <TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
    <button onClick={()=>copyToClipboard(text)} className='text-slate-50 absolute p-2 right-0 top-0 '><Clipboard/></button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Copy code</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

  )
}

export default CopyButton
