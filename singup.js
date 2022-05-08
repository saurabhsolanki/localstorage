document.querySelector("form").addEventListener("submit", mysubmit)


// make an empty array in which you can put your obj value init
let arr= JSON.parse(localStorage.getItem("signupdata")) || []
// console.log(arr,"highidh")

function mysubmit(event){

    event.preventDefault()

    // get all the value of input tag by Id and .value
    var name=document.querySelector("#name").value
    var email=document.querySelector("#email").value
    var password=document.querySelector("#password").value

    // put all value in object
    var obj={
        username:name,
        useremail:email,
        userpass:password
    }
    //push all of your object value to the empyt array
    arr.push(obj)

    for(var i=0; i<arr.length; i++)
    {
        if(arr[i].useremail===email)
        {
            alert("this email is alreday taken")
            break
        }
    }

    localStorage.setItem("signupdata",JSON.stringify(arr))
}

function req(){
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value

   

    if(name=="")
    {
        alert("name can't be empty")
        return false
    }

    else if(email=="")
    {
        alert("Email can't be Empty")
        return false
    }


    else if(password=="")
    {
        alert("Password can't be empty")
    }

    else{
        alert("Signup Succesfull")
        // window.location.href="login.html"
        return true
    }

    
   
        
}