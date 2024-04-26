<?php

namespace App\Services\Admin;

use App\Http\Resources\Income\IncomeResource;
use App\Http\Resources\Outcome\OutcomeBuyResource;
use App\Http\Resources\Outcome\outcomeSocialResource;
use App\Models\Wallet;
use Illuminate\Support\Facades\DB;

class DashboardService
{
    public function getProfitPerMonth(){

        for($month = 1; $month <= 12; $month++) {
            $data[$month - 1] = Wallet::whereMonth('created_at', $month)->sum('income') - Wallet::whereMonth('created_at', $month)->sum('outcome');
        }

        return $data;
    }

    public function getOutcome($outcomeBuy, $outcomeSocial){

        $outcomeBuys = OutcomeBuyResource::collection($outcomeBuy->orderBy('created_at', 'desc')->get());
        $outcomeSocials = outcomeSocialResource::collection($outcomeSocial->orderBy('created_at', 'desc')->get());

        $outcomes = $outcomeBuys->merge($outcomeSocials);

        return $outcomes;
    }

    public function getIncome($income){
        return IncomeResource::collection($income->orderBy('created_at', 'desc')->get());
    }
}
