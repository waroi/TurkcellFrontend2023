class User {
 constructor(name, password, id = Math.floor(Math.random() * 1_000_000_000)) {
  this.name = name;
  this.password = password;
  this.id = id;
 }
}
export default User;
