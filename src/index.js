const items = [
  { name: "qw", price: 256 },
  { name: "wee", price: 9656 },
  { name: "djs", price: 2566 },
  { name: "nmk", price: 7899 },
  { name: "dcnm", price: 2552 },
  { name: "smkyd", price: 4120 },
  { name: "sjskd", price: 66332 },
  { name: "sds", price: 2133 }
];

// const newArya = arya.filter((item)=>{
//   return item.price<=5000
// })

// const newPat =arya.filter((item)=>{
//   return item.price >=5666
// })

// console.log (newArya)

// console.log (newPat)
// const Lad = items.map((item)=>{
//   return item.price
// })

// const Lad = items .find ((item)=>{
//   return item.price === 66332
// })

// const lad = items.find ((item)=>{
//   return item.name==='wee'
// })

// items.forEach((item)=>
// {console.log (item.price)
// })

// items.forEach((paku)=>{
//   console.log (paku.name)
// })

// const lad = items.some ((item)=>
// {
//   return item.price>=3000
// })

// const lad = items.some((item)=>{
//   return item.price<=2000
// })

const lad = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
console.log(lad);
