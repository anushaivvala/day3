
let employee ={
    "name":"anu",
    "age":"25",
    "location":{
        "city":"hyderabad",
        "state":"telangana",
        },
        "hobbies":["reading","writing","dancing"]
    }
    
for(let i=0;i<employee["hobbies"].length;i++)
{
    console.log(employee["hobbies"][i])
}
for(let x of employee["hobbies"]){
    console.log(x)
}
for(let x in employee["hobbies"]){
    console.log(employee["hobbies"][x])
}
employee["hobbies"].forEach((n)=>{
    console.log(n);
});


