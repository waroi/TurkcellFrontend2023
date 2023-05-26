function toasty(type, message) {
    const toasty = document.getElementById('feedbackToast')
    toasty.querySelector('.toast-body').textContent = message;
    toasty.classList.add(`bg-${type}`)
    
    
    const toastyContainer = bootstrap.Toast.getOrCreateInstance(toasty)
    toastyContainer.show()
      
    
}