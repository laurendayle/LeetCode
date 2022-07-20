/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    //get letter logs
    const letterLogs = logs.filter(log => isNaN(Number(log.split(' ')[1])))
    
    //get digit logs
    const digitLogs = logs.filter(log => !isNaN(Number(log.split(' ')[1])))
    
    //sort letter logs
    letterLogs.sort((a, b) => {
        //separate identifier with other text
        let aString = a.split(' ')
        const aId = aString.shift()
        aString = aString.join(' ')
        
        //separate identifier with other text
        let bString = b.split(' ')
        const bId = bString.shift()
        bString = bString.join(' ')
        
        //if strings are the same then compare identifiers and return
        if (aString == bString && aId < bId) return -1
        
        //compare string and return accordingly
        if (aString < bString) return -1
        return 1
    })
    
    //return merged logs
    return [...letterLogs, ...digitLogs]
};
