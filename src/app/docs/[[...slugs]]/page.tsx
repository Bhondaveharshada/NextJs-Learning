export default function Docs({
  params,
}: {
  params: {
    slugs: string[];
  };
}) {
    if(params.slugs?.length === 2){
        return (
            <h1>Viewing docs for feature {params.slugs[0]} and concept {params.slugs[1]}</h1>
        );
    }else if (params.slugs?.length === 1){
        return (
            <h1>Viewing docs for feature {params.slugs[0]}</h1>
        );
    }else if (params.slugs?.length === 3){
      return (
        <>
        <h1>Viewing doc for {params.slugs[2]} of {params.slugs[1]} of {params.slugs[0]}</h1>
        </>
      )
    }
      return (
        <>
          <div>
            <h1>Doc Home Page</h1>
          </div>
        </>
      );
  
}
