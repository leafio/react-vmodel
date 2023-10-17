/**
 *  将 key路径'a.b[1].c 转换为 [a,b,1,c]
 */
function getKeyPathArray(keyPath: string | number | symbol) {
    const _path = String(keyPath).replaceAll('"', '').replaceAll("'", '')
    const _keys = _path.split('.')
    const keys: string[] = []
    _keys.forEach((keyItem) => {
        keyItem
            .replaceAll(']', '')
            .split('[')
            .forEach((key) => {
                if (key !== '') {
                    keys.push(key)
                }
            })
    })
    return keys
}
export function readDeepPath(object: any, path: string | number | symbol | string[]):any {
    let keys = []
    if (typeof path === 'string' || typeof path === 'number' || typeof path === 'symbol') {
        keys = getKeyPathArray(path)
    } else {
        keys = path
    }
    const key = keys.shift()
    if (key !== undefined) {
        if (keys.length) {
            // console.log("object",object,key)
            return readDeepPath(object[key], keys)
        } else {
            // console.log("object--",object,key)
            return object[key]
        }
    }
    return object
}
export function setDeepPath(object: any, path: string | number | symbol | string[], value: any) {
    let keys = []
    if (typeof path === 'string' || typeof path === 'number' || typeof path === 'symbol') {
        keys = getKeyPathArray(path)
    } else {
        keys = path
    }
    // console.log(keys)
    const key = keys.shift()
    if (key !== undefined) {
        if (keys.length) {
            setDeepPath(object[key], keys, value)
        } else {
            object[key] = value
        }
    }

    if (keys.length === 0) return object
}
