import {useParams} from "react-router";



function Test () {
    const { id } = useParams();
    console.log(id)
    return <div>{id}</div>
}

export default Test;
