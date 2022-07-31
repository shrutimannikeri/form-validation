//radio button checked
let genders=document.querySelectorAll("input[name='gender']")
genders.forEach((genders)=>{
    genders.addEventListener("click",function(){
        let previouschecked=document.querySelector("input[name='gender'][checked='checked']")
        //removing preious checked attribute 
        previouschecked.removeAttribute("checked")
        //adding current clicked to attribute
        genders.setAttribute("checked","checked")
    })
})


let food=document.querySelectorAll("input[name='food']")
food.forEach((food)=>{
    food.addEventListener("click",function(){
        let x=food.checked
            if(x===true){
                food.setAttribute("checked","checked")
            }
            else{
                food.removeAttribute("checked")
            }
    })
})
 


let btnclick=document.querySelector("#submit")
btnclick.addEventListener("click",function(e){
    //its stop page defeault  behaviour
e.preventDefault()

//get all value
let fname=document.querySelector('#first-name')
let lname=document.querySelector("#last-name")
let saddress=document.querySelector("#address")

let pincode=document.querySelector("#pincode")

//only one value id ther checked in radio button
let gender=document.querySelector("input[name='gender'][checked='checked']")

//multiple value checked in checkbox
let foodlist=document.querySelectorAll("input[name='food'][checked='checked']")

//storing checkbox value in one array
let foodname=[]
foodlist.forEach((foodlist)=>{
    foodname.push(foodlist.value)
})

let state=document.querySelector("#state")
let country=document.querySelector("#country")


if(fname.value===""){
    clearErrors()
    document.querySelector("#ferror").innerHTML="please enter the first name"
    //it will go for perticular tag
   fname.focus()
}
else if(lname.value===""){
    clearErrors()
    document.querySelector("#lerror").innerHTML="please eneter the last name"
    lname.focus()
}

else if(pincode.value===""){
    clearErrors()
    document.querySelector("#perror").innerHTML="enter the pincode"
    pincode.focus()
}

//chodee atleast 2 item from food
else if(foodlist.length<2){
    clearErrors()
    alert("please choose 2 or more food items")
}
else{

    clearErrors()
    
    let tbody=document.querySelector(".table-body")
    let newtr=document.createElement("tr")
    let newtdvalue=""

    newtdvalue+=`
        <td>${fname.value}</td>
        <td>${lname.value}</td>
        <td>${saddress.value}</td>
        <td>${pincode.value}</td>
        <td>${gender.value}</td>
        <td>${foodname.join(',')}</td>
        <td>${state.value}</td>
        <td>${country.value}</td>
    `
    newtr.innerHTML=newtdvalue
    tbody.appendChild(newtr)
    ResetAllvalue()
}

})


function clearErrors(){
    document.querySelector("#ferror").innerHTML=""
    document.querySelector("#lerror").innerHTML=""
    document.querySelector("#perror").innerHTML=""
}


function ResetAllvalue(){
 document.querySelector('#first-name').value=""
document.querySelector("#last-name").value=""
document.querySelector("#address").value=""
document.querySelector("#pincode").value=""
document.querySelector("#state").value=""
document.querySelector("#country").value=""


//clearing radio box
let genderremove =document.querySelectorAll("input[name='gender']")[0];
let previouscheck = document.querySelectorAll("input[name='gender'][checked='checked']")[0];
previouscheck.checked=false
previouscheck.removeAttribute("checked");
genderremove.setAttribute("checked", "checked");
genderremove.checked=true
      



//multiple value checked in checkbox
let foodlistname=document.querySelectorAll("input[name='food'][checked='checked']")
foodlistname.forEach((foodlistname)=>{
    foodlistname.checked=false
    foodlistname.removeAttribute("checked")
})




}
