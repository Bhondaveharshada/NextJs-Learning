interface Params {
    productId:string ;
}
export default function ProductList({params}:{params:Params}){
    return (
        <>
        <div className="flex text-4xl font-semibold justify-center h-screen p-4">
           <h1> Details of product { params.productId }</h1>
        </div>
       </>
    )
   
}