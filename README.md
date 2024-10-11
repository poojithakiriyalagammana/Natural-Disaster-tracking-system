
# Natural Disaster Tracking System

## Project Overview

The Natural Disaster Tracking System is a comprehensive web application designed to monitor, report, and manage natural disasters effectively. It provides real-time updates and alerts about various types of natural disasters, helping communities and organizations respond promptly.

## Features

- **Real-time Tracking**: Monitor ongoing natural disasters with live updates.
- **User Registration and Authentication**: Secure user accounts with role-based access.
- **Disaster Reporting**: Users can report new disasters with details and location.
- **Alert System**: Send notifications and alerts to users about disasters in their vicinity.
- **Data Visualization**: Interactive maps and graphs displaying disaster data.
- **Email Notifications**: Automated email alerts for registered users regarding disaster updates.

## Technologies Used

- **Frontend**: React, HTML, CSS, JavaScript
- **Backend**: Spring Boot, Java
- **Database**: MySQL
- **Email Service**: JavaMailSender for sending notifications
- **Mapping**: Google Maps API, NASA APIs for tracking disasters, OpenWeatherMap API for live weather data

## Setup Instructions

### Prerequisites

- Java 11 or higher
- MySQL Database
- Maven
- Node.js (for the frontend)

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/natural-disaster-tracking-system.git
   ```

2. **Setup the Backend**:
   - Navigate to the backend directory.
   - Update the `application.properties` file with your database and email credentials.
   - Example configuration for `application.properties`:
     ```properties
     spring.jpa.hibernate.ddl-auto=update
     spring.datasource.url=jdbc:mysql://localhost:3306/fullstack
     spring.datasource.username=root
     spring.datasource.password=yourpassword
     spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

     spring.mail.host=smtp.gmail.com
     spring.mail.port=587
     spring.mail.username=youremail@gmail.com
     spring.mail.password=your-email-password
     spring.mail.properties.mail.smtp.auth=true
     spring.mail.properties.mail.smtp.starttls.enable=true
     ```

   - Run the Spring Boot application:
     ```bash
     mvn spring-boot:run
     ```

3. **Setup the Frontend**:
   - Navigate to the frontend directory.
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the React application:
     ```bash
     npm start
     ```

4. **Update API Keys**:
   You will need to update the API keys for Google Maps and OpenWeatherMap.

   - **Google Maps API Key**:  
     Navigate to the following files in your project and update the Google Maps API key at **line 29** with your own key:
     
     - `Frontend/src/components/FireMap.js`
     - `Frontend/src/components/SeaLakeIce.js`
     - `Frontend/src/components/SevereStorm.js`
     - `Frontend/src/components/Volcanoes.js`

     Find the line:
     ```javascript
     key: "your-google-api-key"
     ```

   - **OpenWeatherMap API Key**:  
     Navigate to the following file and update the OpenWeatherMap API key at **line 11** with your own key:
     
     - `Frontend/src/pages/DisasterPage.js`

     Find the line:
     ```javascript
     key: "your-api-key", // Replace with your new API key
     ```

5. **Access the Application**:
   - Open your browser and go to `http://localhost:3000` for the frontend.

## NASA API Details

The system integrates multiple APIs from NASA to track various natural disasters, including wildfires, severe storms, and more. The real-time disaster tracking provides valuable data on disaster locations, enabling users to take informed actions.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## Contact

For any inquiries, please contact [poojithakiriyalagammana@gmail.com].
