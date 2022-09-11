class OGS {
  constructor(balance = 0, customers = []) {
    this.customers = customers;
    this.balance = balance;
  }
  incBalance(balance) {
    this.balance = this.balance + balance;
  }

  pushCustomers(customer) {
    this.customers.push(customer);
  }

  getTotalDailyBalance() {
    return this.balance;
  }
  getCustomers() {
    return this.customers;
  }
}

module.exports = OGS;
