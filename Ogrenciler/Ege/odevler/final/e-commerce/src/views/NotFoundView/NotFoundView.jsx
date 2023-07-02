import NoPermission from "../../styledComponents/NoPermission"

const NotFoundView = () => {
    return (
        <div className="container">
            <NoPermission>
                <h2>You can not access this page</h2>
                <p>This might be because of your login status or this page might not exist at all.</p>
            </NoPermission>
        </div>
    )
}

export default NotFoundView