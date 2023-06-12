import { useRouter } from "next/router";
function SelectedClient(){

    const router = useRouter();
    console.log(router.query);
    return (
        <div>
            <h1>
                the prject page for specific client for specified project
            </h1>
        </div>
    )
}export default SelectedClient;

//to access http://localhost:3000/clients/id/iid
//[]-> use for dynamic routing 