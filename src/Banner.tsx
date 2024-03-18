import {ReactNode} from "react";

export default function Banner({children} : ReactNode, {className}: string ) {
   return (
       <div className={`main-info__banner ${className}`}>
           {children}
       </div>
   )
}