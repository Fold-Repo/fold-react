import { ProductType, SpecificationType, Review } from "@/types";

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

    const getReviews = (productId: number): Review[] => {
        const reviewTemplates = [
            {
                content: "Excellent product! Great quality and fast delivery. Highly recommend to anyone looking for this type of item.",
                author: { name: "Sarah Johnson", role: "Verified Buyer", image: "https://i.pravatar.cc/150?u=sarah" },
                rating: 5,
                date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
            },
            {
                content: "Good value for money. Works as expected and the build quality is solid. Would buy again.",
                author: { name: "Mike Chen", role: "Verified Buyer", image: "https://i.pravatar.cc/150?u=mike" },
                rating: 4,
                date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
            },
            {
                content: "Amazing product! Exceeded my expectations. The quality is outstanding and it arrived quickly.",
                author: { name: "Emily Davis", role: "Verified Buyer", image: "https://i.pravatar.cc/150?u=emily" },
                rating: 5,
                date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
            },
            {
                content: "Decent product overall. Some minor issues but nothing major. Good for the price point.",
                author: { name: "David Wilson", role: "Verified Buyer", image: "https://i.pravatar.cc/150?u=david" },
                rating: 3,
                date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
            },
            {
                content: "Perfect! Exactly what I was looking for. Great customer service and fast shipping.",
                author: { name: "Lisa Brown", role: "Verified Buyer", image: "https://i.pravatar.cc/150?u=lisa" },
                rating: 5,
                date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
            },
            {
                content: "Good product with some room for improvement. Overall satisfied with the purchase.",
                author: { name: "James Taylor", role: "Verified Buyer", image: "https://i.pravatar.cc/150?u=james" },
                rating: 4,
                date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
            }
        ];

        // Generate exactly 3 reviews per product
        const numReviews = 3;
        const selectedReviews = [];
        
        for (let i = 0; i < numReviews; i++) {
            const template = reviewTemplates[Math.floor(Math.random() * reviewTemplates.length)];
            selectedReviews.push({
                id: `${productId}-review-${i + 1}`,
                content: template.content,
                author: template.author,
                rating: template.rating,
                date: template.date
            });
        }

        return selectedReviews;
    };

    const getSpecifications = (productId: number, category: string): SpecificationType[] => {
        const specificationsMap: { [key: number]: SpecificationType[] } = {
            // Gaming Mouse (Product 4)
            4: [
                {
                    title: "Key Features",
                    features: [
                        "25,500 DPI Precision sensor",
                        "Wireless 2.4GHz & Bluetooth connectivity",
                        "80-hour battery life",
                        "Customizable RGB lighting",
                        "7 programmable buttons",
                        "Ultra-lightweight 65g design"
                    ]
                },
                {
                    title: "Performance",
                    items: [
                        { label: "DPI Range", value: "100 - 25,600" },
                        { label: "Polling Rate", value: "1000 Hz" },
                        { label: "Acceleration", value: "50G" },
                        { label: "Max Speed", value: "650 IPS" }
                    ]
                },
                {
                    title: "Design",
                    items: [
                        { label: "Weight", value: "65g" },
                        { label: "Dimensions", value: "125 x 67 x 42mm" },
                        { label: "Buttons", value: "7 programmable" },
                        { label: "Battery Life", value: "80 hours" }
                    ]
                }
            ],
            // Wireless Headphones (Product 1)
            1: [
                {
                    title: "Audio Features",
                    features: [
                        "Active Noise Cancellation",
                        "30-hour battery life",
                        "Quick charge 10 min = 3 hours",
                        "Premium sound quality",
                        "Comfortable over-ear design",
                        "Voice assistant support"
                    ]
                },
                {
                    title: "Technical Specs",
                    items: [
                        { label: "Driver Size", value: "40mm" },
                        { label: "Frequency Response", value: "20Hz - 20kHz" },
                        { label: "Battery Life", value: "30 hours" },
                        { label: "Charging Time", value: "2 hours" }
                    ]
                },
                {
                    title: "Connectivity",
                    items: [
                        { label: "Bluetooth", value: "5.0" },
                        { label: "Range", value: "10 meters" },
                        { label: "Codecs", value: "SBC, AAC, aptX" },
                        { label: "Microphone", value: "Built-in" }
                    ]
                }
            ],
            // Smart Watch (Product 2)
            2: [
                {
                    title: "Health Features",
                    features: [
                        "Heart rate monitoring",
                        "Sleep tracking",
                        "Step counter",
                        "Calorie burn tracking",
                        "Water resistance 5ATM",
                        "GPS tracking"
                    ]
                },
                {
                    title: "Display",
                    items: [
                        { label: "Screen Size", value: "1.4 inches" },
                        { label: "Resolution", value: "360 x 360 pixels" },
                        { label: "Display Type", value: "AMOLED" },
                        { label: "Brightness", value: "1000 nits" }
                    ]
                },
                {
                    title: "Battery & Storage",
                    items: [
                        { label: "Battery Life", value: "7 days" },
                        { label: "Charging Time", value: "2 hours" },
                        { label: "Storage", value: "4GB" },
                        { label: "RAM", value: "512MB" }
                    ]
                }
            ],
            // Bluetooth Speaker (Product 3)
            3: [
                {
                    title: "Audio Features",
                    features: [
                        "360-degree sound",
                        "12-hour battery life",
                        "Waterproof IPX7",
                        "Voice assistant ready",
                        "Party mode pairing",
                        "Built-in microphone"
                    ]
                },
                {
                    title: "Technical Specs",
                    items: [
                        { label: "Driver Size", value: "2.25 inches" },
                        { label: "Output Power", value: "20W" },
                        { label: "Frequency Response", value: "60Hz - 20kHz" },
                        { label: "Battery Life", value: "12 hours" }
                    ]
                },
                {
                    title: "Connectivity",
                    items: [
                        { label: "Bluetooth", value: "5.0" },
                        { label: "Range", value: "30 meters" },
                        { label: "Aux Input", value: "3.5mm" },
                        { label: "USB", value: "Type-C" }
                    ]
                }
            ]
        };

        // Return specific specifications if available, otherwise return category-based defaults
        if (specificationsMap[productId]) {
            return specificationsMap[productId];
        }

        // Default specifications based on category
        const categorySpecs: { [key: string]: SpecificationType[] } = {
            "Audio": [
                {
                    title: "Audio Features",
                    features: [
                        "High-quality sound",
                        "Noise cancellation",
                        "Long battery life",
                        "Wireless connectivity",
                        "Comfortable design",
                        "Voice assistant support"
                    ]
                },
                {
                    title: "Technical Specs",
                    items: [
                        { label: "Driver Size", value: "40mm" },
                        { label: "Frequency Response", value: "20Hz - 20kHz" },
                        { label: "Battery Life", value: "20-30 hours" },
                        { label: "Bluetooth", value: "5.0" }
                    ]
                }
            ],
            "Gaming": [
                {
                    title: "Gaming Features",
                    features: [
                        "High precision sensor",
                        "Programmable buttons",
                        "RGB lighting",
                        "Ergonomic design",
                        "Fast response time",
                        "Durable construction"
                    ]
                },
                {
                    title: "Performance",
                    items: [
                        { label: "DPI Range", value: "100 - 16,000" },
                        { label: "Polling Rate", value: "1000 Hz" },
                        { label: "Acceleration", value: "40G" },
                        { label: "Max Speed", value: "400 IPS" }
                    ]
                }
            ],
            "Wearables": [
                {
                    title: "Health Features",
                    features: [
                        "Activity tracking",
                        "Heart rate monitoring",
                        "Sleep analysis",
                        "Water resistance",
                        "Long battery life",
                        "Smart notifications"
                    ]
                },
                {
                    title: "Display & Battery",
                    items: [
                        { label: "Screen Size", value: "1.3 inches" },
                        { label: "Resolution", value: "320 x 320 pixels" },
                        { label: "Battery Life", value: "5-7 days" },
                        { label: "Water Resistance", value: "5ATM" }
                    ]
                }
            ],
            "Cables": [
                {
                    title: "Cable Features",
                    features: [
                        "Fast charging support",
                        "Data transfer capability",
                        "Durable construction",
                        "Compatible with multiple devices",
                        "Tangle-free design",
                        "Premium materials"
                    ]
                },
                {
                    title: "Technical Specs",
                    items: [
                        { label: "Length", value: "1-2 meters" },
                        { label: "Connector Type", value: "USB-C to USB-A" },
                        { label: "Data Transfer", value: "USB 2.0/3.0" },
                        { label: "Charging Speed", value: "Up to 2.4A" }
                    ]
                }
            ],
            "Phone Accessories": [
                {
                    title: "Protection Features",
                    features: [
                        "Shock absorption",
                        "Scratch resistance",
                        "Precise cutouts",
                        "Easy installation",
                        "Premium materials",
                        "Multiple color options"
                    ]
                },
                {
                    title: "Compatibility",
                    items: [
                        { label: "Device Support", value: "iPhone/Android" },
                        { label: "Material", value: "Silicone/TPU" },
                        { label: "Thickness", value: "0.8mm" },
                        { label: "Warranty", value: "1 year" }
                    ]
                }
            ],
            "Charging": [
                {
                    title: "Charging Features",
                    features: [
                        "Fast wireless charging",
                        "Qi-compatible",
                        "LED indicator",
                        "Overcharge protection",
                        "Non-slip surface",
                        "Compact design"
                    ]
                },
                {
                    title: "Technical Specs",
                    items: [
                        { label: "Output Power", value: "10W/15W" },
                        { label: "Input", value: "5V/2A" },
                        { label: "Efficiency", value: "85%" },
                        { label: "Charging Distance", value: "8mm" }
                    ]
                }
            ],
            "Computer Accessories": [
                {
                    title: "Productivity Features",
                    features: [
                        "Ergonomic design",
                        "Multi-device connectivity",
                        "Backlit keys",
                        "Long battery life",
                        "Compact size",
                        "Durable construction"
                    ]
                },
                {
                    title: "Technical Specs",
                    items: [
                        { label: "Connectivity", value: "Bluetooth 5.0" },
                        { label: "Battery Life", value: "6-12 months" },
                        { label: "Range", value: "10 meters" },
                        { label: "Compatibility", value: "Windows/Mac/iOS/Android" }
                    ]
                }
            ],
            "Car Accessories": [
                {
                    title: "Car Features",
                    features: [
                        "Secure mounting",
                        "360-degree rotation",
                        "One-hand operation",
                        "Universal compatibility",
                        "Sturdy construction",
                        "Easy installation"
                    ]
                },
                {
                    title: "Specifications",
                    items: [
                        { label: "Phone Size", value: "Up to 6.5 inches" },
                        { label: "Mount Type", value: "Dashboard/Vent" },
                        { label: "Material", value: "ABS Plastic" },
                        { label: "Weight", value: "150g" }
                    ]
                }
            ],
            "Office Supplies": [
                {
                    title: "Organization Features",
                    features: [
                        "Multi-compartment design",
                        "Cable management",
                        "Space-saving",
                        "Durable materials",
                        "Easy assembly",
                        "Modern aesthetics"
                    ]
                },
                {
                    title: "Dimensions",
                    items: [
                        { label: "Size", value: "Various sizes" },
                        { label: "Material", value: "Plastic/Wood" },
                        { label: "Color Options", value: "Multiple" },
                        { label: "Weight Capacity", value: "5-10kg" }
                    ]
                }
            ]
        };

        return categorySpecs[category] || [
            {
                title: "General Features",
                features: [
                    "High-quality materials",
                    "Durable construction",
                    "User-friendly design",
                    "Reliable performance",
                    "Good value for money",
                    "Easy to use"
                ]
            }
        ];
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
        isFreeDelivery: Math.random() > 0.3, 
        specifications: getSpecifications(id, category),
        reviews: getReviews(id)
    };
}

export const products: ProductType[] = Array.from({ length: 16 }, (_, idx) => makeProduct(idx + 1));
