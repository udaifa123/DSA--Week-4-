//_______________________________Hashing________________________________
// let obj={};

// obj["apple"]=10;
// obj["banana"]=20;

// console.log(obj["apple"])




//__________________________________Frequency Map__________________________
// function freqMap(arr){
//     let map={}

//     for(let num of arr){
//         map[num] = (map[num]||0)+1;
//     }
//     return map;
// }
// console.log(freqMap([1,2,1,1,2,3]))





//_________________________count characters_________________________________
// function countChars(str){
//     let map={}

//     for(let ch of str){
//         map[ch] = (map[ch]||0)+1;
//     }
//     return map;
// }
// console.log(countChars("aaabbc"))




//________________________Find Duplicates_________________________________
// function findDuplicates(arr){
//     let map={};
//     let result=[];

//     for(let num of arr){
//         map[num]=(map[num]||0)+1;
//     }

//     for(let key in map){
//         if(map[key]>1){
//             result.push(Number(key))
//         }
//     }
//     return result;
// }
// console.log(findDuplicates([1,2,1,3,2,4,5,2]))





//_____________________________Check Duplicate Exists_____________________________
// function hasDuplicate(arr){
//     let set=new Set()

//     for(let num of arr){
//         if(set.has(num)) return true
//         set.add(num)
//     }
//     return false
// }
// console.log(hasDuplicate([1,2,3,1]))





//_____________________________Unique Elements______________________________
// function unique(arr){
//     return [...new Set(arr)]
// }
// console.log(unique([1,2,2,3,4,4]))






//___________________________________First Non-Repeating Character____________________________
// function firstUnique(str){
//     let map={}

//     for(let ch of str){
//         map[ch] = (map[ch] ||0)+1
//     }

//     for(let ch of str){
//         if(map[ch]===1) return ch;
//     }
//     return null;
// }
// console.log(firstUnique("aabccde"))





//_________________________________Most Frequent Element_________________________
// function mostFrequent(arr){
//     let map={}
//     let max=0
//     let result=null

//     for(let num of arr){
//         map[num]=(map[num] ||0)+1

//         if(map[num]>max){
//             max=map[num]
//             result=num
//         }
//     }
//      return result
// }
// console.log(mostFrequent([1,2,3,2,3,4,3]))




//___________________________Two Sum_______________________________
// function twoSum(nums,target){
//     let map={}

//     for(let i=0;i<nums.length;i++){
//         let diff=target-nums[i]

//         if(map[diff] !== undefined){
//             return [map[diff],i]
//         }
//         map[nums[i]]=i
//     }
// }
// console.log(twoSum([2,7,11,15],9))




//______________________________Anagram Check_______________________________
// function isAnagram(s,t){
//     if(s.length !== t.length) return false;

//     let map={}

//     for(let ch of s){
//         map[ch] = (map[ch] ||0)+1
//     }

//     for(let ch of t){
//         if(!map[ch]) return false
//         map[ch]--
//     }
//     return true
// }
// console.log(isAnagram("listen","silent"))





//_______________________________Intersection of Two Arrays_________________________
function intersection(a,b){
    let setA=new Set(a)
    let result=[]

    for(let num of b){
        if(setA.has(num)){
            result.push(num)
            setA.delete(num)
        }
    }
    return result
}
console.log(intersection([1,2,2,3],[2,3]))