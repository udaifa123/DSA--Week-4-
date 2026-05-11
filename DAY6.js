//_________________________________Two Sum(Hashing)_________________________________
// function twoSum(nums,target){
//     let map={}

//     for(let i=0;i<nums.length;i++){
//         let diff=target-nums[i]

//         if(map[diff] !==undefined){
//             return [map[diff],i]
//         }
//         map[nums[i]]=i
//     }
// }
// console.log(twoSum([2,7,11,15],9))






//_______________________________Character Frequency_____________________________
// function charFrequency(str){
//     let map={}

//     for(let ch of str){
//         map[ch]=(map[ch]||0)+1
//     }
//     return map
// }
// console.log(charFrequency("programming"))





//_______________________________Duplicate Emails_____________________________
// function findDuplicateEmails(emails) {
//     let set=new Set()
//     let duplicates=[]

//     for(let email of emails) {
//         if(set.has(email)) {
//             duplicates.push(email)
//         }else {
//             set.add(email)
//         }
//     }
//     return duplicates
// }

// console.log(findDuplicateEmails([
//     "a@mail.com",
//     "b@mail.com",
//     "a@mail.com"
// ]))






//______________________________Fast Product Search___________________________
function createProductSearch(products) {
    let map={}

    for(let product of products) {
        map[product.name.toLowerCase()]=product
    }

    return function search(name) {
        return map[name.toLowerCase()] || "Not found"
    }
}

let products=[
    {name:"iPhone",price:100000},
    {name:"Laptop",price:40000}
]

let search=createProductSearch(products)

console.log(search("iphone"))
console.log(search("laptop"))