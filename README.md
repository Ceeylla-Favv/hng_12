# **HNG12 Stage 0 - Public API**  

This is a simple **public API** built using **Node.js and Express.js** for **HNG12 Stage 0**. The API provides the following information:  

- Your **HNG12 registered email**  
- The **current date and time** in **ISO 8601 format** (UTC)  
- The **GitHub repository URL** of the project  

The API is deployed to a **public endpoint**, allowing anyone to retrieve this information via a simple `GET` request.  

---

## **📌 Features**
✅ **Lightweight & Fast**: The API responds in **<500ms**  
✅ **CORS Enabled**: Can be accessed from any frontend or backend application  
✅ **Deployed Publicly**: Hosted on **Render** for free access  
✅ **Version Controlled**: Codebase is hosted on **GitHub**  

---

## **📌 Technology Stack**
This project is built with:  
- **Node.js** - A fast and scalable JavaScript runtime  
- **Express.js** - A minimalist web framework for handling HTTP requests  
- **Dotenv** - Loads environment variables for configuration  
- **CORS** - Handles cross-origin requests  

---

## **🚀 API Documentation**
### **🔹 Base URL**  
The API is publicly accessible at:  
```plaintext
https://hng-12-n4xt.onrender.com
```

### **🔹 Endpoint**
| Method | URL | Description |
|--------|-----|-------------|
| `GET` | `/` | Returns JSON with email, current datetime, and GitHub repo link |

---

### **🔹 Response Example (200 OK)**
```json
{
  "email": "your-hng12@mail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/hng_12"
}
```

📌 **Field Descriptions**:  
- **email** - Your HNG12 registered email  
- **current_datetime** - The current **UTC timestamp** in **ISO 8601** format  
- **github_url** - Link to the project’s GitHub repository  

---

## **📌 Getting Started**
### **🔹 1. Clone the Repository**
```bash
git clone https://github.com/Ceeylla-Favv/hng_12
cd hng12-stage0
```

### **🔹 2. Install Dependencies**
```bash
npm install
```

### **🔹 3. Configure Environment Variables**
Create a `.env` file in the root directory and add your credentials:  
```
EMAIL=your-hng-email@example.com
GITHUB_URL=https://github.com/yourusername/hng12-stage0
PORT=3000
```

### **🔹 4. Start the Server**
Run the API locally using:  
```bash
npm start
```
The API will start on:  
```plaintext
http://localhost:3000/
```

---

## **📌 Deployment**
### **🔹 Deploying to Render**
1. Push your project to **GitHub**:  
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
2. Go to **[Render](https://render.com/)**  
3. Click **New Web Service**  
4. Connect your **GitHub Repository**  
5. Set the **PORT environment variable** to `3000`  
6. Click **Deploy**  

📌 Your public API will be available at:  
```plaintext
https://hng12-api.onrender.com/
```

---

## **📌 Example Usage**
You can fetch data from the API using **cURL**, **Postman**, or JavaScript.

### **🔹 Fetch with cURL**
```bash
curl -X GET https://hng12-api.onrender.com/
```

### **🔹 Fetch with JavaScript**
```javascript
fetch("https://hng12-api.onrender.com/")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
``` 

---

## **📌 Hire a Node.js Developer**
Looking for experienced **Node.js developers**? Check out:  
🔗 [Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)  

---

