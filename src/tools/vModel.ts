
import { ObjectKeys, readDeepPath, setDeepPath } from './objectFun'


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
                        setDeepPath(data, key as any, val)
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
