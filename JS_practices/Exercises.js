//Use filter to filter out country start with 'E';

const countries=["England","India","Egypt"];

const count=countries.filter(name=>name.startsWith('E'));
console.log(count);


// using for each 
const names=["vijay","harry","hasini","jack sparrow","hermoine"];
const nam=names.forEach(element=>{
  console.log(element)
})

//Use map to create a new array by changing each number to square in the numbers array
const lam=[1,2,3,4,5,6];
const lammapped=lam.map((element)=>element*element)
console.log(lammapped)


//Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

const country = ["Estonia", "Finland", "Sweden", "Denmark", "Norway", "IceLand"];

const sentence=country.reduce((accumulator,currentvalue,id)=>{
  return id==country.length-1?accumulator+" and "+currentvalue +" are northern countries" : accumulator+", "+currentvalue;
})

    console.log(sentence);

//to display only the string items

const arr=["siva",1,2,3,"hello"]
const stringsonly=arr.filter((element)=> typeof element=="string")
console.log(stringsonly);



// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
var con=["Finland", "Argentina", "Germany", "England", "Spain","France","Fiji"];
var map=new Map();
coun.forEach((c)=>{
    var k=c.charAt(0);
    if(!map.has(k)){
    map.set(k,1);
    }
    else{
    map.set(k,map.get(k)+1);
    }
})
var cons=0;
for(let i of map.keys()){
  if(map.get(i)>cons){
    cons=map.get(i);
    console.log(i);
  }
}

//assign the elements using destruction
const factors=[1,9.4,45,100];
 var [e,pi,humanbodyTemp,waterBodyTemp]=factors;




 