
type AllPaths<T> = T extends number | null | string | boolean | undefined
    ? undefined
    : T extends Array<infer E>
    ?
    | `[${number}]` // 将 K 转换成字符串字面量类型
    | (E extends object
        ? `[${number}].${AllPaths<E> extends string ? AllPaths<E> : never}`
        : never) // 递归地获取 T[K] 的所有路径，并将它们拼接在 K 后面
    : T extends object // 如果 T 是一个对象类型
    ? {
        [K in keyof T]-?: K extends string // 对于 T 中的每个属性 K，如果 K 是字符串类型
        ?
        | `${K}` // 将 K 转换成字符串字面量类型
        | `${K}${T[K] extends Array<any> ? '' : '.'}${AllPaths<T[K]> extends string
        ? AllPaths<T[K]>
        : never}` // 递归地获取 T[K] 的所有路径，并将它们拼接在 K 后面
        : never // 否则返回 never 类型（表示不存在）
    }[keyof T] // 最后将所有属性的结果合并为联合类型
    : never
export type ObjectKeys<T> = T extends Array<any> ? number | AllPaths<T> : AllPaths<T>

/**
 *  将 key路径'a.b[1].c 转换为 [a,b,1,c]
 */
function getKeyPathArray(keyPath: string | number | symbol) {
    const _path = String(keyPath).replaceAll('"', "").replaceAll("'", "");
    const _keys = _path.split(".");
    const keys: string[] = [];
    _keys.forEach((keyItem) => {
        keyItem
            .replaceAll("]", "")
            .split("[")
            .forEach((key) => {
                if (key !== "") {
                    keys.push(key);
                }
            });
    });
    return keys;
}
function _readDeepPath(
    object: any,
    path: string | number | symbol | undefined | string[]
): any {
    if (path === undefined) return object;
    let keys = [];
    if (
        typeof path === "string" ||
        typeof path === "number" ||
        typeof path === "symbol"
    ) {
        keys = getKeyPathArray(path);
    } else {
        keys = path;
    }
    const key = keys.shift();
    if (key !== undefined) {
        if (keys.length) {
            // console.log("object",object,key)
            return _readDeepPath(object[key], keys);
        } else {
            // console.log("object--",object,key)
            return object[key];
        }
    }
    return object;
}
function _setDeepPath(
    object: any,
    path: string | number | symbol | string[] | undefined,
    value: any
) {
    if (path === undefined) return object;
    let keys = [];
    if (
        typeof path === "string" ||
        typeof path === "number" ||
        typeof path === "symbol"
    ) {
        keys = getKeyPathArray(path);
    } else {
        keys = path;
    }
    // console.log(keys)
    const key = keys.shift();
    if (key !== undefined) {
        if (keys.length) {
            _setDeepPath(object[key], keys, value);
        } else {
            object[key] = value;
        }
    }

    if (keys.length === 0) return object;
}

export function readDeepPath<T>(object: T, key?: ObjectKeys<T>): any {
    return _readDeepPath(object, key);
}

export function setDeepPath<T>(object: T, key: ObjectKeys<T>|undefined, value: any): T {
    return _setDeepPath(object, key, value);
}
