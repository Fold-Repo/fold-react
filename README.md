# Fold React - E-commerce Platform

A modern, responsive e-commerce platform built with Next.js 15, React 19, and TypeScript. This project features multiple home page layouts, product management, shopping cart functionality, and a comprehensive admin system.

## 🚀 Features

- **Multiple Home Page Layouts**: 7 different home page designs with unique sections and components
- **Product Management**: Complete product catalog with categories, reviews, and specifications
- **Shopping Cart**: Full cart functionality with quantity management and checkout
- **User Authentication**: Sign in, sign up, and password recovery
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode Support**: Built-in dark/light theme switching
- **API Integration**: RESTful API with React Query for data fetching
- **State Management**: Redux Toolkit with persistence
- **Animations**: AOS (Animate On Scroll) and Framer Motion
- **Type Safety**: Full TypeScript implementation

## 📋 Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fold-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build & Deployment

### Development Build
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 📁 Project Structure

```
fold-react/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes
│   │   ├── layout.tsx           # Auth layout
│   │   ├── signin/              # Sign in page
│   │   └── signup/              # Sign up page
│   ├── about/                    # About pages
│   │   ├── about-2/             # About page variant 2
│   │   ├── about-3/             # About page variant 3
│   │   ├── about-4/             # About page variant 4
│   │   └── page.tsx             # Main about page
│   ├── api/                      # API routes
│   │   ├── home-1/              # Home page 1 API endpoints
│   │   ├── home-2/              # Home page 2 API endpoints
│   │   ├── home-3/              # Home page 3 API endpoints
│   │   ├── home-4/              # Home page 4 API endpoints
│   │   ├── home-5/              # Home page 5 API endpoints
│   │   ├── home-6/              # Home page 6 API endpoints
│   │   ├── home-7/              # Home page 7 API endpoints
│   │   ├── post/                # Blog post API endpoints
│   │   └── product/             # Product API endpoints
│   ├── blog/                     # Blog pages
│   │   ├── [id]/                # Dynamic blog post
│   │   ├── blog-details-1/      # Blog details variant 1
│   │   ├── blog-details-2/      # Blog details variant 2
│   │   ├── blog-details-3/      # Blog details variant 3
│   │   ├── blog-details-4/      # Blog details variant 4
│   │   ├── blog-list-2/         # Blog list variant 2
│   │   └── page.tsx             # Main blog page
│   ├── contact/                  # Contact pages
│   │   ├── contact-2/           # Contact page variant 2
│   │   ├── contact-3/           # Contact page variant 3
│   │   └── page.tsx             # Main contact page
│   ├── home/                     # Home page variants
│   │   ├── home-2/              # Home page 2
│   │   ├── home-3/              # Home page 3
│   │   ├── home-4/              # Home page 4
│   │   ├── home-5/              # Home page 5
│   │   ├── home-6/              # Home page 6
│   │   ├── home-7/              # Home page 7
│   │   └── page.tsx             # Main home page (Home-1)
│   ├── pages/                    # Utility pages
│   │   ├── cart/                # Shopping cart pages
│   │   ├── payment/             # Payment pages
│   │   └── wishlist/            # Wishlist page
│   ├── products/                 # Product pages
│   │   ├── [id]/                # Dynamic product page
│   │   ├── detail/              # Product detail variants
│   │   ├── style-2/             # Product style variant 2
│   │   └── page.tsx             # Main products page
│   ├── providers/                # React providers
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Root page
├── components/                   # Reusable components
│   ├── blog/                    # Blog components
│   ├── cards/                   # Card components
│   │   ├── blog/                # Blog card variants
│   │   ├── category/            # Category card variants
│   │   ├── order/               # Order card variants
│   │   ├── post/                # Post card variants
│   │   ├── product/             # Product card variants
│   │   ├── review/              # Review card variants
│   │   ├── service/             # Service card variants
│   │   ├── testimony/           # Testimony card variants
│   │   └── CollectionCard.tsx   # Collection card
│   ├── carousel/                # Carousel components
│   ├── cart/                    # Shopping cart components
│   ├── checkout/                # Checkout components
│   ├── footer/                  # Footer component
│   ├── header/                  # Header components
│   ├── order/                   # Order components
│   ├── payments/                # Payment components
│   ├── products/                # Product components
│   ├── reusable/                # Reusable UI components
│   ├── skeleton/                # Loading skeleton components
│   ├── ui/                      # UI components
│   └── index.ts                 # Component exports
├── constants/                    # Application constants
│   ├── contact.tsx              # Contact information
│   ├── endpoint.ts              # API endpoints
│   ├── footer.ts                # Footer data
│   ├── nav.ts                   # Navigation data
│   ├── returnPolicy.ts          # Return policy data
│   ├── shippingReturn.ts        # Shipping & return data
│   └── index.ts                 # Constants exports
├── data/                        # Static data
│   ├── home-1.ts                # Home page 1 data
│   ├── home-2.ts                # Home page 2 data
│   ├── home-2-posts.ts          # Home page 2 blog posts
│   ├── home-3.ts                # Home page 3 data
│   ├── home-4.ts                # Home page 4 data
│   ├── home-5.ts                # Home page 5 data
│   ├── home-6.ts                # Home page 6 data
│   ├── home-7.ts                # Home page 7 data
│   ├── post.ts                  # Blog post data
│   ├── product.ts               # Product data
│   └── index.ts                 # Data exports
├── hooks/                       # Custom React hooks
│   ├── useClickOutside.ts       # Click outside hook
│   ├── useCountdown.ts          # Countdown timer hook
│   ├── useGoBack.ts             # Navigation hook
│   ├── useQueryParams.ts        # Query parameters hook
│   └── index.ts                 # Hooks exports
├── lib/                         # Utility libraries
│   ├── axiosConfig.ts           # Axios configuration
│   ├── classname.ts             # Class name utilities
│   ├── formatCurrency.ts        # Currency formatting
│   ├── schema.ts                # Validation schemas
│   └── index.ts                 # Library exports
├── public/                      # Static assets
│   ├── icon/                    # Icons
│   └── img/                     # Images
│       ├── home/                # Home page images
│       ├── users/               # User avatars
│       └── products/            # Product images
├── service/                     # API service layer
│   ├── home-1/                  # Home page 1 services
│   ├── home-2/                  # Home page 2 services
│   ├── home-3/                  # Home page 3 services
│   ├── home-4/                  # Home page 4 services
│   ├── home-5/                  # Home page 5 services
│   ├── home-6/                  # Home page 6 services
│   ├── home-7/                  # Home page 7 services
│   ├── hooks/                   # Service hooks
│   ├── post/                    # Blog post services
│   ├── product/                 # Product services
│   └── index.ts                 # Service exports
├── store/                       # Redux store
│   ├── hooks/                   # Redux hooks
│   ├── slices/                  # Redux slices
│   ├── hooks.ts                 # Typed hooks
│   └── index.ts                 # Store exports
├── types/                       # TypeScript type definitions
│   ├── auth.ts                  # Authentication types
│   ├── cart.ts                  # Cart types
│   ├── categories.ts            # Category types
│   ├── footer.ts                # Footer types
│   ├── nav.ts                   # Navigation types
│   ├── payment.ts               # Payment types
│   ├── post.ts                  # Blog post types
│   ├── product.ts               # Product types
│   ├── review.ts                # Review types
│   ├── service.ts               # Service types
│   ├── wishlist.ts              # Wishlist types
│   └── index.ts                 # Type exports
├── utils/                       # Utility functions
│   ├── debounce.ts              # Debounce utility
│   ├── helper.ts                # Helper functions
│   ├── internetCheck.tsx        # Internet connectivity check
│   ├── paginate.ts              # Pagination utility
│   └── index.ts                 # Utility exports
├── views/                       # Page view components
│   ├── about/                   # About page views
│   ├── auth/                    # Authentication views
│   ├── blog/                    # Blog page views
│   ├── contacts/                # Contact page views
│   ├── home/                    # Home page views
│   │   ├── home-1/              # Home page 1 view
│   │   ├── home-2/              # Home page 2 view
│   │   ├── home-3/              # Home page 3 view
│   │   ├── home-4/              # Home page 4 view
│   │   ├── home-5/              # Home page 5 view
│   │   ├── home-6/              # Home page 6 view
│   │   └── home-7/              # Home page 7 view
│   ├── pages/                   # Utility page views
│   ├── products/                # Product page views
│   └── index.ts                 # View exports
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── postcss.config.mjs           # PostCSS configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # This file
```

