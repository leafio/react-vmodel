
import { readDeepPath, setDeepPath } from './objectFun'

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
type Str2Key<Param extends string> = Param extends `${infer Key}` ? Key : 'value'
export type VModel<T> = <S extends string>(
    key?: ObjectKeys<T> | undefined,
    valuePropName?: S | undefined,
) => { [key in Str2Key<S>]: any } & {
    onChange: (e: EventTarget | any) => void
}

export const makeVModel = <T>(form?: T, setForm?: (value: T) => void) => {
    return <S extends string>(key?: ObjectKeys<T>, valuePropName?: S) => {
        return {
            [valuePropName ?? 'value']: (key === undefined || form === null || form === undefined
                ? form
                : readDeepPath(form, key) ?? '') as any,
            onChange: (e: EventTarget | any) => {
                // (preVal: T) => { return { ...preVal, [key]: e?.target?.value ?? e } }
                let val = e?.target?.value ?? e
                // console.log('onChange', e, 'val', val)
                const inputType = e?.target?.type
                if (inputType === 'number') {
                    val = Number(val)
                } else if (inputType === 'checkbox') {
                    val = e.target?.checked
                    if (e.target?.attributes) {
                        const trueValue = e.target.attributes['true-value']?.value
                        const falseValue = e.target.attributes['false-value']?.value
                        if (trueValue !== undefined && falseValue !== undefined) {
                            val = val ? trueValue : falseValue
                        }
                    }

                    // console.log(e)(trueValue, falseValue, val)
                } else if (inputType === 'file') {
                    if (e.target.attributes['multiple']) {
                        val = e.target.files
                    }
                }
                if (e?.target?.attributes) {
                    const valueType = e?.target?.attributes['value-type']?.value
                    if (valueType === 'number') {
                        val = Number(val)
                    }
                }

                // console.log('before-set', val, key, form)
                if (setForm === undefined) return
                if (key !== undefined) {
                    if (Array.isArray(form)) {
                        // const _form = [...form]
                        // _form.splice(key as number, 1, val)
                        // setForm(_form as T)
                        // console.log(key, val, setDeepPath([...form], key, val))
                        const data = [...form]
                        setDeepPath(data, key, val)
                        setForm(data as T)
                    } else if (typeof form === 'object') {
                        const data = { ...form }
                        setDeepPath(data, key, val)
                        setForm(data as T)
                    }
                } else {
                    setForm(val)
                }
            },
        } as {
            [key in Str2Key<S>]: any
        } & { onChange: (e: EventTarget | any) => void }
    }
}
