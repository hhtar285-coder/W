function createHeart() {
    const heart = document.createElement('div');
    
    
    heart.classList.add('heart');
    
    
    heart.innerHTML = '💙🎈🤍🎈💙';
    
    
    heart.style.left = Math.random() * 100 + 'vw';
    
    const size = Math.random() * 30 + 15;
    heart.style.fontSize = size + 'px';
    
    heart.style.animationDuration = Math.random() * 3 + 4 + 's';
    heart.style.opacity = Math.random() * 0.5 + 0.5;
    
    document.body.appendChild(heart);
    
    
    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 300);
