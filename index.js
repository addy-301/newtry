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
        create()
    }
}

confirmPassword.addEventListener("blur",clear1)
function clear1()
{
    let ans1=document.querySelector(".checkpwd")
    ans1.innerText=""
}

function create()
{
    let btn=document.createElement("button")
    let ins=document.querySelector(".log")
    btn.innerText="LOG IN"
    btn.setAttribute("id","btn1")
    ins.appendChild(btn)
}
