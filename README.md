# 📍 Property Coordinates Lookup App

A Node.js + Express app to **look up the geographic coordinates** (latitude and longitude) of property addresses using the [OpenStreetMap Nominatim API](https://nominatim.org/).

---

## 💡 What It Does

- 🌐 Accepts property data (title, price, address, agent, agency) in a form
- 📍 Uses the **address** to query the OpenStreetMap API and retrieve the latitude and longitude of the property
- 🔁 Displays the response including the original input + fetched location data (latitude and longitude)
- 🧪 Keeps a record of all submitted properties in JSON format

---

## 📁 Folder Structure

```
PROPERTY-API/
├── controllers/
│   └── propertyController.js       
├── models/
│   ├── Agent.js                   
│   ├── Property.js                
│   └── User.js                    
├── public/
│   └── index.html                 
├── routes/
│   └── propertyRoutes.js          
├── services/
│   └── propertyService.js          # OpenStreetMap service
├── .env                            
├── index.js                        
├── package.json
└── package-lock.json
```

---

## 🛠 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/myousafzafar/property-coordinates-lookup.git
cd property-coordinates-lookup
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add `.env` file

```env
PORT=3000
```

### 4. Run the App

```bash
node index.js
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🚀 Features

- 🏘️ Submit property data through a clean HTML form
- 📦 Backend stores all properties in memory
- 🌍 Converts addresses into real geographic coordinates via **3rd Party API** call [OpenStreetMap Nominatim API](https://nominatim.org/)
- 🔍 View all stored properties with the “Show Properties” button

---

## 🧪 Example Response

```json
{
  "id": 3,
  "title": "Beach Villa",
  "price": "95000",
  "address": "California",
  "location": {
    "latitude": "36.778261",
    "longitude": "-119.4179324"
  },
  "agent": {
    "name": "Yousaf",
    "agency": "Dream Homes"
  }
}
```

---

## 📝 Tech Stack

- **Backend:** Node.js, Express
- **Frontend:** Plain HTML, CSS, JS
- **Geolocation API:** OpenStreetMap Nominatim
- **Deployment:** Localhost (can be deployed to Render, Vercel, or Railway)

---

## 🚧 Limitations

- ❌ No database (properties stored in memory)
- ❌ No persistent storage or user authentication
- 🧪 For learning/demo purposes only

---

## 📦 Future Ideas

- Add a map preview (e.g. using Leaflet.js or Mapbox)
- Store properties in a database (MongoDB, PostgreSQL)
- Make it a real estate listing platform
- Add reverse geocoding and map-based search

---

## 📄 License

MIT — Free to use, modify, and share for personal or educational projects.

---

## 🙌 Author

**Muhammad Yousaf Zafar**  
[LinkedIn](https://www.linkedin.com/in/myousafzafar/) • [GitHub](https://github.com/myousafzafar)
