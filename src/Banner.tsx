export default function Banner({children, className}: string) {
   return (
       <div className={`main-info__banner ${className}`}>
           {children}
       </div>
   )
}