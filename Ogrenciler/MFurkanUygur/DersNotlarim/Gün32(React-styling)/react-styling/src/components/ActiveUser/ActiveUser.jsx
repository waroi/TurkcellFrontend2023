import PropTypes from 'prop-types'


const ActiveUser = ({ activeUser, userRepos }) => {
    // console.log(userRepos[0].created_at);
    // console.log(userRepos.sort((a, b) => {
    //     a.created_at - b.created_at
    // }));

    return (
        <div>
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={activeUser.avatar_url} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-4">
                        <div className="card-body">
                            <h5 className="card-title">{activeUser.name}</h5>
                            <p className="card-text">{activeUser.bio} | {activeUser.company}</p>
                            <p className="card-text">Repo sayısı:{activeUser.public_repos} | {userRepos[userRepos.length - 1].name}</p>
                            <button disabled className='btn btn-danger'> takip edilen:{activeUser.following}</button>
                            <button disabled className='btn btn-danger'>takipçi:{activeUser.followers}</button>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            İncele
                        </button>
                    </div>

                </div>
            </div>




            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ActiveUser
ActiveUser.propTypes = {
    activeUser: PropTypes.object,
    userRepos: PropTypes.array
}