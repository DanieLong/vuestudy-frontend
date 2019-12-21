/**
 * 树形结构转换
 * @param a
 * @param idStr
 * @param pidStr
 * @param chindrenStr
 * @returns {Array}
 */
export function transData(a, idStr, pidStr, chindrenStr) {
  let r = [],
    hash = {},
    id = idStr,
    pid = pidStr,
    children = chindrenStr,
    i = 0,
    j = 0,
    len = a.length
  for (; i < len; i++) {
    //给hash对象赋值
    let menu = a[i]
    menu['label'] = a[i].resourceName
    // hash[a[i][id]] = a[i]
    hash[a[i][id]] = menu
  }

  for (; j < len; j++) {
    let aVal = a[j]
    console.log('aVal:' + aVal)
    let hashVP = hash[aVal[pid]] //当前对象&pid对象
    console.log(hashVP)
    //判断这个对象是否存在
    if (hashVP) {
      //定义children节点
      // if (!hashVP[children]) {
      //   hashVP[children] = []
      // }
      !hashVP[children] && (hashVP[children] = [])
      hashVP[children].push(aVal)
    } else {
      r.push(aVal)
    }
  }
  return r
}
