import { Link } from "react-router-dom"

export default function Error (){
    return(
        <div>
            <h1>404 not found</h1>
            {/* with link it is faster cause it don't render whole page */}
            <Link to= "/">Link to home page</Link> <br/>
            {/* it is slow cause it render whole page */}
            <a href="/">anchor to home page</a>
        </div>
    )
}