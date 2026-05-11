//__________________________________Username Duplicate Checker___________________________
// function checkDuplicateUsernames(usernames){
//     let set=new Set()

//     for(let name of usernames) {
//         if(set.has(name)) {
//             return "Duplicate found:"+name
//         }
//         set.add(name)
//     }

//     return "No duplicates"
// }

// console.log(checkDuplicateUsernames(["sana","naja","sana"]))
// console.log(checkDuplicateUsernames(["sana","naja","zara"]))






//_____________________________Fast Username Lookup____________________________
// function createUserMap(users) {
//     let map={}

//     for(let user of users){
//         map[user.username]=user
//     }
//     return map
// }
// function login(userMap,username){
//     if(userMap[username]) {
//         return "User found:"+username
//     }else{
//         return "User not found"
//     }
// }

// let users=[
//     {username:"sana"},
//     {username:"rafa"}
// ]

// let userMap=createUserMap(users)

// console.log(login(userMap,"sana"))
// console.log(login(userMap,"zara"))





//_____________________________API Response Cache(Object Based)______________________________
// function createCache() {
//     let cache={}

//     return function fetchData(query) {
//         if(cache[query]) {
//             console.log("From Cache")
//             return cache[query]
//         }

//         console.log("Fetching from API...")

//         let response="Result for"+query

//         cache[query]=response

//         return response
//     }
// }

// let api=createCache()

// console.log(api("react"))
// console.log(api("react"))
// console.log(api("node"))





//_________________________________Duplicate Email Validation_________________________________
// function validateEmails(emails){
//     let set=new Set()

//     for(let email of emails){
//         if(set.has(email)) {
//             return "Duplicate email:"+email
//         }
//         set.add(email)
//     }
//     return "All emails unique"
// }

// console.log(validateEmails(["a@mail.com","b@mail.com","a@mail.com"]))





//________________________________Session Storage Simulation___________________________
// function createSession(){
//     let sessions={}

//     return{
//         login:function(sessionId,user){
//             sessions[sessionId]=user
//         },

//         getUser:function(sessionId) {
//             return sessions[sessionId] || "No session"
//         }
//     }
// }

// let session=createSession()

// session.login("123",{name:"Sana"})

// console.log(session.getUser("123"))
// console.log(session.getUser("999"))