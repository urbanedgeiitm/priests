<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Priest Dashboard</title>
    <link rel="stylesheet" href="style.css">
    <style>
        /* General Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        /* Body and Background */
        body {
            background-color: #f4f4f9;
            color: #333;
        }

        header {
            background-color: #5a8dee;
            color: white;
            padding: 20px 0;
            text-align: center;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }

        header h1 {
            font-size: 24px;
            font-weight: 600;
        }

        header nav a {
            color: white;
            text-decoration: none;
            margin: 0 15px;
            font-weight: 500;
        }

        section {
            max-width: 600px;
            margin: 30px auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        h2 {
            color: #5a8dee;
            font-size: 22px;
            margin-bottom: 10px;
        }

        label {
            font-weight: 600;
            color: #555;
            margin-top: 10px;
            display: block;
        }

        input[type="text"],
        input[type="number"],
        input[type="file"],
        input[type="date"],
        input[type="time"],
        select {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #ddd;
            border-radius: 5px;
            outline: none;
            font-size: 16px;
        }

        button {
            background-color: #5a8dee;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: 600;
            margin-top: 15px;
            width: 100%;
        }

        button:hover {
            background-color: #507ace;
        }

        #priestProfilePreview {
            text-align: center;
            margin-top: 20px;
        }

        #priestProfilePreview img {
            border-radius: 50%;
            width: 100px;
            height: 100px;
            margin-bottom: 10px;
        }

        #priestServiceList div {
            background: #f9f9f9;
            padding: 10px;
            border-radius: 5px;
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        #priestServiceList button {
            background-color: #d9534f;
            font-size: 12px;
        }

        footer {
            text-align: center;
            padding: 10px;
            background: #5a8dee;
            color: white;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <header>
        <h1>Priest Dashboard</h1>
        <nav>
            <a href="index.html">Home</a> |
            <a href="logout.html">Logout</a>
        </nav>
    </header>

    <section id="priestDetails">
        <h2>Priest Profile</h2>
        <form id="priestProfileForm">
            <label for="priestName">Priest Name:</label>
            <input type="text" id="priestName" name="priestName" required>

            <label for="pujasPerformed">Number of Pujas Performed:</label>
            <input type="number" id="pujasPerformed" name="pujasPerformed" required>

            <label for="specialty">Specialty:</label>
            <input type="text" id="specialty" name="specialty" required>

            <label for="priestPhoto">Upload Profile Photo:</label>
            <input type="file" id="priestPhoto" name="priestPhoto" accept="image/*" required>

            <button type="submit">Save Profile</button>
        </form>
        <div id="priestProfilePreview"></div>
    </section>

    <section id="services">
        <h2>Manage Your Services</h2>
        <form id="addServiceForm">
            <label for="serviceName">Service Name:</label>
            <input type="text" id="serviceName" name="serviceName" required>

            <label for="serviceFee">Service Fee (₹):</label>
            <input type="text" id="serviceFee" name="serviceFee" required placeholder="Enter amount in rupees">

            <label for="serviceAvailabilityDate">Availability Date:</label>
            <input type="date" id="serviceAvailabilityDate" name="serviceAvailabilityDate" required>

            <label for="serviceTimeOption">Select Time Slot:</label>
            <select id="serviceTimeOption" name="serviceTimeOption" onchange="toggleCustomTimeInput()" required>
                <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                <option value="Afternoon (12 PM - 3 PM)">Afternoon (12 PM - 3 PM)</option>
                <option value="Evening (3 PM - 6 PM)">Evening (3 PM - 6 PM)</option>
                <option value="custom">Enter Custom Time</option>
            </select>

            <label for="customTimeSlot" id="customTimeLabel" style="display: none;">Custom Time Slot:</label>
            <input type="time" id="customTimeSlot" name="customTimeSlot" style="display: none;">

            <button type="submit">Add Service</button>
        </form>
    </section>

    <section>
        <h3>Current Services:</h3>
        <div id="priestServiceList"></div>
    </section>

    <footer>
        <p>&copy; 2024 Priest Services Platform</p>
    </footer>

    <script>
        document.getElementById('priestProfileForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const priestName = document.getElementById('priestName').value;
            const pujasPerformed = document.getElementById('pujasPerformed').value;
            const specialty = document.getElementById('specialty').value;
            const priestPhotoFile = document.getElementById('priestPhoto').files[0];
            
            const reader = new FileReader();
            reader.onload = function(e) {
                const priestPhoto = e.target.result;

                const priestProfile = {
                    name: priestName,
                    pujasPerformed: pujasPerformed,
                    specialty: specialty,
                    photo: priestPhoto
                };
                localStorage.setItem('priestProfile', JSON.stringify(priestProfile));
                displayPriestProfile(priestProfile);
            };
            reader.readAsDataURL(priestPhotoFile);
        });

        function displayPriestProfile(profile) {
            const profilePreviewDiv = document.getElementById('priestProfilePreview');
            profilePreviewDiv.innerHTML = `
                <img src="${profile.photo}" alt="Priest Photo">
                <strong>${profile.name}</strong><br>
                Pujas Performed: ${profile.pujasPerformed}<br>
                Specialty: ${profile.specialty}
            `;
        }

        function loadPriestProfile() {
            const storedProfile = JSON.parse(localStorage.getItem('priestProfile')) || null;
            if (storedProfile) {
                displayPriestProfile(storedProfile);
            }
        }

        function loadServices() {
            const services = JSON.parse(localStorage.getItem('services')) || [];
            const serviceListDiv = document.getElementById('priestServiceList');
            serviceListDiv.innerHTML = '';

            if (services.length === 0) {
                serviceListDiv.innerHTML = '<p>No services added yet.</p>';
            } else {
                services.forEach((service, index) => {
                    const serviceDiv = document.createElement('div');
                    serviceDiv.innerHTML = `
                        <strong>${service.name}</strong> - Fee: ₹${service.fee}, Availability: ${service.availability} 
                        <button onclick="deleteService(${index})">Delete</button>
                    `;
                    serviceListDiv.appendChild(serviceDiv);
                });
            }
        }

        document.getElementById('addServiceForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const serviceName = document.getElementById('serviceName').value;
            const serviceFee = document.getElementById('serviceFee').value;
            const serviceAvailabilityDate = document.getElementById('serviceAvailabilityDate').value;
            const timeOption = document.getElementById
