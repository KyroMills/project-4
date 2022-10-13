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
    { name: 'Crab Plate', emoji: '', category: categories[1], price: 14.95 },
    { name: 'Fried Shrimp', emoji: '', category: categories[1], price: 13.95 },
    { name: 'Whole Lobster', emoji: '', category: categories[1], price: 25.95 },
    { name: 'Taco', emoji: '', category: categories[2], price: 1.95 },
    { name: 'Burrito', emoji: '', category: categories[2], price: 4.95 },
    { name: 'Pizza Slice', emoji: '', category: categories[3], price: 3.95 },
    { name: 'Spaghetti', emoji: '', category: categories[3], price: 7.95 },
    { name: 'Garlic Bread', emoji: '', category: categories[3], price: 1.95 },
    { name: 'French Fries', emoji: '', category: categories[4], price: 2.95 },
    { name: 'Green Salad', emoji: '', category: categories[4], price: 3.95 },
    { name: 'Ice Cream', emoji: '', category: categories[5], price: 1.95 },
    { name: 'Cup Cake', emoji: '', category: categories[5], price: 0.95 },
    { name: 'Custard', emoji: '', category: categories[5], price: 2.95 },
    { name: 'Strawberry Shortcake', emoji: '', category: categories[5], price: 3.95 },
    { name: 'Milk', emoji: '', category: categories[6], price: 0.95 },
    { name: 'Coffee', emoji: '', category: categories[6], price: 0.95 },
    { name: 'Mai Tai', emoji: '', category: categories[6], price: 8.95 },
    { name: 'Beer', emoji: '', category: categories[6], price: 3.95 },
    { name: 'Wine', emoji: '', category: categories[6], price: 7.95 },
  ]);

  console.log(items)

  process.exit();

})();