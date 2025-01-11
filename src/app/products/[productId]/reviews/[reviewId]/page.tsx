export default function reviewDetails({params}:{
    params: {
        productId:string,
        reviewId:string
    }
}){
    return (
        <>
          <div className="flex text-4xl font-semibold justify-center h-screen p-8">
            <h1>Review {params.reviewId} of Product {params.productId}</h1>
          </div>        
        </>
    )
}