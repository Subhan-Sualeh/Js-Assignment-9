// // // // Q1

// // // 1

// var mainContent = document.getElementById("main-content")

// // // 2

// var mainElement = mainContent.childNodes

// console.log(mainElement)

// // // 3

// var paras = document.getElementsByClassName("render")

// document.write("<h2>Inner Html of Class Render</h2>")

// for(i=0 ; i < paras.length ; i++){
//     document.write(paras[i].innerHTML + "<br>" )
// }


// // // // 4 & 5

// var first = document.getElementById("first-name")

// var last = document.getElementById("last-name")

// var email = document.getElementById("email")

// first.value =  "Alex"

// last.value = "Bank"

// email.value =  "alexbank@example.com"



// // // // Q2 


// // // 1

// var firstContent = document.getElementById("form-content").nodeType

// if(firstContent == 1){
//     console.log(firstContent + " Element / text")
// }
// else{
//     console.log(firstContent + " Junk Element")
// }

// // // 2

// var lastnode = document.getElementById("lastName")

// var lastType = lastnode.nodeType

// console.log(lastType)

// console.log(lastnode.childNodes[0])

// // // 3

// document.write("<h2>Child Node Of element updated</h2>")

// var lastNode = lastnode.childNodes[0].nodeValue = "Last Name: Jank"

// document.write("<h4>" + lastNode + "</h4>")

// // // 4

// var mainContent = document.getElementById("main-content")

// var child1st = mainContent.firstChild

// var childLst = mainContent.lastChild

// console.log("First Child : " + child1st + " Last Child : "+childLst)

// // // 5

// var lastnode = document.getElementById("lastName")

// var lastPre = lastnode.previousSibling

// var lastNext = lastnode.nextSibling

// console.log("Previous Sibling : " + lastPre)

// console.log("Next Sibling : " + lastNext)

// // // 6 

// var email = document.getElementById("email")

// var emailType = email.nodeType

// if(emailType == 1){
//     console.log(emailType + " Element / text")
// }
// else{
//     console.log(emailType + " Junk Element")
// }

// var emailParent = email.parentElement

// console.log(emailParent)


