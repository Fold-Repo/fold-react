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
    "Experience the future of mobile technology with our premium smartphone featuring cutting-edge camera technology and advanced AI capabilities. The device delivers exceptional performance with a stunning display, long-lasting battery life, and seamless connectivity. Perfect for photography enthusiasts, content creators, and professionals who demand the best. Built with premium materials and designed for durability, this smartphone redefines what's possible in mobile innovation.",
    
    "Unleash your creativity and productivity with this high-performance laptop designed for professionals and creators. Featuring powerful processors, stunning graphics, and lightning-fast storage, it handles demanding tasks with ease. The vibrant display brings your work to life with exceptional color accuracy and clarity. Whether you're editing videos, designing graphics, or running complex applications, this laptop delivers the performance and reliability you need to excel in your field.",
    
    "Immerse yourself in pure audio excellence with these wireless headphones featuring industry-leading noise cancellation technology. Experience crystal-clear sound quality with deep bass and crisp highs that bring your music to life. The comfortable over-ear design ensures hours of listening pleasure, while the long-lasting battery keeps you connected all day. Perfect for music lovers, professionals, and anyone who appreciates premium audio quality in a sleek, modern package.",
    
    "Capture life's most precious moments with this professional camera that delivers exceptional image quality and stunning video capabilities. Featuring advanced sensor technology and precision optics, every shot is a masterpiece waiting to be discovered. The intuitive controls and ergonomic design make it perfect for both beginners and seasoned photographers. From breathtaking landscapes to intimate portraits, this camera empowers you to tell your story with unparalleled clarity and artistic expression.",
    
    "Transform your digital experience with this powerful tablet that combines exceptional performance with a stunning high-resolution display. Perfect for work, entertainment, and creative projects, it adapts to your lifestyle with seamless multitasking and intuitive controls. The lightweight design and long-lasting battery make it ideal for on-the-go productivity. Whether you're sketching ideas, watching movies, or staying connected, this tablet delivers the perfect balance of power and portability.",
    
    "Take control of your health and fitness journey with this advanced smartwatch featuring comprehensive health monitoring and fitness tracking capabilities. Track your heart rate, monitor sleep patterns, and stay motivated with personalized insights and goals. The sleek design and comfortable fit make it perfect for everyday wear, while the water-resistant construction ensures durability during workouts. Stay connected, stay healthy, and achieve your wellness goals with this intelligent companion on your wrist.",
    
    "Enter a world of immersive entertainment with this cutting-edge gaming console that delivers breathtaking graphics and lightning-fast performance. Experience your favorite games like never before with advanced processing power and stunning visual fidelity. The intuitive controller design and responsive gameplay create an unparalleled gaming experience. Whether you're exploring vast open worlds or competing in intense multiplayer battles, this console brings your gaming dreams to life with incredible detail and smooth performance.",
    
    "Enhance your digital lifestyle with these essential accessories designed to complement and improve your everyday technology experience. From protective cases to charging solutions, each accessory is crafted with precision and attention to detail. The premium materials and thoughtful design ensure durability and functionality that lasts. Perfect for anyone who wants to maximize their device's potential while maintaining style and convenience in their digital world."
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
        const colorsMap: { [key: number]: Array<{ color: string; image: string; label: string }> } = {
            1: [
                { color: "#000000", image: "/img/products/3.jpg", label: "Black" },
                { color: "#64748b", image: "/img/products/2.jpg", label: "Silver" }
            ],
            2: [ 
                { color: "#000000", image: "/img/products/5.jpg", label: "Black" },
                { color: "#f472b6", image: "/img/products/4.jpg", label: "Rose Gold" }
            ],
            3: [ 
                { color: "#2563eb", image: "/img/products/6.jpg", label: "Blue" },
                { color: "#ef4444", image: "/img/products/5.jpg", label: "Red" }
            ],
            5: [ 
                { color: "#000000", image: "/img/products/5.jpg", label: "Black" },
                { color: "#6b7280", image: "/img/products/7.jpg", label: "Gray" }
            ],
            7: [ 
                { color: "#000000", image: "/img/products/7.jpg", label: "Black" },
                { color: "#3b82f6", image: "/img/products/8.jpg", label: "Blue" }
            ],
            9: [ 
                { color: "#64748b", image: "/img/products/9.jpg", label: "Silver" },
                { color: "#000000", image: "/img/products/10.jpg", label: "Black" }
            ],
            11: [
                { color: "#000000", image: "/img/products/11.jpg", label: "Black" },
                { color: "#6b7280", image: "/img/products/12.jpg", label: "Gray" }
            ],
            13: [ 
                { color: "#d1d5db", image: "/img/products/13.jpg", label: "Clear" },
                { color: "#60a5fa", image: "/img/products/14.jpg", label: "Blue Light" }
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
        inStock: Math.random() > 0.1,
        isFreeDelivery: Math.random() > 0.3 // 70% chance of free delivery
    };
}

export const products: ProductType[] = Array.from({ length: 16 }, (_, idx) => makeProduct(idx + 1));
