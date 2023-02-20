import {useState} from 'react'
export default function Modal(props: {update: any, hidden: any, close: any}) {

    const [update, setUpdate] = useState({
        name: '',
        age: '',
        email: '',
        gender: '',
})

    const getvalue = (e: React.ChangeEvent<HTMLInputElement>) => {

        const {name, value} = e.target

        setUpdate((prev) => {
            return (
                {...prev, [name]: value}
            )
        })
    }

    //two functions on onclick event
    const functionsOnConfirmBtn = () => {
        dataValue();
        confirm();
    }
    const dataValue = () => {
        props.update(update)
    }
    const confirm = () => {
        props.close()
    }


    return (
        <div className={props.hidden ? `visible flex absolute items-center w-full inset-0 bg-black/30` : `hidden`}>
            <div className="bg-white/70 h-[300px] w-4/12 mx-auto flex flex-col text-center justify-center rounded-md drop-shadow-lg backdrop-blur-sm">
                <div className="p-2 grid grid-cols-1/2 items-center">
                    <label className="text-md font-semibold">Fullname</label>
                    <input
                        type="text"
                        className="py-1 px-2 border-2 rounded-md"
                        name='name'
                        onChange={getvalue}
                    />
                </div>
                <div className="p-2 grid grid-cols-1/2">
                    <label className="text-md font-semibold">Age</label>
                    <input
                        type="text"
                        className="py-1 px-2 border-2 rounded-md"
                        name='age'
                        onChange={getvalue}
                    />
                </div>

                <div className="p-2 grid grid-cols-1/2">
                    <label className="text-md font-semibold">Email</label>
                    <input
                        type="email"
                        className="py-1 px-2 border-2 rounded-md"
                        name='email'
                        onChange={getvalue}
                    />
                </div>
                <div className="p-2 grid grid-cols-1/2">
                    <label className="text-md font-semibold">Gender</label>
                    <input
                        type="text"
                        className="py-1 px-2 border-2 rounded-md"
                        name='gender'
                        onChange={getvalue}
                    />
                </div>

                <div className="space-x-10 flex justify-end mx-10 my-2">
                    <button className="btn-delete" onClick={props.close}>Close</button>
                    <button className="btn-update" onClick={functionsOnConfirmBtn}>Confirm</button>
                </div>

            </div>

        </div>
    )
}
