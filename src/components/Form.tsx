import {  ReactNode, createElement, Fragment } from "react";
import React from "react";
import { VForm, renderChildren, makeFormItem } from "../tools/_func";
import { FormRule, getRulesErr } from "../tools/rule";
import FormLabel from "./FormLabel";
export const checkForm = <T extends Record<string, any>>(form: T, formRule: FormRule<T>) => {
    // console.log('checkForm', form)
    if (Object.keys(form).length < Object.keys(formRule).length) return false
    return Object.keys(form).every(key => {
        // console.log(form, key, getRulesErr(form[key], formRule[key], form))
        if (getRulesErr(form[key], formRule[key], form)) {
            return false
        }
        return true
    })
}

type Props<T> = {
    children: ReactNode | ((vForm: VForm<T>, form?: T) => ReactNode);
    labelAfterAffix?: string;
    labelWidth?: string;
    value: T;
    onChange: (value: T) => void;
    tagType?: string,
    className?: string,
    rule?: FormRule<T>,
    labelTop?: boolean
    errFixed?: boolean
};
function Form<T>({
    children,
    labelAfterAffix,
    labelWidth,
    value,
    onChange,
    tagType = 'div',
    className,
    rule,
    labelTop,
    errFixed

}: Props<T>) {
    const vForm = makeFormItem(value, onChange, rule);
    const nextChildren = typeof children === 'function' ? children(vForm, value) : children
    const getChildren = () => {
        if (!nextChildren) return
        return renderChildren(nextChildren, (child, key) => {
            if (child.type === FormLabel) {
                return React.cloneElement(child, {
                    ...{
                        afterAffix: labelAfterAffix,
                        labelWidth, form: value, labelTop,errFixed
                    }, key
                });
            }
        },)
    }
    return tagType === '<>' ? createElement(Fragment, {}, getChildren()) : createElement(tagType, { className }, getChildren()
    );
}

export default Form;
