import React, { useRef } from "react";
import { ReactNode, useEffect, useState } from "react";
import { renderChildren } from "../tools/_func";
import { ValRule, getRulesErr } from "../tools/rule";
export type FormItemProps = {
    label: string;
    labelWidth?: string;
    className?: string;
    children?: ReactNode;
    afterAffix?: string;
    required?: boolean;
    errMsg?: string;
    rules?: ValRule[];
    value?: any;
    onChange?: (value: any) => void;
    errFixed?: boolean;
    onlyDisplay?: boolean;
    labelTop?: boolean;
    form?: any;
    starHidden?: boolean;
};

const FormLabel: React.FC<FormItemProps> = ({
    label,
    labelWidth,
    onlyDisplay = false,
    className = "",
    children,
    afterAffix = "",
    rules = [],
    value,
    onChange,
    required,
    errMsg,
    errFixed = true,
    labelTop,
    form,
    starHidden,
}) => {
    // console.log(e)('form-label', labelWidth, afterAffix)
    const [err, setErr] = useState("");

    const refInitialValue = useRef(value);
    const [isChanged, setIsChanged] = useState(false);
    const checkRule = () => {
        const _rules = [...rules];
        if (required) {
            _rules.push({ required, message: errMsg });
        }
        const _err = getRulesErr(value, _rules, form);
        setErr(_err);
    };
    useEffect(() => {
        if (isChanged) {
            checkRule();
        }
    }, [form, isChanged]);
    useEffect(() => {
        if (!isChanged && value !== refInitialValue.current) {
            setIsChanged(true);
        } else if (isChanged) {
            checkRule();
        }
    }, [value]);

    const [showStar, setShowStar] = useState(false);
    useEffect(() => {
        if (required) {
            setShowStar(true);
        } else if (rules.length) {
            setShowStar(rules.some((rule) => rule.required));
        }
    }, [required, rules]);
    return (
        <div className={` inline-flex ${className}`}>
            <span
                className={` text-red-600 ${
                    showStar ? " visible" : starHidden ? "hidden" : " invisible"
                }`}
            >
                *
            </span>
            <div className={`inline-flex ${labelTop ? "flex-col" : ""}`}>
                <span
                    className=" inline-block mr-0.5"
                    style={{ width: labelWidth }}
                >
                    {label + afterAffix}
                </span>
                <div>
                    <div className=" inline-flex">
                        {onlyDisplay
                            ? children
                            : renderChildren(
                                  children,
                                  (child, key) => {
                                      let obj = {};
                                      if (typeof value !== "undefined") {
                                          obj = { value };
                                      }
                                      if (typeof onChange !== "undefined") {
                                          obj = { ...obj, onChange };
                                      }
                                        console.log('child',child)
                                      if (
                                          child.type === "input" ||
                                          child.type === "select" ||
                                          child.type === "textarea" ||
                                          typeof child.type === "function"
                                      ) {
                                        
                                          if (child.props.type === "checkbox") {
                                              const checked = value;
                                              return React.cloneElement(child, {
                                                  ...obj,
                                                  key,
                                                  checked,
                                              });
                                          }
                                          // else if (child.props.type === 'datetime-local'){
                                          //     obj={...obj,value}
                                          // }
                                          return React.cloneElement(child, {
                                              ...obj,
                                              key,
                                          });
                                      }
                                  },
                                  1
                              )}
                    </div>
                    <div className={` text-red-400 text-xs overscroll-x-auto`}>
                        {err}
                        {errFixed ? <>&nbsp;</> : ""}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormLabel;
