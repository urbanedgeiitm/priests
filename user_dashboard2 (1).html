<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Dashboard</title>
    <style>
        /* General Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
        }

        body {
            background: linear-gradient(to right, #e3ffe7, #d9e7ff);
            color: #333;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }

        header {
            background: #4a90e2;
            padding: 20px;
            text-align: center;
            color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        header h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }

        header nav a {
            color: #fff;
            text-decoration: none;
            margin: 0 15px;
            font-weight: bold;
            transition: color 0.3s ease;
        }

        header nav a:hover {
            color: #ffd700;
        }

        #main-content {
            padding: 20px;
            flex: 1;
        }

        section {
            margin-bottom: 20px;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
        }

        section h2 {
            font-size: 22px;
            color: #4a90e2;
            margin-bottom: 10px;
        }

        #serviceList div,
        #bookingsList li {
            background: #f9f9f9;
            border-radius: 5px;
            padding: 10px;
            margin-bottom: 10px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        #serviceList button {
            background: #4a90e2;
            color: #fff;
            padding: 5px 10px;
            border: none;
            border-radius: 5px;
            font-size: 14px;
            cursor: pointer;
            transition: background 0.3s ease;
        }

        #serviceList button:hover {
            background: #357ab8;
        }

        footer {
            text-align: center;
            padding: 10px;
            background: #4a90e2;
            color: #fff;
        }
    </style>
</head>
<body>
    <header>
        <h1>User Dashboard</h1>
        <nav>
            <a href="index2.html">Home</a> |
            <a href="login_signin.html">Logout</a>
        </nav>
    </header>

    <div id="main-content">
        <section id="availableServices">
            <h2>Available Services</h2>
            <div id="serviceList">
                <p>No services available right now.</p>
            </div>
        </section>

        <section id="priestProfile">
            <h2>Priest Profile</h2>
            <div id="priestProfileDetails">
                <p>No priest profile available.</p>
            </div>
        </section>

        <section id="myBookings">
            <h2>My Bookings</h2>
            <ul id="bookingsList">
                <li>No bookings made yet.</li>
            </ul>
        </section>
    </div>

    <footer>
        <p>&copy; 2024 Priest Services Platform</p>
    </footer>

    <script>
        // Load available services from localStorage and display them
        function loadAvailableServices() {
            const services = JSON.parse(localStorage.getItem('services')) || [];
            const serviceListDiv = document.getElementById('serviceList');
            serviceListDiv.innerHTML = '';

            if (services.length === 0) {
                serviceListDiv.innerHTML = '<p>No services available right now.</p>';
            } else {
                services.forEach((service, index) => {
                    const serviceDiv = document.createElement('div');
                    serviceDiv.innerHTML = `
                        <strong>${service.name}</strong> - Fee: ₹${service.fee}, Availability: ${service.availability} 
                        <button onclick="bookService(${index})">Book Now</button>
                    `;
                    serviceListDiv.appendChild(serviceDiv);
                });
            }
        }

        // Load priest profile from localStorage
        function loadPriestProfile() {
            const priestProfile = JSON.parse(localStorage.getItem('priestProfile')) || null;
            const priestProfileDetailsDiv = document.getElementById('priestProfileDetails');

            if (priestProfile) {
                priestProfileDetailsDiv.innerHTML = `
                    <img src="${priestProfile.photo}" alt="Priest Photo" width="100"><br>
                    <strong>${priestProfile.name}</strong><br>
                    Pujas Performed: ${priestProfile.pujasPerformed}
                `;
            } else {
                priestProfileDetailsDiv.innerHTML = '<p>No priest profile available.</p>';
            }
        }

        // Load existing bookings from localStorage
        function loadBookings() {
            const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
            const bookingsList = document.getElementById('bookingsList');
            bookingsList.innerHTML = '';

            if (bookings.length === 0) {
                bookingsList.innerHTML = '<li>No bookings made yet.</li>';
            } else {
                bookings.forEach(booking => {
                    const bookingItem = document.createElement('li');
                    bookingItem.innerHTML = `
                        <strong>${booking.name}</strong><br>
                        Specialization: ${booking.specialization}<br>
                        Location: ${booking.location}<br>
                        Booked on: ${booking.date}
                    `;
                    bookingsList.appendChild(bookingItem);
                });
            }
        }

        // Load available services, priest profile, and bookings on page load
        window.onload = function() {
            loadAvailableServices();
            loadPriestProfile();
            loadBookings();
        }
    </script>
</body>
</html>
