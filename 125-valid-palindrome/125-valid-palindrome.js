/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const alphaNums = new Set('abcdefghijklmnopqrstuvwxyz0123456789'.split(""));
    
//     let newStr = "";
//     for (const char of s) {
//         const lowerChar = char.toLowerCase();
        
//         if (alphaNums.has(lowerChar)) newStr += lowerChar;
//     }
    
//     let left = 0;
//     let right = newStr.length - 1;
    
//     while (left <= right) {
//         if (newStr[left] !== newStr[right]) return false;
//         left++;
//         right--;
//     }
    
//     return true;
    
    let left = 0;
    let right = s.length - 1;
    
    while (left <= right) {
        const lChar = s[left].toLowerCase();
        const rChar = s[right].toLowerCase();
        
        if (!alphaNums.has(lChar)) {
            left++;
            continue;
        }
        if (!alphaNums.has(rChar)) {
            right--;
            continue;
        }
        
        if (lChar !== rChar) return false;
        left++;
        right--;
    }
    
    return true;
};