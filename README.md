
# Kira Services Web App

![Alt Text](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlaM7f4RrgmZcsns7mNiKk2xGAKvbhg1U7OQ&usqp=CAU)


## Problem Background

Rwanda aims for accessible healthcare, but long waiting times challenge this goal. Studies reveal that over 70% of patients wait more than two hours, and 40% wait over three hours (Uwera, 2020). Prolonged waits affect patient well-being and healthcare efficiency.

## Our Proposed Solution

To address the issue of long waits at hospitals, we have developed a web app called Kira Services. This app serves as a hospital hub where patients can access information related to hospitals in their vicinity. They can compare different hospitals, make informed decisions, and even book appointments with healthcare providers. This solution aims to reduce long waiting times, save patients money, and improve overall healthcare access.

## Built With

### Frontend:

- React
- TailwindCss

### Backend:

- Node.js
- Express.js
- MongoDB

## Getting Started

### Prerequisites

Before you begin, ensure you have Node.js installed on your machine.

### Installation

1. Clone our repository.
2. Run `npm install` to install all dependencies.
3. Navigate to the client directory and run `npm start`.
4. Navigate to the server directory and run `node index.js`.

## Demo

Visit [Kira Services Web App](https://kiraserivices-client.onrender.com/) to see the app in action.


# Hospitals API Documentation

## Register a New Hospital

`POST /api/hospitals`

### Example

```http
POST /api/hospitals
Content-Type: application/json

{
  "email": "hospital@example.com",
  "password": "securePassword",
"image":"image.png",
"status":"private"
}
```

## Get List of Hospital:
`GET /api/hospitals`
## Login Hospital:
`POST /api/hospitals/auth`



