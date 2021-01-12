
// 随机输入数字
// 先进先出
let a = [1,5,6,9,8,7];
let b = [2,1,4,7,9,3];
// 标记a头部下标
let aTopLen = 0;
let aEndLen = a.length;
// 标记b头部下标
let bTopLen = 0;
let bEndLen = b.length;
// 先进后出6
let c = [];
// 赢取牌后再次进行出牌
while (aTopLen != aEndLen && bTopLen != bEndLen) {
// a先出牌
    let aNum = a[aTopLen];
// 头部删除
    aTopLen++;
    c.push(aNum);
    let _a = c.indexOf(aNum);
    if (_a >= 0 && _a != c.length - 1) {
        //
        while (c.length > _a) {
            let _n = c.length - 1 < 0 ? 0 : c.length - 1;
            // 尾部插入
            a[aEndLen] = c[_n];
            aEndLen++;
            c.splice(_n, 1);
        }
        // 重新出牌
        c.push(a[aTopLen]);
        // 头部删除
        aTopLen++;
    }
// b先出牌
    let bNum = b[bTopLen];
// 头部删除
    bTopLen++;
    c.push(bNum);
    let _b = c.indexOf(bNum);
    if (_b >= 0 && _b != c.length - 1) {
        // 抽取牌数
        while (c.length > _b) {
            let _n = c.length - 1 < 0 ? 0 : c.length - 1;
            // 尾部插入
            b[bEndLen] = c[_n];
            bEndLen++;
            c.splice(_n, 1);
        }
        // 重新出牌
        c.push(b[bTopLen]);
        // 头部删除
        bTopLen++;
    }
}

console.log(aTopLen + ":-----:"+aEndLen)
console.log(bTopLen + ":-----:"+bEndLen)

console.log(a)
console.log(b)
console.log(c)