import { useParams } from "react-router-dom"

export const Album = () => {
    const { name } = useParams();
    console.log(name);
    return (
        <div>hello</div>
    )
}