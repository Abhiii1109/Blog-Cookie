# Minimal Blog Platform

A clean, minimal blog platform with user authentication and cookie-based sessions built with Node.js, Express, MongoDB, and EJS.

## Features

### Authentication System

- ✅ User Sign Up with password hashing (bcryptjs)
- ✅ User Sign In with JWT authentication
- ✅ HTTP-only cookies for secure session management
- ✅ Protected routes (only authenticated users can create blogs)
- ✅ Logout functionality

### Blog Management

- ✅ Create blog posts (authenticated users only)
- ✅ View all blog posts (public access)
- ✅ View single blog post details (public access)
- ✅ Author information automatically attached to blogs
- ✅ Timestamp tracking for all posts

### Design

- ✅ Minimal, clean UI with neutral colors
- ✅ No gradients - pure, simple aesthetics
- ✅ Responsive card-based layout
- ✅ Inter font family for modern typography
- ✅ Soft shadows and rounded corners

## Tech Stack

**Backend:**

- Node.js
- Express.js
- MongoDB with Mongoose
- Cookie-parser
- bcryptjs (password hashing)
- jsonwebtoken (JWT authentication)
- dotenv (environment variables)

**Frontend:**

- EJS (Embedded JavaScript templates)
- Vanilla CSS
- Google Fonts (Inter)

**Database:**

- MongoDB (local instance)
- MongoDB Compass for visualization

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB installed and running locally
- MongoDB Compass (optional, for database visualization)

### Steps

1. **Clone or navigate to the project directory:**

   ```bash
   cd c:/Users/yashp/Desktop/wOrK/Node.js/Blog
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   The `.env` file is already created with default values:

   ```
   MONGO_URI=mongodb://127.0.0.1:27017/blogApp
   JWT_SECRET=your_super_secret_jwt_key_change_this_in_production_please_make_it_very_long_and_random
   PORT=3000
   ```

   **Important:** Change the `JWT_SECRET` to a secure random string in production!

4. **Ensure MongoDB is running:**

   ```bash
   # On Windows, MongoDB should be running as a service
   # Or manually start it with:
   mongod
   ```

5. **Start the application:**

   **Development mode (with auto-reload):**

   ```bash
   npm run dev
   ```

   **Production mode:**

   ```bash
   npm start
   ```

6. **Open your browser:**
   ```
   http://localhost:3000
   ```

## MongoDB Compass Connection

To view your database in MongoDB Compass:

1. Open MongoDB Compass
2. Use this connection string:
   ```
   mongodb://127.0.0.1:27017/blogApp
   ```
3. Click "Connect"
4. You'll see two collections:
   - `users` - All registered users
   - `blogs` - All blog posts with author references

## Project Structure

```
Blog/
│
├── models/
│   ├── User.js           # User schema (name, email, password, createdAt)
│   └── Blog.js           # Blog schema (title, content, author, createdAt)
│
├── routes/
│   ├── authRoutes.js     # Authentication routes
│   └── blogRoutes.js     # Blog routes
│
├── controllers/
│   ├── authController.js # Auth logic (signup, signin, logout)
│   └── blogController.js # Blog CRUD operations
│
├── middlewares/
│   └── authMiddleware.js # JWT verification & route protection
│
├── views/
│   ├── layout.ejs        # Base template (not currently used)
│   ├── login.ejs         # Login page
│   ├── register.ejs      # Sign up page
│   ├── createBlog.ejs    # Create blog form
│   ├── blogs.ejs         # All blogs listing
│   └── blogDetail.ejs    # Single blog view
│
├── public/
│   └── css/
│       └── style.css     # Minimal CSS styling
│
├── config/
│   └── db.js             # MongoDB connection
│
├── .env                  # Environment variables
├── .gitignore            # Git ignore file
├── server.js             # Main application entry point
└── package.json          # Dependencies and scripts
```

## API Endpoints / Routes

### Authentication Routes

- `GET /register` - Render registration page
- `POST /register` - Create new user account
- `GET /login` - Render login page
- `POST /login` - Authenticate user and set cookie
- `GET /logout` - Clear authentication cookie

### Blog Routes

- `GET /` - Homepage (redirects to blogs)
- `GET /blogs` - View all blog posts
- `GET /blogs/:id` - View single blog post
- `GET /blogs/create` - Render create blog form (protected)
- `POST /blogs/create` - Submit new blog post (protected)

## Usage Guide

### 1. Register a New Account

- Navigate to `/register`
- Enter your name, email, and password (min 6 characters)
- Submit the form
- You'll be automatically logged in and redirected to the blogs page

### 2. Login

- Navigate to `/login`
- Enter your email and password
- Submit the form
- JWT token will be stored in an HTTP-only cookie

### 3. Create a Blog

- After logging in, click "Create Blog" in the navbar
- Enter a title and content
- Click "Publish Blog"
- Your blog will appear on the main page

### 4. View Blogs

- All users (logged in or not) can view blogs
- Click on any blog card to read the full content
- Author name and published date are displayed

### 5. Logout

- Click "Logout" in the navbar
- Your authentication cookie will be cleared
- You'll be redirected to the login page

## Security Features

✅ **Password Hashing** - Passwords are hashed using bcryptjs with salt rounds  
✅ **HTTP-Only Cookies** - JWT tokens stored in HTTP-only cookies (not accessible via JavaScript)  
✅ **JWT Expiration** - Tokens expire after 30 days  
✅ **Protected Routes** - Middleware checks authentication before allowing access  
✅ **Input Validation** - Basic validation on forms and schemas  
✅ **Secure Production Mode** - Cookie secure flag enabled in production

## Testing Checklist

- [ ] Register a new user → Verify in MongoDB Compass
- [ ] Check that password is hashed in database
- [ ] Login with credentials → Check cookie in browser DevTools
- [ ] Try accessing `/blogs/create` without login (should be protected)
- [ ] Create a blog post while logged in
- [ ] Verify blog appears in `blogs` collection with correct author ID
- [ ] View all blogs on homepage
- [ ] Click and view single blog details
- [ ] Logout and verify cookie is cleared

## Troubleshooting

**MongoDB Connection Error:**

- Ensure MongoDB is running: `mongod`
- Check connection string in `.env`
- Try `mongodb://localhost:27017/blogApp` instead of `127.0.0.1`

**Port Already in Use:**

- Change `PORT` in `.env` file to a different port (e.g., 3001)

**Dependencies Not Installing:**

- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again

**Cookies Not Working:**

- Check browser privacy settings
- Ensure you're accessing via `localhost` not IP address
- Clear browser cache and cookies

## Future Enhancements

- [ ] Edit/Delete blog posts (author only)
- [ ] User profile pages
- [ ] Pagination for blog lists
- [ ] Search functionality
- [ ] Rich text editor (Markdown support)
- [ ] Image uploads
- [ ] Comments system
- [ ] Like/favorite blogs
- [ ] Categories and tags

## License

ISC

## Author

Built as a minimal blog platform demonstration with clean design principles.
