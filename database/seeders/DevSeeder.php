<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DevSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory(1)->create();

        $this->call([
            WalletSeeder::class,
            UnitSeeder::class,
            IngredientSeeder::class,
            StoreSeeder::class,
            OutcomeDetailSeeder::class,
            OutcomeSeeder::class,
            CategorySeeder::class,
            ProductSeeder::class,
            ProductFlavorSeeder::class,
            ProductSizeSeeder::class,
            CustomerSeeder::class,
            OutcomeSocialSeeder::class,
            IncomeSeeder::class,
            IncomeDetailSeeder::class,
            OutcomeSocialDetailSeeder::class,
            OutcomeBuySeeder::class,
            OutcomeBuyDetailSeeder::class,
        ]);
    }
}
