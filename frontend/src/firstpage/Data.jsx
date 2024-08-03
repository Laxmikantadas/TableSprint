import React from 'react'
import Navbar from '../components/Navbar'
// import { Drawer } from '@mui/material'
import Drawer from '../components/Drawer'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import logo0 from "../assets/category.svg"


function Data() {
    return (

        <div>
            <Navbar />
            <div className='flex justify-between'>
                <Drawer />


                <div className="p-4 text-center w-4/5 ">
                    <div className="flex justify-between items-center text-center  mb-4">
                        {/* <img src={logo0} alt="" /> */}
                        <h1 className="text-xl font-bold flex ">
                        <img src={logo0} alt="" className='px-2'/>
                        Category</h1>
                        <input type="text" placeholder="Search..." className="border rounded-lg p-2 w-2/4" />
                        <button className=" bg-purple-800 text-primary-foreground px-4 py-2 rounded-lg text-white">Add Category</button>
                    </div>
                    <table className="min-w-full bg-card border-0 ">
                        <thead className='bg-amber-200'>
                            <tr className="bg-muted text-muted-foreground ">
                                <th className="py-2 px-4 border-b">Id</th>
                                <th className="py-2 px-4 border-b">Category name</th>
                                <th className="py-2 px-4 border-b">Image</th>
                                <th className="py-2 px-4 border-b">Status</th>
                                <th className="py-2 px-4 border-b">Sequence</th>
                                <th className="py-2 px-4 border-b">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-muted/50  bg-gray-100">
                                <td className="py-2 px-4 border-b">123</td>
                                <td className="py-2 px-4 border-b">Dals & Pulses</td>
                                <td className="py-2 px-4 border-b">
                                    <img undefinedhidden="true" alt="Dals & Pulses" src="https://openui.fly.dev/openui/24x24.svg?text=🫘" className="w-10 h-10" />
                                </td>
                                <td className="py-2 px-4 border-b text-green-500">Active</td>
                                <td className="py-2 px-4 border-b">1</td>
                                <td className="py-2 px-7 border-b">
                                    <button className="text-destructive px-2"> <EditIcon className=' text-gray-400'/></button>
                                    <button className="text-destructive px-2"><DeleteIcon className=' text-gray-400' /></button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Data