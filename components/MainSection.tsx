import { useState } from "react"
import Modal from '@/components/Modal'

export default function MainSection() {

    const [closeModal, setCloseModal] = useState(false)

    const openBtn = () => {

        setCloseModal(true)
    }

    const closeBtn = () => {
        setCloseModal(false)
    }

    return (
        <div>
            <Modal hidden={closeModal} close={closeBtn} />
            <table className="table-auto w-full ">
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
                <tbody className="mt-2">
                    <tr className="text-center border">
                        <td className=" p-4">1</td>
                        <td>Dave Lexter Supsup</td>
                        <td>22</td>
                        <td>Kingnorway17@gmail.com</td>
                        <td>Male</td>
                        <td><button className="btn-details">Details</button></td>
                        <td><button className="btn-update"  onClick={openBtn}>Update</button></td>
                        <td ><button className="btn-delete">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}