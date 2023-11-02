import { JSX as JSX_2 } from 'react/jsx-runtime';
import { ReactNode } from 'react';

declare type AllPaths<T> = T extends number | null | string | boolean | undefined ? undefined : T extends Array<infer E> ? `[${number}]` | (E extends object ? `[${number}].${AllPaths<E> extends string ? AllPaths<E> : never}` : never) : T extends object ? {
    [K in keyof T]-?: K extends string ? `${K}` | `${K}${T[K] extends Array<any> ? '' : '.'}${AllPaths<T[K]> extends string ? AllPaths<T[K]> : never}` : never;
}[keyof T] : never;

export declare const makeVModel: <T>(form?: T | undefined, setForm?: ((value: T) => void) | undefined) => <S extends string>(key?: ObjectKeys<T> | undefined, valuePropName?: S | undefined) => { [key in Str2Key<S>]: any; } & {
    onChange: (e: EventTarget | any) => void;
};

export declare function Model<T>({ children, value, onChange }: Props<T>): JSX_2.Element;

export declare type ObjectKeys<T> = T extends Array<any> ? number | AllPaths<T> : AllPaths<T>;

declare type Props<T> = {
    children: (vModel: VModel<T>, value?: T | null, onChange?: (value: T | null) => void) => ReactNode;
    value?: T;
    onChange?: (value: T | null) => void;
};

declare type Str2Key<Param extends string> = Param extends `${infer Key}` ? Key : 'value';

export declare type VModel<T> = <S extends string>(key?: ObjectKeys<T> | undefined, valuePropName?: S | undefined) => {
    [key in Str2Key<S>]: any;
} & {
    onChange: (e: EventTarget | any) => void;
};

export { }
