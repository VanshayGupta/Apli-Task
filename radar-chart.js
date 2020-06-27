var ctx = document.getElementById('radarChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ["O", "C", "E", "A", "N"],
        datasets: [{
            label: 'Candidate',
            data: [1, 2, 3, 4, 5],
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
        ],
        borderWidth:3,
        }]
    },        
    options: {
        scale: {
            ticks: {
                beginAtZero: true,
                max: 5,
                min: 0,
                stepSize: 1
            }
        },
        }
    });