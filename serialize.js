export const serialize = nums => {
    return nums.reduce((result, num, index) => {
        if (index === 0) return result + num;
        
        const prevNum = nums[index - 1];
        result += (num === prevNum) ? '' : (prevNum + (result.endsWith(prevNum.toString()) ? '' : '1'));
        
        return result + num;
    }, '');
};