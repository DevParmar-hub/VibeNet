# VibeNet
VibeNet is a full-stack social media web app I built mainly to dive deeper into and learn more about full-stack programs.

Instead of just following tutorials, I wanted to build something end-to-end — authentication, posts, profiles, interactions, and user relationships — and figure things out by breaking and fixing them along the way.

# Features
Accounts & Auth
• Sign up, log in, and log out
• Auth-protected routes (you can’t access private pages without logging in)
• Secure authentication flow

Profiles
• Create and edit your own profile
• View other users’ profiles
• Follow and unfollow other accounts

Posts & Interactions
• Create and upload posts
• See posts from other users
• Like posts
• Add comments

Image Uploads
• Images for posts are handled using Cloudinary
• Media is uploaded, stored, and served from the cloud

# Tech Stack

Frontend
 • React
 • React Router
 • CSS / Tailwind (where applicable)

Backend
 • Node.js
 • Express.js
 • MongoDB (Mongoose)
 • JWT authentication

Services
 • Cloudinary (image uploads)
 • MongoDB Atlas

 # Note
For obvious security reasons, this repository does not contain real credentials.
• I’ve added placeholders where:
• MongoDB connection strings
• Cloudinary API keys
• JWT secrets
If you want to run this locally, you’ll need to add your own values in a .env file.

