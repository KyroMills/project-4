require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function () {

  await Category.deleteMany({});
  const categories = await Category.create([
    { name: 'Supercars', sortOrder: 10 },
    { name: 'Sportscars', sortOrder: 20 },
    { name: 'Trucks', sortOrder: 30 },
    { name: 'SUV', sortOrder: 40 },
    { name: 'Coupes', sortOrder: 50 },
    { name: 'Bikes', sortOrder: 60 },
    { name: 'Sedans', sortOrder: 70 },
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    { name: 'Mclaren 720s', emoji: '', category: categories[0], price: 5.95 },
    { name: 'Mclaren 765LT', emoji: '', category: categories[0], price: 6.95 },
    { name: 'Lamborghini Huracan', emoji: '', category: categories[0], price: 3.95 },
    { name: 'BMW M3', emoji: '', category: categories[1], price: 14.95 },
    { name: 'BMW M4', emoji: '', category: categories[1], price: 13.95 },
    { name: 'Toyota Supra', emoji: '', category: categories[1], price: 25.95 },
    { name: 'RAV 4', emoji: '', category: categories[2], price: 1.95 },
    { name: 'FORD F150', emoji: '', category: categories[2], price: 4.95 },
    { name: 'Honda Odyssey', emoji: '', category: categories[3], price: 3.95 },
    { name: 'Hyundai Tucson', emoji: '', category: categories[3], price: 7.95 },
    { name: 'Ford Bronco', emoji: '', category: categories[3], price: 1.95 },
    { name: 'Subaru BRZ', emoji: '', category: categories[4], price: 2.95 },
    { name: 'Chevrolet Camaro', emoji: '', category: categories[4], price: 3.95 },
    { name: 'Suzuki GSX-R', emoji: '', category: categories[5], price: 1.95 },
    { name: 'Kawasaki KLR650', emoji: '', category: categories[5], price: 0.95 },
    { name: 'BMW S 1000 RR', emoji: '', category: categories[5], price: 2.95 },
    { name: 'BMW F 900 R', emoji: '', category: categories[5], price: 3.95 },
    { name: 'Audi A3', emoji: '', category: categories[6], price: 0.95 },
    { name: 'Toyota Camry', emoji: '', category: categories[6], price: 0.95 },
    { name: 'Honda Accord', emoji: '', category: categories[6], price: 8.95 },
    { name: 'Hyundai Sonata', emoji: '', category: categories[6], price: 3.95 },
    { name: 'Genesis G70', emoji: '', category: categories[6], price: 7.95 },
  ]);

  console.log(items)

  process.exit();

})();