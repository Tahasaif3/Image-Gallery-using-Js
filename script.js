document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;

    function updateMainImage(index) {
        // Use the data-full attribute to get the full-sized image URL
        const fullImageSrc = thumbnails[index].getAttribute('data-full');
        mainImage.src = fullImageSrc;
        
        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });
        
        currentIndex = index;
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === thumbnails.length - 1;
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            updateMainImage(index);
        });
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            updateMainImage(currentIndex - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < thumbnails.length - 1) {
            updateMainImage(currentIndex + 1);
        }
    });
    
    updateMainImage(0);
});
