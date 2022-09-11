class HGSCustomer {
  constructor(cartype, hgsNo, fullName, date, balance) {
    this.cartype = cartype;
    this.hgsNo = hgsNo;
    this.fullName = fullName;
    this.date = date;
    this.balance = balance;
  }
  decBalance(balance) {
    this.balance = this.balance - balance;
  }
}

module.exports = HGSCustomer;
