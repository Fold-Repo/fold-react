import { NavGroup } from "@/types/nav"

/*  ================= Nav Groups and Items ================= */
export const NAV_GROUPS: NavGroup[] = [
    {
        id: "home",
        label: "Home",
        items: [
            { label: "Home 1", href: "/home" },
            { label: "Home 2", href: "/home/home-2" },
            { label: "Home 3", href: "/home/home-3" },
            { label: "Home 4", href: "/home/home-4" },
            { label: "Home 5", href: "/home/home-5" },
            { label: "Home 6", href: "/home/home-6" },
            { label: "Home 7", href: "/home/home-7" }
        ]
    },
    {
        id: "about",
        label: "About",
        href: "/about"
    },
    {
        id: "products",
        label: "Products",
        items: [
            { label: "Products List 1", href: "/products" },
            { label: "Products List 2", href: "/products/style-2" },
            { isDivider: true },
            { label: "Product Details 1", href: "/products/detail/product-1" },
            { label: "Product Details 2", href: "/products/detail/product-2" },
            { label: "Product Details 3", href: "/products/detail/product-3" },
            { label: "Product Details 4", href: "/products/detail/product-4" },
            { label: "Product Details 5", href: "/products/detail/product-5" },
            { label: "Product Details 6", href: "/products/detail/product-6" },
            { label: "Product Details 7", href: "/products/detail/product-7" }
        ]
    },
    {
        id: "pages",
        label: "Pages",
        items: [
            { label: "Cart v1", href: "/pages/cart/" },
            { label: "Cart v2", href: "/pages/cart/cart-2" },
            { label: "Checkout", href: "/pages/cart/checkout" },
            { label: "Wishlist", href: "/pages/wishlist" },
            { isDivider: true },
            { label: "Payment v1", href: "/pages/payment/payment" },
            { isDivider: true },
            { label: "Payment v2", href: "/pages/payment-2" },
            { label: "Register", href: "/signup" },
            { label: "Login", href: "/signin" },
            { label: "Forgot Password", href: "/auth/forgot-password" }
        ]
    },
    {
        id: "blog",
        label: "Blog",
        items: [
            { label: "Blog List 1", href: "/blog" },
            { label: "Blog List 2", href: "/blog/blog-list-2" },
            { isDivider: true },
            { label: "Blog Details 1", href: "/blog/blog-details-1" },
            { label: "Blog Details 2", href: "/blog/blog-details-2" },
            { label: "Blog Details 3", href: "/blog/blog-details-3" },
            { label: "Blog Details 4", href: "/blog/blog-details-4" }
        ]
    },
    {
        id: "contact",
        label: "Contact",
        items: [
            { label: "Contact 1", href: "/contact" },
            { label: "Contact 2", href: "/contact/contact-2" },
            { label: "Contact 3", href: "/contact/contact-3" }
        ]
    }
]

/*  ================= Right Side Actions ================= */
export const HEADER_ACTIONS = {
    login: { label: "Login/Register", href: "/signin" },
    wishlist: { label: "Wishlist", href: "/pages/wishlist" },
    cart: { label: "Cart", href: "/pages/cart" },
    checkout: { label: "Checkout", href: "/pages/cart/checkout" }
}


