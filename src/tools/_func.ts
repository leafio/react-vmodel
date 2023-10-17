import React, { ReactElement, ReactNode, } from "react";
import { makeVModel } from "..";
import { FormRule, ValRule } from "./rule";
import { ObjectKeys } from "./vModel";

export const renderChildren = (
    children: ReactNode,    
    render: (child: ReactElement, key?: string | number) => ReactElement|undefined,
    level?: number
) => {
    let _level=0
    const parseChildren: (children: ReactNode, key?: string | number) => ReactNode = (_children, key) => {
        if (!_children) return;
        if (typeof _children == "object" && "type" in _children) {
            // console.log(e)('level',level,_children)
            const rendered = render(_children, key)
            if (rendered) return rendered
            if(_level===level) return _children
            return React.cloneElement(
                _children,
                { ..._children.props, key },
                parseChildren(_children.props.children)
            );
        } else if (Array.isArray(_children)) {
            _level++
            return _children.map((child: ReactNode, index: number) => {
                return parseChildren(child, index);
            });
        }
        return _children;
    };
    return parseChildren(children);
};


export type VForm<T> = (key?: keyof T | undefined) => {
    rules?: Partial<Record<keyof T, ValRule[]>>[keyof T];
    value: keyof T | undefined extends undefined ? T : T[keyof T] extends number ? number : T[keyof T] extends string ? string : T[keyof T] extends boolean ? boolean : T[keyof T] extends undefined ? undefined : any;
    onChange: (e: EventTarget | any) => void;
}

export const makeFormItem = <T>(form: T, setForm: (value: T) => void, rule?: FormRule<T>) => {
    const VModel = makeVModel(form, setForm)
    return (key?: keyof T) => {
        return (key && rule && rule[key]) ? {
            ...VModel(key as any as ObjectKeys<T>),
            rules: rule[key]
        } : { ...VModel(key as any as ObjectKeys<T>) }
    }
}

