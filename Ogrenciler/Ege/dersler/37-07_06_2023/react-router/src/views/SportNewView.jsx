import { Outlet, useParams } from "react-router-dom"
const SportNewView = () => {
    const { name } = useParams()
    return (
        <div>
            SportNewView
            <Outlet />
            {name}
        </div>
    )
}

export default SportNewView