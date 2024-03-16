export default function Banner(children: any, className: string) {
   return (
       <div className={`main-info__banner ${className}`}>
           {children}
       </div>
   )
}