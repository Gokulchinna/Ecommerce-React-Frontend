# 🛒 Amazon-Style E-Commerce React Frontend

A modern, high-performance, and feature-rich E-Commerce frontend web application built using **React 19**, **Vite 6**, and **React Router v7**. This project replicates a complete shopping workflow—including a dynamic product grid, a detailed multi-step checkout experience, order histories, and real-time package delivery tracking.

---

## 🌟 Key Features

*   **🔍 Live Product Catalog & Search**: Browse a responsive grid of products complete with ratings, prices, and high-quality images. Filter products in real-time using the instant search bar.
*   **🛒 Interactive Shopping Cart**: Add products with custom quantities (1-10) directly from the home page. Cart badges dynamically update in the header.
*   **💳 Robust Checkout System**:
    *   Review cart items with live updates.
    *   Modify item quantities inline or delete them completely.
    *   Choose between multiple shipping options (with dynamic delivery date formatting via `dayjs` and real-time pricing recalculations).
    *   Automatic live breakdown of cost, shipping, estimated 10% tax, and order totals.
*   **📦 Order Management & Re-buying**:
    *   Full history of placed orders with precise placement time and total costs.
    *   "Buy Again" shortcuts to instantly re-add past purchases to the cart.
*   **📍 Real-Time Delivery Tracking**:
    *   Visual progress tracker (Preparing ➜ Shipped ➜ Delivered) indicating shipping status.
    *   Dynamic calculation of arrival time and status progress bars based on real-time differences.
*   **⚡ Modern Component Architecture**: Highly modular structure with fully decoupled, reusable UI components and dedicated, non-leaking CSS files.
*   **🧪 Fully Tested**: Robust test suite covering component rendering, routing simulations, Axios mock integrations, and utility functions using **Vitest** and **React Testing Library**.

---

## 🛠️ Technology Stack

| Technology | Category | Purpose |
| :--- | :--- | :--- |
| **React 19** | Core Framework | Building interactive UI using state, effects, and modern React APIs |
| **Vite 6** | Build & Dev Tooling | Fast dev server, instant HMR, and optimized build pipeline |
| **React Router v7** | Routing | Declarative routing (`/`, `/checkout`, `/orders`, `/tracking/:orderId/:productId`) |
| **Axios** | HTTP Client | Communicating with the backend APIs via proxies |
| **DayJS** | Date Formatting | Dynamic handling of estimated delivery dates and order times |
| **Vanilla CSS** | Styling | Premium, clean layout styles matching Amazon's UI theme |
| **Vitest & JSDOM** | Testing Framework | Execution of lightning-fast unit and integration test suites |
| **Testing Library** | Component Testing | Simulating user interactions and validating DOM trees |

---

## 📁 Project Structure

The project is structured logically around features, ensuring that styles and assets live right next to the logic they represent:

```text
Ecommerce-React-Frontend/
├── public/                 # Static public assets (e.g. rating stars, favicon icons)
├── src/
│   ├── assets/             # Global visual assets, logos, and UI icons
│   ├── components/         # Shared global components
│   │   ├── Header.jsx      # Navigation header (search, order links, cart quantity)
│   │   └── Header.css      # Header specific styling
│   ├── pages/              # Routing pages and local subcomponents
│   │   ├── home/           # HomePage, ProductsGrid, Product components & tests
│   │   ├── checkout/       # CheckoutPage, OrderSummary, PaymentSummary components
│   │   ├── orders/         # OrderPage, OrdersGrid, OrderHeader, OrderDetails
│   │   ├── NotFoundPage    # Friendly 404 fallback page
│   │   └── TrackingPage    # Dynamic tracking progress bar and order status page
│   ├── utils/              # Helper utilities (currency formatting & tests)
│   ├── App.jsx             # Main Router structure & global cart state loader
│   ├── index.css           # Global typography and CSS custom variables
│   └── main.jsx            # React root application bootstrap entry point
├── eslint.config.js        # ESLint rule configurations
├── package.json            # Scripts and package dependencies
├── setupTests.js           # Vitest setup file loading Jest-DOM extensions
├── vite.config.js          # Vite configurations + Backend API routing proxy setup
└── vitest.config.js        # Vitest configurations for JSDOM and globals
```

---

## 🚀 Getting Started

### 1. Prerequisites

Ensure you have **Node.js** (v18+ recommended) installed on your system.

### 2. Installation

Clone the repository and install the dependencies:

```bash
npm install
```

### 3. Run the Development Server

The application is configured to proxy API requests to a backend server running on `http://localhost:3000`. Make sure your backend service is running, then start the frontend developer server:

```bash
npm run dev
```

The app will start at `http://localhost:5173/` (or the next available port).

### 4. Build for Production

To compile and optimize the application for production:

```bash
npm run build
```

---

## 🧪 Running Tests

The project utilizes **Vitest** for unit and integration testing.

To run all tests once:
```bash
npx vitest run
```

To run tests in watch mode (interactive development):
```bash
npx vitest
```

### Test Scope:
*   `src/utils/money.test.js`: Validates accurate formatting of cents into standard USD string displays.
*   `src/pages/home/Product.test.jsx`: Confirms exact rendering of ratings, names, image paths, and mocks cart updates via `axios.post`.
*   `src/pages/home/HomePage.test.jsx`: Mocks product data retrieval and guarantees complete rendering of products inside the DOM.

---

## 🔄 API Integrations (Backend Proxy)

The development server includes built-in API proxying configured in [vite.config.js](file:///c:/Users/Gokul/Ecommerce-React-Frontend/vite.config.js) to resolve requests locally and prevent CORS issues:

```javascript
server: {
  proxy: {
    '/api' :  { target: 'http://localhost:3000' },
    '/images' : { target: 'http://localhost:3000' }
  }
}
```

### Key API Endpoints Used:
*   `GET /api/products` & `GET /api/products?search=query`: Fetches catalog item inventories.
*   `GET /api/cart-items?expand=product`: Retrieves cart items containing detailed product associations.
*   `POST /api/cart-items`: Adds a new product to the customer's cart.
*   `PUT /api/cart-items/:productId`: Modifies quantity or active delivery option for a cart item.
*   `DELETE /api/cart-items/:productId`: Removes an item from the cart.
*   `GET /api/delivery-options?expand=estimatedDeliveryTime`: Loads available shipping timelines and rates.
*   `GET /api/payment-summary`: Calculates subtotal, tax, and order totals.
*   `POST /api/orders`: Submits checkout cart items and creates a historical purchase order.
*   `GET /api/orders?expand=products`: Fetches order histories along with detailed product associations.
*   `GET /api/orders/:orderId?expand=products`: Fetches a single order's details for real-time tracking.

---

## 🎨 Design System

All styles are carefully maintained via **Vanilla CSS** leveraging clean naming conventions, fluid layouts, responsive breakpoints, hover transitions, and a premium Amazon-inspired aesthetic (dark headers, contrasting primary orange buttons, micro-interactions, and visual status progress bars).
