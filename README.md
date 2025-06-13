hello! Thank you to view my code!😊

This URL shortener is my first ever system design related project.

## 🌐 Live Preview

You can try the app here:  
🔗 [URL Shortener Live Demo](https://url-shortener-by-syed.netlify.app)

## 📁 Repo Link

🛠️ [Backend Code](https://github.com/Syed-Ibrahim786/url-shortener)  
🎨 [Frontend Code](https://github.com/Syed-Ibrahim786/url-shortener-frontend)



# 🔗 URL Shortener App

A simple and efficient URL Shortener web application built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It allows users to shorten long URLs and redirect using custom or system-generated short links.


## 🚀 Features

- 🔐 Shortens any valid URL
- 📥 Stores original and short URLs in MongoDB
- 🔁 Redirects short URL to the original URL
- 📊 Tracks usage (can be extended)
- ⚡ Built using modern tools (Vite, React, Node, Express)


## 🛠️ Tech Stack

- **Frontend**: React.js, Vite, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)

## **Abstract view**

Just like traditional shortener, the server side script gets POST request along with :

  - long URL that must be shortened.
  
  - A Custom Alias to be used as short URL 
  
  These come inside request body.
  
Validate the provided URL .

if Alias is not provided create a random but unique URL.

store the long URL, short URL generated along with created time and clicks counts for Analysis purpose.

Now user can copy the short URL and view in page and use it anywhere.


