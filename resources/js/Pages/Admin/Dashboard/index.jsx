import React from "react";
import Admin from "../../../Templates/Admin";
import WalletInfoCard from '../../../Components/WalletInfoCard';
import ApexChart from '../../../Components/ApexChart';
import DateFormat from "../../../Helper/DateFormat";
import TableComp from './../../../Components/Table';
import { Table } from "flowbite-react";
import CurrencyFormat from './../../../Helper/CurrencyFormat';
import latestIncomeData from './../../../Pages/Admin/Dashboard/latestIncome.data.json';
import latestOutcomeData from './../../../Pages/Admin/Dashboard/latestOutcome.data.json';
import walletsData from './../../../Pages/Admin/Dashboard/wallet.data.json';
import profitPerMonthData from './../../../Pages/Admin/Dashboard/profitPerMonth.data.json';

function Index() {

    const latestIncome = latestIncomeData;
    let profitPerMonth = profitPerMonthData;
    const latestOutcome = latestOutcomeData;
    const wallets = walletsData;

    console.log(latestIncome)
    console.log(latestOutcome)
    console.log(wallets)

    profitPerMonth = Array.from(profitPerMonth);

    let profit = wallets.income - wallets.outcome

    const date = DateFormat();

    const numberFormat = (value) =>
        new Intl.NumberFormat('ID-id', {
            style: 'currency',
            currency: 'IDR',
        }).format(value);

    return (
        <Admin title="Dashboard" subtitle={`${date.day}, ${date.dateNumber} ${date.month} ${date.year}`}>
            <div className="mx-10 my-4">
                <div className="grid grid-cols-4 gap-4 my-4">
                    <WalletInfoCard title="Saldo" value={numberFormat(wallets.balance)}></WalletInfoCard>
                    <WalletInfoCard title="Pemasukan" value={numberFormat(wallets.income)}></WalletInfoCard>
                    <WalletInfoCard title="Pengeluaran" value={numberFormat(wallets.outcome)}></WalletInfoCard>
                    <WalletInfoCard title="Keuntungan" value={numberFormat(profit)}></WalletInfoCard>
                </div>
                <div className="bg-white p-6 my-6 rounded-lg shadow">
                    <h1 className="text-2xl font-bold">Peforma Keuangan</h1>
                    <h1 className="text-lg text-gray-400 mb-2">Ringkasan</h1>
                    <ApexChart profitPerMonth={profitPerMonth}></ApexChart>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <TableComp title={"Pengeluaran Terbaru"} isPageable={false} head={["#", "Tanggal", "Deskripsi", "Total"]} tableContent={LatestOutcomeData(latestOutcome)}></TableComp>
                    <TableComp title={"Pemasukan Terbaru"} isPageable={false} head={["#", "Tanggal", "Deskripsi", "Total"]} tableContent={LatestIncomeData(latestIncome)}></TableComp>
                </div>
            </div>
        </Admin>
    );
}

const LatestOutcomeData = (dataGet) => {
    console.log(dataGet.outcomeBuys)
    const searchParams = new URLSearchParams(window.location.search);
    // console.log(searchParams.has('page')); // price_descending

    return dataGet.slice(0, 5).map((item, index) => (
        <Table.Row key={item.id} className="bg-white border-none dark:bg-gray-800">
            <Table.Cell>{++index + (!searchParams.has('page') ? 0 : 10 * (searchParams.get('page') - 1))}</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item.data.date}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap text-gray-500 dark:text-white">
                {item.data.description.substring(0, 20)}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap text-gray-500 dark:text-white flex gap-4">
                {CurrencyFormat(item.data.cost)}
            </Table.Cell>
        </Table.Row>
    ))
}

const LatestIncomeData = (dataGet) => {
    console.log(dataGet)
    const searchParams = new URLSearchParams(window.location.search);
    // console.log(searchParams.has('page')); // price_descending

    return dataGet.slice(0, 5).map((item, index) => (
        <Table.Row key={item.id} className="bg-white border-none dark:bg-gray-800">
            <Table.Cell>{++index + (!searchParams.has('page') ? 0 : 10 * (searchParams.get('page') - 1))}</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item.date}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap text-gray-500 dark:text-white">
                {item.description.substring(0, 20)}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap text-gray-500 dark:text-white flex gap-4">
                {CurrencyFormat(item.total)}
            </Table.Cell>
        </Table.Row>
    ))
}

export default Index;
