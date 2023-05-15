function StoreP() {
 this.user = null;
}
StoreP.prototype.enterStore = function (user) {
 this.user = user;
};
StoreP.prototype.leaveStore = function () {
 this.user = null;
};

export default StoreP;
