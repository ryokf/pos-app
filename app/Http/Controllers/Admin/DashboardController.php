<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Income;
use App\Models\OutcomeBuy;
use App\Models\OutcomeSocial;
use App\Models\Wallet;
use App\Services\Admin\DashboardService;
use App\Services\Admin\OutcomeService;
use Inertia\Inertia;

class DashboardController extends Controller
{
    private $dashboardService;
    private $outcomeService;
    public function __construct(DashboardService $dashboardService, OutcomeService $outcomeService)
    {
        $this->dashboardService = $dashboardService;
        $this->outcomeService = $outcomeService;
    }

    public function index(Wallet $wallet, OutcomeBuy $outcomeBuy, OutcomeSocial $outcomeSocial, Income $income)
    {
        // dd($this->dashboardService->getOutcome($outcomeBuy, $outcomeSocial));

        $wallets = $wallet->latest()->first();
        $profitPerMonth = $this->dashboardService->getProfitPerMonth();
        $latestOutcome = $this->dashboardService->getOutcome($outcomeBuy, $outcomeSocial);
        $latestIncome = $this->dashboardService->getIncome($income);

        return Inertia::render('Admin/Dashboard/index', compact('wallets', 'profitPerMonth', 'latestOutcome', 'latestIncome'));
    }
}
