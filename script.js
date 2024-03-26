//Task 1
//Create own resume data in JSON format
const myresume = {
    "Name" : "Geetha P",
    "Email" : "geethumsp@gmail.com",
    "DOB" : "06 Oct 1983",
    "Contactnumber" : "9894891753",
    "Aboutme" : "An Inventive Full stack developer",
    "Address" :{
        "City" : "Erode",
        "State" : "Tamilnadu",
        "Country" : "India"
    },
    "Educationqualifiation" : {
        "Tenth" : "85",
        "Twelfth" : "80",
        "Degree" : "77"
    },
    "Skills" : ["HTML","CSS","JAVASCRIPT"],
    "Languagesknown" : ["English","Tamil"],
    
}

//Task 2
// Displaying JSON object

// for loop

console.log("Display JSON using for:-")
const details = Object.keys(myresume);
for(let i=0;i<details.length;i++){
     if(typeof(myresume[details[i]])==="object"){
       console.log(details[i]+":");
       let objlength = Object.keys(myresume[details[i]]);
       for(let data in myresume[details[i]]) {
        console.log(data+":",myresume[details[i]][data]);
 }
   }
  else
  console.log(details[i]+":",myresume[details[i]]);
}

// for in loop

console.log("Display JSON using for in:-")
for (let key in myresume){
    if(typeof(myresume[key])==="object"){
         console.log(key+":");
         for(let data in myresume[key]) {
                console.log(data+":",myresume[key][data]);
         }  
    }
   else
   console.log(key+":",myresume[key]);
}

// for of loop

console.log("Display JSON using for of:-")
for (let [key,value] of Object.entries(myresume)){
    if(typeof(myresume[key])==="object"){
         console.log(key+":");
         for(let data in myresume[key]) {
                console.log(data+":",myresume[key][data]);
         }  
    }
   else
   console.log(key+":",value);
}

//for each loop

console.log("Display JSON using for each:-")
Object.keys(myresume).forEach((key) => {
    if(typeof(myresume[key])==="object"){
        console.log(key+":");
        for(let data in myresume[key]) {
               console.log(data+":",myresume[key][data]);
        }  
    }
    else
    console.log(`${key}: ${myresume[key]}`);
  });
