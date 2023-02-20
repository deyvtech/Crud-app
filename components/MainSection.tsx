import { useState, useEffect } from "react"
import Modal from '@/components/Modal'
import { v4 as uuidv4 } from 'uuid'

export default function MainSection() {

  

    const [closeModal, setCloseModal] = useState(false)
    const [storeInfo, setStoreInfo] = useState([] as any)
    const [valueOnInput, setValueOnInpput] = useState({
        //store here the data from input
        id: '',
        name: '',
        age: '',
        email: '',
        gender: ''
    })

    //ADD
    const handleFnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //use destructuring and get the data
        const { name, value } = e.target
        setValueOnInpput((prev) => {
            return (
                //use ..prev for acessing the old data and combined [name]: to access the key name pass the destructured variables to make it dynamic
                { ...prev, [name]: value }
            )
        })
        
    }



    const addInfo = () => {
        //then pass the data here
        const infoObject = {
            //or  uuidv4() for id
            id: storeInfo.length === 0 ? storeInfo.length + 1 : storeInfo.length + 1,
            name: valueOnInput.name,
            age: valueOnInput.age,
            email: valueOnInput.email,
            gender: valueOnInput.gender
        }
        setStoreInfo([...storeInfo, infoObject])
    }

    
    //DELETE
    const deleteData = (id: any) => {
        //it will return the data that is not equal to id. if you have 3 list the you clicked the id#2 the it will return only id[1 nand 3]
        const deleteData = storeInfo.filter((info: any) => {
            return info.id !== id
        })
        setStoreInfo(deleteData)
    }

    //UPDATE
    //it will store all data from child on update functions
    const [update, setUpdate] = useState('')
    const callback = (payload: any) => {
        setUpdate(payload)
    }

    const updated = (id: any) => {
        setStoreInfo(storeInfo.map((info: any) => {
            if (info.id === id) {
                    return {...info, name: update}
            }
            else {
                return info
            }
            }))
    }

    return (
        <div>
            <div id="form" className="mx-auto flex py-4 ">
                <div className="p-2 flex items-center gap-4">
                    <label className="text-md font-semibold">Fullname</label>
                    <input
                        type="text"
                        className="py-1 px-2 border-2 rounded-md"
                        name="name"
                        placeholder="John Doe"
                        onChange={handleFnameChange}
                    />
                </div>
                <div className="p-2 flex items-center gap-4">
                    <label className="text-md font-semibold">Age</label>
                    <input
                        type="text"
                        className="py-1 px-2 border-2 rounded-md"
                        placeholder="56"
                        name="age"
                        onChange={handleFnameChange}
                    />
                </div>

                <div className="p-2 flex items-center gap-4">
                    <label className="text-md font-semibold">Email</label>
                    <input
                        type="email"
                        className="py-1 px-2 border-2 rounded-md"
                        placeholder="johndoe@doe.com"
                        name="email"
                        onChange={handleFnameChange}
                    />
                </div>
                <div className="p-2 flex items-center gap-4">
                    <label className="text-md font-semibold">Gender</label>
                    <input
                        type="text"
                        className="py-1 px-2 border-2 rounded-md"
                        placeholder="male"
                        name="gender"
                        onChange={handleFnameChange}
                    />
                </div>
                <button className="w-36 btn-add" onClick={addInfo}>Add</button>
            </div>

            <Modal hidden={closeModal} close={() => setCloseModal(false)} update={ callback } />
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
                        <th></th>
                    </tr>
                </thead>
                <tbody className="mt-2">
                    {storeInfo.map((info: any) => {
                        return (
                                <tr className="text-center border" key={uuidv4()}>
                                    <td className=" py-4"> {info.id}</td>
                                    <td>{info.name}</td>
                                    <td>{info.age}</td>
                                    <td>{info.email}</td>
                                    <td>{info.gender}</td>
                                    <td><button className="btn-details">Details</button></td>
                                    <td><button className="btn-update" onClick={() => setCloseModal(true)}>Edit</button></td>
                                <td><button className="btn-delete" onClick={() => deleteData(info.id)}>Delete</button></td>
                                <td><button className="btn-update" onClick={() => updated(info.id)}>Update</button></td>
                                
                                </tr>
                            )
                    })}
                </tbody>

            </table>

        </div >
    )
}