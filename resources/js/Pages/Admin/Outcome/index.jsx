import React, { useState } from "react";
import { useForm, Link } from '@inertiajs/react'
import { Button, Flowbite } from 'flowbite-react';
import Admin from "../../../Templates/Admin";
import DateFormat from "../../../Helper/DateFormat";
import OutcomeBuy from "./OutcomeBuy";
import CustomTheme from "../../../theme/CustomTheme";
import OutcomeSocial from "./OutcomeSocial";
import { usePage } from '@inertiajs/react'

import storeData from './data/store_data.json'
import ingredientData from './data/ingredient_data.json'
import unitData from './data/unit_data.json'
import productData from './data/product_data.json'
import customerData from './data/customer_data.json'
import outcome from './data/outcome_data.json'

export default function Index() {

    const store = storeData
    const ingredient = ingredientData
    const unit = unitData
    const product = productData
    const customer = customerData
    const outcomeData = outcome

    console.log(outcomeData)
    console.log(store)
    console.log(ingredient)
    console.log(unit)
    console.log(product)
    console.log(customer)

    const date = DateFormat();
    const outcomeType = window.location.pathname.split("/")[3] == "buy";
    const { flash } = usePage().props

    return (
        <div className="">
            <Admin bannerMessage={flash} title="Pengeluaran" subtitle={`${date.day}, ${date.dateNumber} ${date.month} ${date.year}`}>
                <div className="my-4 pl-4 flex gap-2">
                    <Flowbite theme={{ theme: CustomTheme }}>
                        <Button outline={!outcomeType} color={outcomeType ? 'primary' : 'light'} onClick={() => window.location.replace('/admin/outcome/buy')}>Pembelian</Button>
                        <Button outline={outcomeType} color={outcomeType ? 'light' : 'primary'} onClick={() => window.location.replace('/admin/outcome/social')}>Sosial</Button>
                    </Flowbite>
                </div>
                {
                    outcomeType ?
                        <OutcomeBuy
                            dataGet={{
                                outcome: outcomeData.outcomeBuys.data,
                                store: store,
                                ingredient: ingredient,
                                unit: unit
                            }}
                            paginationData={outcomeData.outcomeBuys.meta}
                        />
                        :
                        <OutcomeSocial
                            dataGet={{
                                outcome: outcomeData.outcomeSocials.data,
                                product: product,
                                customer: customer,
                                unit: unit
                            }}
                            paginationData={outcomeData.outcomeSocials.meta}
                        />
                }
            </Admin>
        </div>
    );
}
