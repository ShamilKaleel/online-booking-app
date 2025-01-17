# StayEase Booking Platform

## Overview

This project is a **full-stack web application** designed for booking and posting places for rental or vacation purposes. The application offers user authentication, CRUD operations for place listings, secure image storage, and AWS IAM management for fine-grained access control.
## Hosted Link

Access the application using the following link: [StayEase Application](https://stay-ease-theta.vercel.app/)

---

## Features

### **User Authentication**
- Login, Signup, and Logout functionality.
- **JWT (JSON Web Token)** used for secure authentication.

### **Booking and Posting**
- Users can browse and book places listed on the platform.
- Users can post their own places for booking.
- Users can **update** or **delete** their posted places.

### **Image Storage**
- Image uploads are stored securely in **AWS S3 Buckets**.
- **IAM Policies** in AWS ensure proper permissions for accessing and managing images.

### **AWS IAM Integration**
- **IAM Users**: Created and assigned specific permissions for daily tasks like uploading, deleting, and accessing files.
- Fine-grained access control implemented using **AWS IAM Roles** and **Policies**.

### **Tech Stack**
- **Backend**: Node.js with Express.js
- **Frontend**: React.js
- **Database**: MongoDB
- **Styling**: Tailwind CSS
- **Hosting**: Vercel 

---

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js**: [Download here](https://nodejs.org/)
- **MongoDB**: [Download here](https://www.mongodb.com/try/download/community)
- An **AWS Account**: [Create one here](https://aws.amazon.com/)

---

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/travel-booking-platform.git
cd online-booking-app
```

### 2. Install Backend Dependencies
```bash
cd backend
yarn
```

### 3. Install Frontend Dependencies
```bash
cd ../frontend
yarn i
```
---
## Configuration

### Backend `.env` File
Create a `.env` file in the `server` directory with the following:

```plaintext
PORT = 4000
MONGO_URLL =
JWT_SECRETT =
AWS_BUCKET_NAMEE =
AWS_BUCKET_REGIONN =
AWS_ACCESS_KEYY =
AWS_SECRET_ACCESS_KEYY =
```

## AWS IAM Setup

### Create IAM Users with Specific Permissions for Daily Tasks:
1. **Uploader**: Permissions to upload files to the S3 bucket.
2. **Viewer**: Permissions to view and download files.
3. **Manager**: Permissions for CRUD operations on S3 objects.

### Assign Roles and Policies
Use IAM Policies to assign granular access control to each role based on the required permissions.

---
## Running the Application

1. **Start the Backend**  
   ```bash
   cd backend
   nodemon index.js
   ```

2. **Start the Frontend**  
   ```bash
   cd ../frontend
   yarn dev
   ```
---
## Hosting

- Both the **frontend** and **backend services** are hosted on **Vercel**.  
- The **MongoDB database** is deployed on **cloud infrastructure**.