## 🏠 Home Page Variants

### Home Page 1 (Main)
- **Route**: `/`
- **Features**: Hero banner, collections, trending products, popular products, discount section
- **Components**: `HeroBanner`, `Collections`, `TrendingProducts`, `PopularProducts`, `GetDiscount`

### Home Page 2
- **Route**: `/home/home-2`
- **Features**: Best categories, popular products, news articles
- **Components**: `BestCategories`, `PopularProducts`, `NewsArticles`

### Home Page 3
- **Route**: `/home/home-3`
- **Features**: Deals, special products, shop by room
- **Components**: `DealsYouCantMiss`, `SpecialProducts`, `ShopByRoom`

### Home Page 4
- **Route**: `/home/home-4`
- **Features**: Beauty services, recommended services, testimonials
- **Components**: `ExperienceMakingBeauty`, `RecommendedServices`, `Testimonials`

### Home Page 5
- **Route**: `/home/home-5`
- **Features**: Categories, flash sales, explore collection
- **Components**: `CategoriesSection`, `FlashSalesSection`, `ExploreCollectionSection`

### Home Page 6
- **Route**: `/home/home-6`
- **Features**: Best categories, new collection, best sellers, our products, deal of the day
- **Components**: `BestCategoriesSection`, `NewCollectionSection`, `BestSellerProductsSection`, `OurProductSection`, `DealOfTheDaySection`

