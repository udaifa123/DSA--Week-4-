//______________________________Group Anagrams___________________________
// function groupAnagrams(strs){
//     let map={}

//     for(let word of strs){
//         let key=word.split("").sort().join("")

//         if(!map[key]){
//             map[key]=[]
//         }

//         map[key].push(word)
//     }
//     return Object.values(map)
// }
// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))





//_______________________________Group Angrams(Frequency Key Method)______________________________
// function groupAnagramsFreq(strs){
//     let map={}

//     for(let word of strs){
//         let freq=new Array(26).fill(0)

//         for(let ch of word){
//             freq[ch.charCodeAt(0)-97]++
//         }

//         let key=freq.join("#")

//         if(!map[key]){
//             map[key]=[]
//         }
//         map[key].push(word)
//     }
//     return Object.values(map)
// }

// let input=["eat","tea","tan","ate","nat","bat"]

// console.log(groupAnagramsFreq(input))





//_______________________________Check Two Strings are Anagram__________________________
// function isAnagram(s,t){
//     if(s.length !== t.length) return false

//     let map={}

//     for(let ch of s){
//         map[ch]=(map[ch]||0)+1
//     }

//     for(let ch of t){
//         if(!map[ch]) return false
//         map[ch]--
//     }
//     return true
// }
// console.log(isAnagram("listen","silent"));
// console.log(isAnagram("hello","world"))






//_______________________Simple Debug Version__________________________
// function groupAnagramsDebug(strs) {
//     let map={}

//     for(let word of strs){
//         let key=word.split("").sort().join("")

//         console.log("Word:",word,"Key:",key)

//         if(!map[key]) {
//             map[key] = []
//         }

//         map[key].push(word)

//         console.log("Map:",map)
//         console.log("------")
//     }

//     return Object.values(map)
// }
// console.log(groupAnagramsDebug(["eat","tea","tan"]))