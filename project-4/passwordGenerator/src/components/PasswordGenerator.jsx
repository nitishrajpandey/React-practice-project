// import all hooks

import { useState,useCallback,useEffect,useRef} from "react"


function PasswordGenerator() {


     // all useState hook to change the state value in UI  


  const [length,setLength]=useState(4);

  const [numberAllowed,setNumberAllowed]=useState(false);

  const [charAllowed,setCharAllowed]=useState(false);

  const [password ,setPassword]=useState("")
 


  // useref  hook 

  const passwordRef=useRef(null);


  //function to create the password
  // usecallback hook   are use to chache the function betwwen re -rendring 

  const PasswordGenerator= useCallback(()=>{

    let pass=""
    let str="GHIJKVWXYZabcdefghABCDEFijklmnopqrstuLMNOPQRSTUvwxyz"

    if (numberAllowed) {
      str+="0123456789"
    }
    if (charAllowed) {
      str+="!@#$%^&*()_-+={}[]|:;<>,.?/~`"
    }

    for (let index = 1; index <=length; index++) {
      let char=Math.floor(Math.random()*str.length+1)


      pass+=str.charAt(char);
    } 

    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword]);



  // create a function to copy password

 const copyPasswordToClipBoard=useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,20)
  window.navigator.clipboard.writeText(password)
 },[password])



  // using useEffect hook (it help to regenerate the function when to do some change with given dependency)

  useEffect(()=>{
    PasswordGenerator()
  },[length,numberAllowed,charAllowed,PasswordGenerator])




  return (
    <>
    
    <h1 className=" capitalize  font-bold text-4xl sm:text-5xl text-center text-purple-400 pt-10">password generator</h1>

    <div className="mx-10 sm:mx-auto flex flex-col justify-center max-w-2xl md:max-w-xl m-auto text-orange-500 bg-gray-700 px-4 md:px-10 mt-14 shadow-lg rounded-2xl py-14">
      
    <div className="flex rounded-lg outline-none overflow-hidden shadow mb-6 ">
      <input 
      type="text"
      value={password}
      className="outlin-none w-full font-semibold md:text-2xl  py-2 px-3"
      placeholder="Password"
      readOnly
      ref={passwordRef}
      />

      <button onClick={copyPasswordToClipBoard}
      className="bg-blue-700 text-white px-4 py-2 font-semibold outline-none shrink-0 hover:bg-[#212155] hover:text-[#8484df] hover:font-bold duration-300">
        copy
      </button>

    </div>

    <div className="flex flex-col gap-y-5 sm:flex-row justify-evenly">
      <div className="flex items-center gap-2 font-bold text-lg">
        
        <input id="range"
         type="range"
         min={6}
         max={100}
         value={length}
        className=" cursor-pointer"
        onChange={(e)=>{setLength(e.target.value)}}

          />
          <label htmlFor="range"> Lable : {length}</label>
      </div>


      <div className="flex items-center gap-2 font-bold text-lg">
        <input  
        type="checkbox"
        id="numbercheck"
        defaultChecked={numberAllowed}
        onChange={()=>{setNumberAllowed(prev=>!prev)}}

        />
        <label htmlFor="numbercheck">Numbers</label>
      </div>
      <div className="flex items-center gap-2 font-bold text-lg">
        <input  
        type="checkbox"
        id="characters"
        defaultChecked={charAllowed}
        onChange={()=>{setCharAllowed(prev=>!prev)}}

        />
        <label htmlFor="characters">Characters</label>
      </div>
    </div>


    </div>


    </>
  )
}

export default PasswordGenerator