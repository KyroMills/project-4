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
    { name: 'Mclaren 720s', emoji: 'https://i.imgur.com/weVc5jQ.jpg', category: categories[0], price: 1490 },
    { name: 'Mclaren 765LT', emoji: 'https://i.imgur.com/zzKrjGq.jpg', category: categories[0], price: 1750 },
    { name: 'Lamborghini Huracan', emoji: 'https://i.imgur.com/Xo0BveA.jpg', category: categories[0], price: 1200 },
    { name: 'BMW M3', emoji: 'https://i.imgur.com/CoA41zc.jpg', category: categories[1], price: 400 },
    { name: 'BMW M4', emoji: 'https://i.imgur.com/hxMuTIS.jpg', category: categories[1], price: 400 },
    { name: 'Toyota Supra', emoji: 'https://i.imgur.com/YLURJnq.jpg', category: categories[1], price: 300 },
    { name: 'RAM 1500', emoji: 'https://i.imgur.com/dLMwNXT.jpg', category: categories[2], price: 75 },
    { name: 'FORD F150', emoji: 'https://i.imgur.com/9eOKbfP.jpg', category: categories[2], price: 50 },
    { name: 'Honda Odyssey', emoji: 'https://i.imgur.com/tqUDeYd.jpg', category: categories[3], price: 25 },
    { name: 'Hyundai Tucson', emoji: 'https://i.imgur.com/HulhNcc.jpg', category: categories[3], price: 20 },
    { name: 'Ford Bronco', emoji: 'https://i.imgur.com/ZFFs31l.jpg', category: categories[3], price: 80 },
    { name: 'Subaru BRZ', emoji: 'https://i.imgur.com/adNtVGf.jpg', category: categories[4], price: 70 },
    { name: 'Chevrolet Camaro', emoji: 'https://i.imgur.com/j9UTj4Z.jpg', category: categories[4], price: 80 },
    { name: 'Suzuki GSX-R', emoji: 'https://i.imgur.com/0VCo6NS.jpg', category: categories[5], price: 80 },
    { name: 'Kawasaki KLR650', emoji: 'https://i.imgur.com/s7VM9hZ.jpg', category: categories[5], price: 40 },
    { name: 'BMW S 1000 RR', emoji: 'https://i.imgur.com/YdG3l6L.jpg', category: categories[5], price: 85 },
    { name: 'BMW F 900 R', emoji: 'https://i.imgur.com/DRzcJdF.jpg', category: categories[5], price: 35 },
    { name: 'Audi A3', emoji: 'https://i.imgur.com/RzzMuBU.jpg', category: categories[6], price: 40 },
    { name: 'Toyota Camry', emoji: 'https://i.imgur.com/5wyV69u.jpg', category: categories[6], price: 20 },
    { name: 'Honda Accord', emoji: 'https://i.imgur.com/bHkjaL5.jpg', category: categories[6], price: 25 },
    { name: 'Hyundai Sonata', emoji: 'https://i.imgur.com/HGc5sgK.jpg', category: categories[6], price: 30 },
    { name: 'Genesis G70', emoji: 'https://i.imgur.com/aJJRz2U.jpg', category: categories[6], price: 60 },
  ]);

  console.log(items)

  process.exit();

})();