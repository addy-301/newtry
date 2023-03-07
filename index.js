let flag1=0
let flag2=0
let check=document.querySelector("#npwd")

check.addEventListener("input",checkPassword)
//Checking The Important Condition For Password
function checkPassword()
{
    let check=document.querySelector("#npwd")
    let ans=check.value
    if(ans == "")
    {
        let ans1=document.querySelector(".check")
        ans1.innerText=""
    }
    else if((ans.includes('@') || ans.includes('#') ||ans.includes('$') ||ans.includes('%') ||ans.includes('&') ||ans.includes('*') ||ans.includes('(') ||ans.includes(')')) && (ans.includes('1') || ans.includes('2')  || ans.includes('3') || ans.includes('4')  || ans.includes('5')  || ans.includes('6')  || ans.includes('7')  || ans.includes('8')  ||ans.includes('9')  || ans.includes('0')) && ans.length>8)
    {
        let ans1=document.querySelector(".check")
        ans1.innerText="Password Is Strong"
        ans1.style.color="green"
        ans1.style.fontWeight="900"
        flag1=1
    }
    else
    {
        let ans1=document.querySelector(".check")
        ans1.innerText="Password Is Weak"
        ans1.style.color="red"
        ans1.style.fontWeight="900"
    }
}

check.addEventListener("blur",clear)
function clear()
{
    let ans1=document.querySelector(".check")
    ans1.innerText=""
}

let confirmPassword=document.querySelector("#cpwd")
confirmPassword.addEventListener("input",finalCheck)
//Confirming The Password
function finalCheck()
{
    let check=document.querySelector("#npwd")
    let ans=check.value

    let check1=document.querySelector("#cpwd")
    let ans1=check1.value
    if(ans1 == "")
    {
        let ans1=document.querySelector(".checkpwd")
        ans1.innerText=""
    }
    else if(ans1!=ans)
    {
        let ans1=document.querySelector(".checkpwd")
        ans1.innerText="Incorrect Passoword Check!!"
        ans1.style.color="red"
        ans1.style.fontWeight="900"
    }
    else
    {
        let ans1=document.querySelector(".checkpwd")
        ans1.innerText="Password Identical"
        ans1.style.color="green"
        ans1.style.fontWeight="900"
    }
}

confirmPassword.addEventListener("blur",clear1)
function clear1()
{
    let ans1=document.querySelector(".checkpwd")
    ans1.innerText=""
}


// let prevans=document.querySelector("#npwd")
// console.log(prevans.value)
// if(flag1==1 && flag2==1)
// {
// console.log(document.querySelector("#npwd").value)
// console.log(document.querySelector("#cpwd").value)
// }

// if(prevans==currans)
// {
//     let btn=document.createElement("button")
//     btn.innerText="Submit Now"
//     btn.setAttribute("id","btn1")
//     console.log(btn)
//     let ins1=document.querySelector(".log")
//     ins1.appendChild(btn)
// }
