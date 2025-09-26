import { ProductType } from "@/types";

const categories = [
    "Audio",
    "Wearables",
    "Audio",
    "Gaming",
    "Cables",
    "Phone Accessories",
    "Audio",
    "Charging",
    "Computer Accessories",
    "Car Accessories",
    "Computer Accessories",
    "Computer Accessories",
    "Phone Accessories",
    "Computer Accessories",
    "Cables",
    "Office Supplies"
];

const brands = [
    "Apple",
    "Samsung",
    "Google",
    "Sony",
    "Microsoft",
    "Dell",
    "HP",
    "Lenovo"
];

const productNames = [
    "Wireless Bluetooth Headphones",
    "Smart Fitness Watch",
    "Portable Bluetooth Speaker",
    "Wireless Gaming Mouse",
    "USB-C Charging Cable",
    "Phone Case with Stand",
    "Bluetooth Earbuds",
    "Wireless Charging Pad",
    "Laptop Stand Adjustable",
    "Phone Mount for Car",
    "Bluetooth Keyboard",
    "Wireless Mouse Pad",
    "Phone Screen Protector",
    "USB Hub Multi-Port",
    "Cable Management Kit",
    "Desk Organizer Set"
];

const descriptions = [
    "Premium smartphone with advanced camera technology and AI features",
    "High-performance laptop perfect for professionals and creators",
    "Wireless headphones with industry-leading noise cancellation",
    "Professional camera with exceptional image quality and video capabilities",
    "Tablet with powerful performance and stunning display",
    "Smartwatch with health monitoring and fitness tracking",
    "Gaming console for immersive entertainment experience",
    "Essential accessories to enhance your digital lifestyle"
];

function makeProduct(id: number): ProductType {
    const category = categories[(id - 1) % categories.length];
    const brand = brands[(id - 1) % brands.length];
    const name = productNames[id - 1] || `${brand} Product ${id}`;
    const description = descriptions[(id - 1) % descriptions.length];
    
    const basePrice = 50 + (id * 25) + Math.floor(Math.random() * 200);
    const originalPrice = basePrice + Math.floor(Math.random() * 100);
    
    const rating = 3.5 + (Math.random() * 1.5);
    const ratingCount = 10 + Math.floor(Math.random() * 500);
    
    const getColors = (productId: number) => {
        const colorsMap: { [key: number]: Array<{ color: string; image: string; ring: string; label: string }> } = {
            1: [
                { color: "#000000", image: "/img/products/1.jpg", ring: "#000000", label: "Black" },
                { color: "#64748b", image: "/img/products/2.jpg", ring: "#64748b", label: "Silver" }
            ],
            2: [ 
                { color: "#000000", image: "/img/products/2.jpg", ring: "#000000", label: "Black" },
                { color: "#f472b6", image: "/img/products/4.jpg", ring: "#f472b6", label: "Rose Gold" }
            ],
            3: [ 
                { color: "#2563eb", image: "/img/products/3.jpg", ring: "#2563eb", label: "Blue" },
                { color: "#ef4444", image: "/img/products/5.jpg", ring: "#ef4444", label: "Red" }
            ],
            5: [ 
                { color: "#000000", image: "/img/products/5.jpg", ring: "#000000", label: "Black" },
                { color: "#6b7280", image: "/img/products/7.jpg", ring: "#6b7280", label: "Gray" }
            ],
            7: [ 
                { color: "#000000", image: "/img/products/7.jpg", ring: "#000000", label: "Black" },
                { color: "#3b82f6", image: "/img/products/8.jpg", ring: "#3b82f6", label: "Blue" }
            ],
            9: [ 
                { color: "#64748b", image: "/img/products/9.jpg", ring: "#64748b", label: "Silver" },
                { color: "#000000", image: "/img/products/10.jpg", ring: "#000000", label: "Black" }
            ],
            11: [
                { color: "#000000", image: "/img/products/11.jpg", ring: "#000000", label: "Black" },
                { color: "#6b7280", image: "/img/products/12.jpg", ring: "#6b7280", label: "Gray" }
            ],
            13: [ 
                { color: "#d1d5db", image: "/img/products/13.jpg", ring: "#d1d5db", label: "Clear" },
                { color: "#60a5fa", image: "/img/products/14.jpg", ring: "#60a5fa", label: "Blue Light" }
            ]
        };
        
        return colorsMap[productId] || undefined;
    };
    
    return {
        id: id.toString(),
        name,
        price: basePrice,
        originalPrice: Math.random() > 0.7 ? originalPrice : undefined, 
        category,
        rating: Math.round(rating * 10) / 10, 
        ratingCount,
        image: `/img/products/${id}.jpg`,
        description,
        brand,
        colors: getColors(id),
        inStock: Math.random() > 0.1
    };
}

export const products: ProductType[] = Array.from({ length: 16 }, (_, idx) => makeProduct(idx + 1));
