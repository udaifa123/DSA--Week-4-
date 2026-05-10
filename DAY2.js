//______________________Count Character frequency____________________________
// function charFrequency(str){
//     let map={}

//     for(let ch of str){
//         map[ch]=(map[ch]||0)+1
//     }

//     return map
// }

// console.log(charFrequency("aabcc"))





//_______________________________Word Frequency_______________________________
// function wordFrequency(sentence){
//     let words=sentence.split("")
//     let map={}

//     for(let word of words){
//         map[word]=(map[word]||0)+1
//     }
//     return map
// }
// console.log(wordFrequency("hi hi hello"))





//_________________________Check Duplicate Characters__________________________
// function hasDuplicate(str){
//     let set=new Set()

//     for(let ch of str){
//         if(set.has(ch)) return true
//         set.add(ch)
//     }
//     return false
// }
// console.log(hasDuplicate("hello"))





//_____________________________________Find Duplicate Characters__________________________
// function findDuplicateChars(str){
//     let map={}
//     let result=[]

//     for(let ch of str){
//         map[ch]=(map[ch]||0)+1
//     }
//     for(let key in map){
//         if(map[key]>1){
//             result.push(key)
//         }
//     }
//     return result
// }
// console.log(findDuplicateChars("programming"))





//________________________________First Non-Repeating Character______________________________
// function firstUniqueChar(str){
//     let map={}

//     for(let ch of str){
//         map[ch] = (map[ch]||0)+1
//     }

//     for(let ch of str){
//         if(map[ch]===1){
//             return ch
//         }
//     }
//     return null
// }
// console.log(firstUniqueChar("aabccde"))






//____________________________String Normalization_______________________________
// function normalize(str){
//     return str.toLowerCase().replace(/\s/g,"")
// }
// console.log(normalize("Hello World"))






//__________________________________Anagram Check______________________________
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
// console.log(isAnagram("listen","silent"))





//______________________________Same Frequency Strings_________________________________
// function sameFrequency(str1,str2){
//     if(str1.length !==str2.length) return false

//     let map={}

//     for(let ch of str1){
//         map[ch]=(map[ch]||0)+1
//     }

//     for(let ch of str2){
//         if(!map[ch]) return false
//         map[ch]--
//     }
//     return true
// }
// console.log(sameFrequency("aabb","bbaa"))






