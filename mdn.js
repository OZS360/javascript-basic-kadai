const date = new Date();

let  MM = date.getMonth()+1;
let  dd = date.getDate();
let  yyyy = date.getFullYear();
console.log(yyyy + "年" + String(MM).padStart(2, '0') + "月" + String(dd).padStart(2, '0') +"日"); 