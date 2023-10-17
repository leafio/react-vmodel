export type ValRule = {
    required?: boolean,
    message?: string,
    validator?: (value: any, form?: any) => string | void

}
export type FormRule<T> = Partial<Record<keyof T, ValRule[]>>

export const getRulesErr = (value: any, rules?: ValRule[], form?: any) => {
    let msg = ''
    // console.log(e)('rules', value, rules)
    if (!rules) return msg
    rules.some(rule => {
        // console.log(e)('checking rule', value, rule.required, rule.message)
        if (rule.required && rule.message && (value === undefined || value === null || value === '')) {
            msg = rule.message
            return true
        }

        if (rule.validator) msg = rule?.validator(value, form) || ''
        if (msg) return true
        return false
    })
    return msg
}
