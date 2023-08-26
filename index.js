let votes = [0, 0, 0, 0]; // Red, Blue, Green, Yellow

function submitVote() {
    const selectedOption = document.querySelector('input[name="color"]:checked');
    if (!selectedOption) {
        alert("Please select an option before voting.");
        return;
    }

    const selectedValue = parseInt(selectedOption.value);
    votes[selectedValue] += 1;
    alert("Thank you for submitting your vote!");
    drawPieChart();
}

function drawPieChart() {
    const canvas = document.getElementById('pieChart');
    const context = canvas.getContext('2d');
    const colors = ['#FF0000', '#0000FF', '#008000', '#FFFF00'];
    let startAngle = 0;
    const totalVotes = votes.reduce((a, b) => a + b, 0);

    votes.forEach((vote, index) => {
        const sliceAngle = (vote / totalVotes) * 2 * Math.PI;
        context.beginPath();
        context.fillColor = colors[index];
        context.arc(200, 200, 150, startAngle, startAngle + sliceAngle);
        context.closePath();
        context.fillStyle = colors[index];
        context.fill();
        startAngle += sliceAngle;
    });
}