### Home Page 7
- **Route**: `/home/home-7`
- **Features**: Categories, top sellers, new arrivals, winter collection, testimonials
- **Components**: `CategoriesSection`, `TopSellersSection`, `DiscoverNewArrivalsSection`, `NewWinterCollectionSection`, `TestimonialsSection`

## 🛒 E-commerce Features

### Product Management
- **Product Cards**: 8 different product card variants
- **Product Details**: Multiple product detail page layouts
- **Categories**: Hierarchical category system
- **Reviews**: Product review system with ratings
- **Wishlist**: Add/remove products from wishlist
- **Search**: Product search functionality

### Shopping Cart
- **Cart Management**: Add, remove, update quantities
- **Cart Persistence**: Cart state persists across sessions
- **Checkout Process**: Multi-step checkout flow
- **Payment Integration**: Multiple payment methods

### User Authentication
- **Sign In/Sign Up**: User registration and login
- **Password Recovery**: Forgot password functionality
- **User Profiles**: User account management

## 🎨 Design System

### Components
- **Cards**: Product, blog, category, service, testimony cards
- **Forms**: Input fields, buttons, validation
- **Navigation**: Header, mobile menu, breadcrumbs
- **Layout**: Grid systems, containers, sections
- **Animations**: AOS animations, hover effects

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Dark Mode**: Built-in dark/light theme support
- **Responsive**: Mobile-first responsive design
- **Custom Components**: Reusable UI components

## 🔧 Technology Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **React 19**: Latest React version
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **AOS**: Animate On Scroll library

### State Management
- **Redux Toolkit**: Predictable state container
- **React Query**: Server state management
- **Redux Persist**: State persistence

### UI Components
- **HeroUI**: Modern UI component library
- **Heroicons**: Beautiful SVG icons
- **React Icons**: Popular icon library
- **Swiper**: Touch slider component

### Forms & Validation
- **React Hook Form**: Performant forms
- **Yup**: Schema validation
- **React OTP Input**: OTP input component

### Development Tools
- **ESLint**: Code linting
- **TypeScript**: Static type checking
- **Turbopack**: Fast bundler (development)

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

Built-in dark mode support with:
- System preference detection
- Manual toggle
- Persistent theme selection
- Consistent styling across all components

## 🚀 Performance

- **Next.js Optimization**: Automatic code splitting, image optimization
- **React Query**: Efficient data fetching and caching
- **Lazy Loading**: Component and image lazy loading
- **Bundle Optimization**: Tree shaking and minification

## 📊 API Structure

### Endpoints
- **Home Pages**: `/api/home-{1-7}/...`
- **Products**: `/api/product/...`
- **Blog Posts**: `/api/post/...`

### Data Flow
1. **API Routes**: Next.js API routes handle server-side logic
2. **Service Layer**: Service functions for API calls
3. **React Query**: Client-side data fetching and caching
4. **Components**: UI components consume data

## 🔒 Security

- **Type Safety**: Full TypeScript implementation
- **Input Validation**: Form validation with Yup schemas
- **Error Handling**: Comprehensive error handling
- **API Security**: Secure API endpoints

## 📈 SEO & Accessibility

- **SEO Optimized**: Meta tags, structured data
- **Accessibility**: ARIA labels, keyboard navigation
- **Performance**: Core Web Vitals optimization
- **Semantic HTML**: Proper HTML structure

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ using Next.js, React, and TypeScript**