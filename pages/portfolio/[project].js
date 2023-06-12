import {useRouter }from "next/router";

function  PortfolioProjectPage(){
    const router = useRouter();
      
    console.log(router.pathname);
    console.log(router.query); //get value what is in dynamic path in route
    return (<div>
        <h2>The portofolio page</h2>
    </div>)
}

export default PortfolioProjectPage;











//placeholder 
//can be grt uddddddddddd