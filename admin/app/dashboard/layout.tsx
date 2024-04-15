"use client"

import Navbar from "@/components/system/navigation/navbar"
import Sidebar from "@/components/system/navigation/sidebar"
import { useState } from "react"
import UserSession from "@/components/system/session"




export default function StudentLayout({children}:{children:JSX.Element}) {
  const [open,setOpen]=useState(false)
  return (
    <main className="flex h-screen flex-col ">
      <UserSession/>
      <div className="sm:hidden">
        <Navbar open={open} setOpen={setOpen}/>
      </div>
      <div className="w-full h-full flex ">
        <div className={`w-60  absolute top-0 transition-all duration-500 ease-in-out z-50 ${open?'left-[0%]':'max-sm:left-[-100%]'} max-sm:h-screen sm:relative`}>
          <Sidebar setOpen={setOpen} open={open}/>
        </div>
        <div className="sm:w-[calc(100%-15rem)] w-full p-1 max-sm:p-0 max-sm:h-[calc(100vh-60px)]">
            <div className="w-full h-full rounded-xl max-sm:rounded-none bg-secondary dark:bg-slate-800 dark:border-border px-2 max-sm:p-0 overflow-hidden pb-2 overflow-y-scroll">
              <div className=" h-auto rounded-xl flex flex-col justify-start items-start space-y-2 md:flex  ">
                {children}
              </div>
            </div>
        </div>        
      </div>
    </main>
  )
}
