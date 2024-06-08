import Link from "next/link";
import React, { useEffect, ComponentType, Component } from "react"
import { classNames } from "./shared/Utils";
import { useState } from "react";
import { useRouter } from "next/router";
import { DynamicOptions } from "next/dynamic";
import { Loader } from "next/dynamic";
import dynamic from 'next/dynamic'
import { Button } from "./shared/Button";



// import { Suspense } from 'react'

// const DynamicHeader = dynamic(() => import('../components/header'), {
//   suspense: true,
// })



export interface iStep{
  title:string,
  key: string,
  component?: () => ComponentType | JSX.Element
}

const Stepper = ({steps}) => {



  // const {
  //   query: { stepKey }
  // } = router

//   const getDynamicComponent = (c) => dynamic<TabComponent>(() => import(`../../components/settings/${c}`), {
//     ssr: false,
//     loading: () => <p>Loading...</p>,
//   });
  
//   type AddItem = {
//     hideModal: (val: Boolean) => void
//   };
//   const getDynamicAddComponent = (c) => dynamic<AddItem>(() => import(`../../components/settings/${c}/add`), {
//     ssr: false,
//     loading: () => <p>Loading...</p>,
//   });

  // let selectedKey = stepitem ? stepitem : "fiscalyear"
 

  // let selected = steps.filter(elem => elem.key === selectedKey)
  // let selStep =  selected.length >= 0 ? selected[0] : steps[0]
  const [stepSelected, setStepSelected] = useState(steps[0])

  const [showAddForm, setShowAddForm] = useState(false)
  
  // useEffect(()=>{
  //   setStepSelected(selStep);
  // }, [selectedKey])

  const onBack = () => {
    let nextIndex = 0;
    steps.forEach((item,index) => {
      if(item.key == stepSelected.key){
        nextIndex = index
      }
    })
    nextIndex = nextIndex - 1
    if(nextIndex >= 0) {
      setStepSelected(steps[nextIndex])
    }
  }

  const onNext = () => {
    let nextIndex = 0;
    steps.forEach((item,index) => {
      if(item.key == stepSelected.key){
        nextIndex = index
      }
    })
    nextIndex = nextIndex + 1
    if(nextIndex <= steps.length - 1) {
      setStepSelected(steps[nextIndex])
    }
  }
// const select = (step:iTab) =>{
//     setStepSelected(step)
// }
//   const DynamicComponent = getDynamicComponent(stepSelected.key);
//   const AddItemForm = getDynamicAddComponent(stepSelected.key)
 
const Component = stepSelected.component ? stepSelected.component() : Notfound
return(
  <>
    <div className="bg-white">
    <nav className="flex justify-between">
      <div className="flex flex-col sm:flex-row">
      {
        steps.map((step) => {
           const clsName = step.key == stepSelected.key ? "border-step-selected text-step-selected border-b-2 font-medium" : "text-step-noraml"
          return (<Step key={step.key} title={step.title} stepKey={step.key} className = {clsName}/>)
        })
      }
      </div>
      <Button onClick = {()=>setShowAddForm(true)} >Add {stepSelected.key}</Button>
    </nav>
    </div>
    <Component />
    <div className="flex justify-between"> <Button onClick={onBack}>Back</Button>  <Button onClick={onNext}>Next</Button></div>
    {/* {showAddForm && <AddItemForm  hideModal={(val)=>setShowAddForm(!val)} />} */}
  </>
)};

const Step = ({className="", title, stepKey}) =>{

  return (
    <>
    <Link href={{ pathname: `/settings/${stepKey}`}}>
    <button className={classNames("block px-6 py-4 hover:text-step-selected focus:outline-none", className)} >
    {title}
    </button>   
    </Link>
    </>
  )
} 

const Notfound = () =>{
    return <h1> Not found </h1>
}

export default Stepper;
