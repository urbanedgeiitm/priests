// Function to calculate analytics
function calculateAnalytics() {
    const services = JSON.parse(localStorage.getItem('services')) || [];
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    
    // Calculate Total Bookings
    const totalBookings = bookings.length;
    
    // Calculate Total Revenue
    const totalRevenue = bookings.reduce((total, booking) => total + parseFloat(booking.fee), 0);

    // Find the Top Service (by number of bookings)
    let serviceCount = {};
    bookings.forEach(booking => {
        serviceCount[booking.name] = (serviceCount[booking.name] || 0) + 1;
    });
    let topService = Object.keys(serviceCount).reduce((a, b) => serviceCount[a] > serviceCount[b] ? a : b, "N/A");

    // Find the Priests with the Most Bookings
    let priestCount = {};
    bookings.forEach(booking => {
        const priest = booking.priest || "Unknown Priest";
        priestCount[priest] = (priestCount[priest] || 0) + 1;
    });
    let topPriest = Object.keys(priestCount).reduce((a, b) => priestCount[a] > priestCount[b] ? a : b, "N/A");

    // Calculate Payment Success Rate (based on completed payments)
    const successfulPayments = bookings.filter(booking => booking.paymentStatus === 'success').length;
    const paymentSuccessRate = bookings.length > 0 ? ((successfulPayments / bookings.length) * 100).toFixed(2) + '%' : 'N/A';

    // Display the data
    document.getElementById('totalBookings').textContent = totalBookings;
    document.getElementById('totalRevenue').textContent = totalRevenue;
    document.getElementById('topService').textContent = topService;
    document.getElementById('topPriest').textContent = topPriest;
    document.getElementById('paymentSuccessRate').textContent = paymentSuccessRate;
}

// Call the function on page load
window.onload = function() {
    calculateAnalytics();
};
