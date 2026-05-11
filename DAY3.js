//_________________________________Two Sum(Brute Force)________________________________
// function twoSumBrute(nums,target){
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             if(nums[i]+nums[j]===target){
//                 return[i,j]
//             }
//         }
//     }
// }
// console.log(twoSumBrute([2,7,11,15],9))





//______________________________Two Sum(Optimized-Hashing)_______________________________
// function twoSum(nums,target){
//     let map={}

//     for(let i=0;i<nums.length;i++){
//         let diff=target-nums[i]

//         if(map[diff] !== undefined){
//             return [map[diff],i]
//         }

//         map[nums[i]] = i
//     }
// }
// console.log(twoSum([2,7,11,15],9))






//_____________________________Duplicate Strings(Check Exists)____________________________
// function hasDuplicateStrings(arr){
//     let set=new Set()

//     for(let str of arr){
//         if(set.has(str)) return true
//         set.add(str)
//     }
//     return false
// }
// console.log(hasDuplicateStrings(["a","b","c","a"]))





//______________________________Find Duplicate Strings_______________________________
// function findDuplicateStrings(arr){
//     let map={}
//     let result=[]

//     for(let str of arr){
//         map[str]=(map[str]||0)+1
//     }

//     for(let key in map){
//         if(map[key]>1){
//             result.push(key)
//         }
//     }
//     return result
// }
// console.log(findDuplicateStrings(["a","b","a","c","b"]))






//__________________________________Seen Set Pattern(Numbers)_____________________________
// function hasDuplicate(arr){
//     let seen=new Set()

//     for(let num of arr){
//         if(seen.has(num)) return true
//         seen.add(num)
//     }
//     return false
// }
// console.log(hasDuplicate([1,2,3,1]))





//________________________________Pair Exists(Return True/False)_____________________________________
function pairExists(nums,target){
    let set=new Set()

    for(let num of nums){
        let diff=target-num

        if(set.has(diff)) return true

        set.add(num)
    }
    return false
}
console.log(pairExists([2,7,11,15],9))