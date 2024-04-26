import React from "react";

import { Table, Label, Button, TextInput, Flowbite } from 'flowbite-react';

export default function WalletInfoCard({title ,value}) {
    return (
        <div className="">
            <div className=" bg-secondary-light rounded-lg border border-secondary-light flex justify-end overflow-hidden  shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="w-[98%] p-4 bg-white">

                <h1 className="mb-1 text-gray-400 tracking-tight dark:text-white">{title}</h1>
                <h1 className="text-2xl text-primary-light font-bold">{value}</h1>
                </div>
            </div>
        </div>
    )
}
