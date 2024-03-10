document.getElementById('free-plan').addEventListener('click', function() {
    selectPlan('Free Plan', '$0.00/month');
});

document.getElementById('basic-plan').addEventListener('click', function() {
    selectPlan('Basic Plan', '$19.99/month');
});

document.getElementById('premium-plan').addEventListener('click', function() {
    selectPlan('Premium Plan', '$39.99/month');
});

function selectPlan(planName, planPrice) {
    alert(`Congratulations! You selected the ${planName} for ${planPrice}.`);
    
}
