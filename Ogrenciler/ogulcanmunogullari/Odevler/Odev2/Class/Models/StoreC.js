class StoreC {
 constructor() {
  this.user = null;
 }
 enterStore(user) {
  this.user = user;
 }
 leaveStore() {
  this.user = null;
 }
}

export default StoreC;
