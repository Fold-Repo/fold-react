import { PostType } from "@/types";

const author = {
    name: "Success Sam",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
};

// Home-2 News & Articles Posts (starting from ID 24)
export const home2NewsArticles: PostType[] = [
    {
        id: 24,
        slug: "bringing-food-production-back-to-cities",
        title: "Bringing Food Production Back To Cities",
        subtitle: "Urban agriculture is revolutionizing how we think about food production and sustainability in metropolitan areas.",
        content: "Urban agriculture is transforming the way we produce food in cities. From rooftop gardens to vertical farming, innovative approaches are making fresh, local produce more accessible to urban populations. This movement not only addresses food security but also promotes environmental sustainability and community engagement.",
        image: "/img/blog/agric/1.png",
        category: "Production",
        tags: ["Agriculture", "Urban Farming", "Sustainability"],
        author,
        publishedAt: "2025-05-20",
        readMinutes: 5
    },
    {
        id: 25,
        slug: "sustainable-farming-practices-for-future",
        title: "Sustainable Farming Practices for Future",
        subtitle: "Exploring innovative farming techniques that protect the environment while ensuring food security for growing populations.",
        content: "Sustainable farming practices are essential for the future of agriculture. These methods focus on soil health, water conservation, and biodiversity while maintaining high crop yields. From organic farming to precision agriculture, these approaches help farmers adapt to climate change and reduce environmental impact.",
        image: "/img/blog/agric/2.png",
        category: "Production",
        tags: ["Sustainability", "Farming", "Environment"],
        author,
        publishedAt: "2025-05-18",
        readMinutes: 4
    },
    {
        id: 26,
        slug: "organic-food-trends-and-consumer-demand",
        title: "Organic Food Trends and Consumer Demand",
        subtitle: "Understanding the growing consumer preference for organic products and its impact on the agricultural industry.",
        content: "The organic food market continues to grow as consumers become more health-conscious and environmentally aware. This trend is driving farmers to adopt organic practices and creating new opportunities in the agricultural sector. Understanding consumer preferences is key to meeting this growing demand.",
        image: "/img/blog/agric/3.png",
        category: "Production",
        tags: ["Organic", "Consumer Trends", "Health"],
        author,
        publishedAt: "2025-05-15",
        readMinutes: 6
    },
    {
        id: 27,
        slug: "technology-in-modern-agriculture",
        title: "Technology in Modern Agriculture",
        subtitle: "How digital innovations are revolutionizing farming practices and improving efficiency in agricultural operations.",
        content: "Technology is playing an increasingly important role in modern agriculture. From drones and sensors to AI-powered crop management, these innovations are helping farmers make data-driven decisions and optimize their operations. This digital transformation is making farming more efficient and sustainable.",
        image: "/img/blog/agric/1.png",
        category: "Production",
        tags: ["Technology", "Innovation", "Farming"],
        author,
        publishedAt: "2025-05-12",
        readMinutes: 7
    }
];
