
import { VModel, makeVModel } from '../tools/vModel'
import { ReactNode } from 'react'

type Props<T> = {
    children: (vModel: VModel<T>, value?: T | null, onChange?: (value: T | null) => void) => ReactNode
    value?: T
    onChange?: (value: T | null) => void
}
export default function Model<T>({ children, value, onChange }: Props<T>) {
    const vModel = makeVModel(value, onChange)
    return <>{children(vModel, value, onChange)}</>
}

