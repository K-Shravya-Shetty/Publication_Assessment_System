function submitAmount() {
    const amountInput = document.getElementById('amount');
    const amount = amountInput.value;
    const approvalMessage = document.getElementById('approvalMessage');
    const approveButton = document.getElementById('approveButton');
    
    if (amount) {
        approvalMessage.textContent = `Amount entered: INR ${amount}`;
        approvalMessage.style.color = 'blue';
        approveButton.style.display = 'inline-block';
    } else {
        approvalMessage.textContent = 'Please enter a valid amount.';
        approvalMessage.style.color = 'red';
        approveButton.style.display = 'none';
    }
}

function approveAmount() {
    const approvalMessage = document.getElementById('approvalMessage');
    const comments = document.getElementById('comments').value;
    
    approvalMessage.textContent = `Amount approved.`;
    if (comments) {
        approvalMessage.textContent += ` Comments: ${comments}`;
    }
    approvalMessage.style.color = 'green';
}
