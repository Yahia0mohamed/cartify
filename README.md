# 🛒 Cartify

Cartify is a modern **Angular e-commerce web app** powered by the [Fake Store API](https://fakestoreapi.com/).  
It features **product browsing**, **shopping cart management**, **user authentication**, and upcoming **admin features** for managing products and orders.

---

## 🚀 Features

### 🧭 User Features
- Browse products by category
- View detailed product information
- Add / remove items from the cart
- Update item quantities in the cart
- View total price dynamically
- User authentication (login / register)
- Responsive and modern UI

### ⚙️ Admin Features (in progress)
- Add, update, and delete products  
- Manage users and orders  
- Dashboard for key store metrics  

---

## 🧩 Architecture Overview

Cartify follows a **modular Angular architecture** for scalability and maintainability:

```

src/
├── app/
│   ├── core/           # Singleton services, routing, interceptors, app-wide config
│   ├── features/       # Main app features (auth, products, cart, admin, etc.)
│   ├── shared/         # Reusable components, pipes, directives
│   └── app.module.ts
├── assets/
├── environments/
└── styles.css

```

---

## 🛠️ Tech Stack

- **Angular** 16
- **TypeScript**
- **RxJS / NgRx** for state management
- **TailwindCSS** for styling
- **Fake Store API** for backend simulation

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Yahia0mohamed/cartify.git
   cd cartify

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the app**

   ```bash
   ng serve
   ```

4. **Open in browser**

   ```
   http://localhost:4200
   ```

---

## 🌍 API Source

All data is fetched from the [Fake Store API](https://fakestoreapi.com/).
You can replace it later with your own backend or a real e-commerce API.

---

## 🧠 Future Enhancements

* Full admin dashboard
* Wishlist & favorites
* Payment gateway integration
* Dark mode support

---

## 🧑‍💻 Author

**Yahia Mohamed**
💼 [LinkedIn]([https://www.linkedin.com/](https://www.linkedin.com/in/0yr003/)) • 🌐 [Portfolio]([https://github.com/yahia0mohamed](https://yahia-mohamed-portfiolio.netlify.app/))

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use and modify it.

---

> Cartify — Simple. Modular. Scalable.
