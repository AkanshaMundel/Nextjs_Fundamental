import {useRouter} from 'next/router';




function ClientProjectPage(){

    const router = useRouter();
    console.log(router);
   

    // navigate throgh programmatically , kind to link the pages
    //fun replace push also we send obj instead of path 
    function loadHandlerFun(){
        router.push('/clients/max/projextA');
        router.push({
            pathname:'/clients/[id]/[clientprojectid]',
            query:{id:'max ', clientprojectid:'projecta'}
        });
    }
    return (
        <div>
            <h2>
                The project of a given client 
            </h2>
            <button onClick={loadHandlerFun}>Load project A</button>
        </div>
    )
}

export default ClientProjectPage;
// to access -> http://localhost:3000/clients/id