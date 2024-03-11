export const deserialize = str => {
    return str.match(/\d{1,3}/g).reduce((nums, item) => {
        const num = parseInt(item[0]);
        const count = item.length > 1 ? parseInt(item.slice(1)) : 1;
        nums.push(...Array.from({ length: count }, () => num));
        return nums;
    }, []);
};