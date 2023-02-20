import { useState, useEffect } from "react"
import Modal from '@/components/Modal'
import { v4 as uuidv4 } from 'uuid'


export default function MainSection() {

    const [closeModal, setCloseModal] = useState(false)
    const [storeInfo, setStoreInfo] = useState([] as any)
    const [valueOnInput, setValueOnInpput] = useState({ 
        //store here the data from input
        id: 0,
        name: '',
        age: '',
        email: '',
        gender: ''
    })
    const handleFnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //use destructuring and get the data
        const { name, value } = e.target
        setValueOnInpput((prev) => {
            return (
                //use ..prev for acessing the old data and combined [name]: to access the key name pass the destructured variables to make it dynamic
                {...prev, [name]: value }
            )
        })
    }

    const combinedData = () => {
        //then pass the data here
        const infoObject = {
            id: storeInfo.length === 0 ? storeInfo.length + 1 : storeInfo.length + 1,
            name: valueOnInput.name,
            age: valueOnInput.age,
            email: valueOnInput.email,
            gender: valueOnInput.gender
        }
        setStoreInfo([...storeInfo, infoObject])
    }


    console.log(storeInfo)
    return (
        <div>
            <div id="form" className="mx-auto flex py-4 ">
                <div className="p-2 flex items-center gap-4">
                    <label className="text-md font-semibold">Fullname</label>
                    <input
                        type="text"
                        className="py-1 px-2 border-2 rounded-md"
                        name="name"
                        onChange={handleFnameChange}
                    />
                </div>
                <div className="p-2 flex items-center gap-4">
                    <label className="text-md font-semibold">Age</label>
                    <input
                        type="text"
                        className="py-1 px-2 border-2 rounded-md"
                        name="age"
                        onChange={handleFnameChange}
                    />
                </div>

                <div className="p-2 flex items-center gap-4">
                    <label className="text-md font-semibold">Email</label>
                    <input
                        type="email"
                        className="py-1 px-2 border-2 rounded-md"
                        name="email"
                        onChange={handleFnameChange}
                    />
                </div>
                <div className="p-2 flex items-center gap-4">
                    <label className="text-md font-semibold">Gender</label>
                    <input
                        type="text"
                        className="py-1 px-2 border-2 rounded-md"
                        name="gender"
                        onChange={handleFnameChange}
                    />
                </div>
                <button className="w-36 btn-add" onClick={combinedData}>Add</button>
            </div>

            <Modal hidden={closeModal} close={() => setCloseModal(false)} />
            <table className="table-auto w-full">
                <thead>
                    <tr className="text-center bg-green-400 h-12">
                        <th>#</th>
                        <th>Fullname</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                {storeInfo.map((info: any) => {
                    return (
                        <>
                            <tbody className="mt-2" key={uuidv4()}>
                                <tr className="text-center border">
                                    <td className=" p-4">{info.id  }</td>
                                    <td>{info.name}</td>
                                    <td>{info.age}</td>
                                    <td>{info.email}</td>
                                    <td>{info.gender}</td>
                                    <td><button className="btn-details">Details</button></td>
                                    <td><button className="btn-update" onClick={() => setCloseModal(true)}>Update</button></td>
                                    <td ><button className="btn-delete">Delete</button></td>
                                </tr>
                            </tbody>
                        </>)
                })}

            </table>

        </div >
    )
}