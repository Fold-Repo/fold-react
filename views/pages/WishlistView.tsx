"use client";

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ProductCard, EmptyState } from '@/components'
import { useWishlist } from '@/store'
import { formatCurrency } from '@/lib'
import React from 'react'

const WishlistView = () => {

    const { items, total } = useWishlist();

    const totalValue = items.reduce((sum, product) => sum + product.price, 0);

    return (
        <>
            <Header />

            {/*  ================= WISHLIST HERO================= */}
            <div className="bg-brand/5 dark:bg-gray-800 py-8 md:py-12">
                <nav className="container flex flex-col items-center justify-center gap-y-3 text-brand dark:text-gray-100">
                    <h2 className="font-bold text-lg lg:text-xl">✨ My Wishlist</h2>
                    <p className="text-sm">Your dreams and desires, beautifully organized</p>

                    <div className="flex items-center justify-between w-full max-w-xs gap-4">
                        <div className="space-y-0.5 text-center">
                            <h2 className="font-bold text-xl">{total}</h2>
                            <span className="text-sm">Total Items</span>
                        </div>

                        <div className="space-y-0.5 text-center">
                            <h2 className="font-bold text-xl">{formatCurrency(totalValue)}</h2>
                            <span className="text-sm">Total Value</span>
                        </div>

                        <div className="space-y-0.5 text-center">
                            <h2 className="font-bold text-xl">{items.filter(item => item.price > 1000).length}</h2>
                            <span className="text-sm">High Value</span>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="container section-md">

                {items.length === 0 ? (
                    <EmptyState
                        imageSrc="/img/empty.svg"
                        title="Your wishlist is empty"
                        description="Start adding products you love to your wishlist"
                        actionLabel="Browse Products"
                        actionHref="/products"
                    />
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
                        {items.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>

            <Footer />
        </>
    )
}

export default WishlistView