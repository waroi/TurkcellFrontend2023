import SingleRepo from "../SingleRepo/SingleRepo"

const AllRepos = () => {
  return (
    <div>
      <h3>Repo Adı</h3>
      <p>Repo Açıklaması</p>
      <p>Repo Oluşturma Zamanı</p>
      <p>Repo Güncelleme Zamanı</p>
      <SingleRepo />
    </div>
  )
}

export default AllRepos