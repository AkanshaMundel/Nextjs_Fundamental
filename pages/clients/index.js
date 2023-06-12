import Link from "next/link";

function ClientPage(){
    const clients=[
        {id:"max", name :"maximilian"},
        {id:"felx" , name:"flomonia"}
    ]
    return (
        <div>
            <h2>the client page </h2>
            <ul>
                <li>
                    <Link href ="/clients/id1">Cliend1</Link>
                </li>
                <li>
                    <Link href ="/clients/id2">Cliend2</Link>
                </li>

            </ul>
            <div>
                <ul>
                    {clients.map((client)=>(
                        <li key ={client.id}>
                             <Link  href={`/clients/${client.id}`} >{client.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                {/* //though direct method name   */}
                    {clients.map((client)=>(
                        <li key ={client.id}>
                             <Link  href={{
                             pathname: "/clients/[id]",
                             query: { id: client.id} ,
                             }} 
                             >{client.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}
export default ClientPage;


//to access this page -->http://localhost:3000/clients