import React from "react";

import Admin from "../../../Templates/Admin";
import TableComp from "../../../Components/Table";
import { Table, Label, Button, TextInput } from 'flowbite-react';
import DeleteConfirm from "../../../Components/DeleteConfirm";
import Edit from "./Edit";
import data from "./data_dummy.json";

const CustomerData = (dataGet) => {
    const searchParams = new URLSearchParams(window.location.search);
    // console.log(searchParams.has('page')); // price_descending

    return dataGet.map((item, index) => (
        <Table.Row key={item.id} className="bg-white border-none dark:bg-gray-800">
            <Table.Cell>{++index + (!searchParams.has('page') ? 0 : 10 * (searchParams.get('page') - 1))}</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item.name}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap text-gray-600 dark:text-white">
                {item.address}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex gap-4">
                <Edit dataCustomer={item}></Edit>
                <DeleteConfirm id={item.id} href={"/admin/customer"}></DeleteConfirm>
            </Table.Cell>
        </Table.Row>
    ))
}
export default function Index() {

    const customers = data;

    return (
        <Admin title="Daftar Pelanggan">
            <div className="rounded-lg overflow-hidden shadow ml-4">
                <TableComp head={["#", "Nama", "alamat", ""]} tableContent={CustomerData(customers.data)} isPageable={true} paginationData={customers} IsSearchable></TableComp>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg shadow">
                <h1 className="text-xl font-bold mb-2">tambah daftar pelanggan</h1>
                <form className="grid grid-cols-2 gap-2">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Nama pelanggan" />
                        </div>
                        <TextInput id="email1" type="text" placeholder="" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="alamat" />
                        </div>
                        <TextInput id="email1" type="text" placeholder="" required />
                    </div>
                    <div className="w-full flex justify-end mt-4 col-span-4">
                        <Button color="primary" type="submit" size={'sm'}>Simpan</Button>
                    </div>
                </form>
            </div>
        </Admin>
    )
}
