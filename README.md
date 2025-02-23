# EatsyPeatsy Project Overview
📁 Backend /
├── models/          # Defines MongoDB schemas  
│   ├── User.js  
│   └── ...  
│
├── controllers/     # Handles logic for routes  
│   ├── userController.js  
│   └── ...  
│
├── routes/          # API endpoints  
│   ├── userRoutes.js  
│   └── ...  
│
├── server.js        # Main entry point (Express setup)  
└── package.json     # Dependencies & scripts  


📁 EatsyPeatsy /
├── components/       # Reusable UI components  
│   ├── Home/
|       ├── HomeComponent.js
│   └── ...  
│
├── pages/            # Page components (Inside here, you will be able to build pages using reusable components) 
│   ├── LoginPage.js
│       ├── Login.tsx  
│   └── ...  
│
├── services/         # API calls  
│   ├── AuthService.js  
│   └── ...  
│
├── App.js            # React entry point  
│
├── package.json          # Dependencies & scripts  
└── tsconfig.json         # TypeScript config  

# Version History
## V1
- Implemented Login & Registration function (Linked to database)
- MongoDB Atlas
- Express (Backend)
- React Expo (Frontend)