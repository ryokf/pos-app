import React from "react";
import { useForm } from '@inertiajs/react'
import Admin from "../../../Templates/Admin";
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import WalletSetting from "./WalletSetting";
import UnitSetting from "./UnitSetting";

import walletData from './data/wallet.json'
import unitData from './data/unit.json'

export default function Index() {
    const wallets = walletData
    const units = unitData

    console.log(units)
    console.log(wallets)
    return (
        <Admin title="Pengaturan">
            <div className="mx-10 rounded-lg">
                <WalletSetting wallets={wallets}></WalletSetting>
                <UnitSetting units={units}></UnitSetting>
            </div>
        </Admin>
    );
}
