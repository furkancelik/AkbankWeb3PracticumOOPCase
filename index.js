const Vehicle = require("./Vehicle");
const OGS = require("./OGS");
const HGSCustomer = require("./HGSCustomer");

//raporlama
const ogs = new OGS();

//ödeme kabul eden fonksiyon
function hgsCounter(customer) {
  customer.decBalance(customer.cartype.fee);
  ogs.incBalance(customer.cartype.fee);
  ogs.pushCustomers(customer);
}

//her araç için ayrı ayrı sınıflar tanımlandı
let car = new Vehicle("Otomobil", 10);
let minibus = new Vehicle("Minibüs", 20);
let bus = new Vehicle("Otobüs", 30);

//araçlar tanımlanıyor
let customer1 = new HGSCustomer(
  car,
  Math.floor(Math.random() * 1000),
  "Furkan Çelik",
  new Date(),
  300
);

let customer2 = new HGSCustomer(
  car,
  Math.floor(Math.random() * 1000),
  "Talha T***",
  new Date(),
  450
);

let customer3 = new HGSCustomer(
  bus,
  Math.floor(Math.random() * 1000),
  "Samet Ç***",
  new Date(),
  125
);

let customer4 = new HGSCustomer(
  minibus,
  Math.floor(Math.random() * 1000),
  "Onur İ***",
  new Date(),
  368
);

let customer5 = new HGSCustomer(
  bus,
  Math.floor(Math.random() * 1000),
  "Emre İ**",
  new Date(),
  520
);

let customer6 = new HGSCustomer(
  bus,
  Math.floor(Math.random() * 1000),
  "Abdurrahman G****",
  new Date(),
  230
);

// araçlar gişeden geçiş yapıyor
hgsCounter(customer1);
hgsCounter(customer2);
hgsCounter(customer3);
hgsCounter(customer4);
hgsCounter(customer5);
hgsCounter(customer6);

console.log("Günlük geçen araçlar:", ogs.getCustomers());
console.log("Toplam Günlük Bakiye:", ogs.getTotalDailyBalance());
