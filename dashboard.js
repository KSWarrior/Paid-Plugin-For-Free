// Prevent access without verification
window.onload = function() {
    var verified = localStorage.getItem("verified");
    var expiryTime = localStorage.getItem("expiry");

    if (verified !== "true" || !expiryTime || new Date().getTime() > expiryTime) {
        // Redirect to verification page if not verified or expired
        localStorage.removeItem("verified");
        localStorage.removeItem("expiry");
        window.location.href = "index.html";
    }
};

function logout() {
    localStorage.removeItem("verified");
    localStorage.removeItem("expiry");
    window.location.href = "index.html";
}