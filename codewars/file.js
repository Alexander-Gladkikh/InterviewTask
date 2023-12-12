// function solution(str){
//     return str.split('').reverse().join('')
// }
// ----------------------------------------------------
// const solution = str => [...str].reverse().join('')
//-----------------------------------------------
// console.log(solution('hello')) // 'olleh'
//===================================================

// function getMiddle(str) {
//     let strLength = str.length;
//    if (str.length % 2 === 0) {
//        return str[strLength/2-1]+str[strLength/2]
//    }
//    else {
//        return str[Math.ceil(strLength/2-1)]
//    }
// }
//
// console.log(getMiddle('test'))
// console.log(getMiddle('testing'))
// ==============================================================

const areYouPlayingBanjo = (name) => {
    return name[0].toLowerCase() === 'r'
        ? `${name} plays banjo`
        : `${name} does not play banjo`
}

console.log(areYouPlayingBanjo('Adam'))
console.log(areYouPlayingBanjo('Ringo'))
