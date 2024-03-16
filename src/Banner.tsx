export default function Banner({children, className}) {
   return (
       <div className={`main-info__banner ${className}`}>
           {children}
       </div>
   )
}