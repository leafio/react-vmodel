- [安装 Installation](#安装-installation)
- [使用方法 Usage](#使用方法-usage)



## 安装 Installation

```bash
    # use npm
    npm install react-vmodel
    # or use yarn
    yarn add react-vmodel
```



## 使用方法 Usage

```javascript
import { makeVModel } from 'react-vmodel'
export default function Demo() {
   const [text,setText]=useState('')
   const vModel=makeVModel(text,setText)
   return <input type="text" {...vModel()} />
}

```
```javascript
import { useEffect, useState } from 'react'
import { makeVModel } from 'react-vmodel'
export default function Demo() {
    const [form, setForm] = useState({
        name: 'demo',
        age: 1,
        gender: 'male',
        isTalent: true,
        job: 0,
        projects: [
            {
                name: 'First',
                isFinished: true
            },
            {
                name: 'Last',
                isFinished: false
            }
        ]
    })
    const jobOptions = [
        {
            label: 'Front End Developer',
            value: 0
        }, {
            label: 'Back End Developer',
            value: 1
        }, {
            label: 'Test Engineer',
            value: 2
        }
    ]
    const vModel = makeVModel(form, setForm)
    useEffect(() => {
        console.log(form)
    })
    return <form className='flex flex-col'>
        <label className='mb-1'>
            <span className='w-24 inline-block'>Name:</span>
            <input type='text' className=' border' {...vModel('name')} />
        </label>
        <label className='mb-1'>
            <span className='w-24 inline-block'>Age:</span>
            <input type='number' className=' border' {...vModel('age')} />
        </label>

        <div className='mb-1'>
            <span className='w-24 inline-block'>Gender:</span>
            <label >
                Male
                <input type='radio' className=' border' {...vModel('gender')} value={'male'} name="gender" />
            </label>
            <label >
                Female
                <input type='radio' className=' border' {...vModel('gender')} value={'female'} name="gender" />
            </label>
        </div>
        <label className='mb-1'>
            <span className='w-24 inline-block'>isTalent:</span>
            <input type='checkbox' className=' border' {...vModel('isTalent', 'checked')} />
        </label>
        <label className='mb-1'>
            <span className='w-24 inline-block'>Job:</span>
            <select {...vModel('job')} value-type='number'>
                {jobOptions.map(job => {
                    return <option key={job.value} value={job.value}>{job.label}</option>
                })}

            </select>
        </label>
        <div className='mb-1'>
            <span className='w-24 inline-block'>Projects:</span>
            {
                form.projects.map((p, index) => <label key={p.name}>
                    <span>{p.name}</span>
                    <input type="checkbox" {...vModel(`projects[${index}].isFinished`, 'checked')} />
                </label>)
            }

        </div>

    </form>
}
```



