<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductSize extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    /**
     * Get the product that owns the ProductFlavor
     */
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
}
