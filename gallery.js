const images = [
    'images/a1.jpg',
    'images/a2.jpg',
    'images/a3.jpg',
    'images/a4.jpg',
    'images/a5.jpg',
    'images/a6.jpg',
    'images/a7.jpg',
    'images/a8.jpg',
    'images/a9.jpg',
    'images/a22.jpg',
    'images/a11.jpg',
    'images/a12.jpg',
    'images/a13.jpg',
    'images/a14.jpg',
    'images/a15.jpg',
    'images/a16.jpg',
    'images/a17.jpg',
    'images/a18.jpg',
    'images/a19.jpg',
    'images/a20.jpg',
    'images/a21.jpg',
    'images/a23.jpg',
    'images/a24.jpg',
    'images/a25.jpg',
    'images/a26.jpg',
    'images/a27.jpg',
    'images/a28.jpg',
    'images/a29.jpg',
    'images/a30.jpg',
    'images/a10.jpg',
    'images/a31.jpg',
    'images/a32.jpg',
    'images/a33.jpg',
    'images/a34.jpg',
    'images/a35.jpg',
    'images/a36.jpg',
    'images/a37.jpg',
    'images/a38.jpg',
    'images/a39.jpg',
    'images/a40.jpg'
];
document.addEventListener('DOMContentLoaded', () => {
    const strip = document.querySelector('.photo-strip');
    const displayPhoto = document.querySelector('.displayed-photo');
    const messageMarquee = document.querySelector('#messageMarquee');
    const container = document.createElement('div');
    container.className = 'photo-strip-container';
    strip.appendChild(container);

    // Thêm ảnh vào cuộn
    const imageElements = [];
    let currentIndex = 0;

    // Hàm tạo ảnh mới và thêm vào container
    function addImage(src) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Photo ${currentIndex + 1}`;
        img.onerror = () => {
            console.error(`Không thể tải ảnh: ${src}`);
            img.src = 'images/placeholder.jpg'; // Ảnh dự phòng nếu không tải được
        };
        container.appendChild(img);
        imageElements.push(img);
        currentIndex++;
    }

    // Khởi tạo ảnh ban đầu
    images.forEach(src => addImage(src));

    // Hàm kiểm tra ảnh nào ở giữa màn hình
    const updateDisplayPhoto = () => {
        const viewportWidth = window.innerWidth;
        const centerX = viewportWidth / 2;

        let closestImage = null;
        let closestDistance = Infinity;

        imageElements.forEach((img) => {
            const rect = img.getBoundingClientRect();
            const imgCenterX = rect.left + rect.width / 2;

            const distance = Math.abs(centerX - imgCenterX);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestImage = img;
            }
        });

        if (closestImage) {
            displayPhoto.src = closestImage.src;
        }
    };

    // Thêm ảnh mới liên tục khi cuộn tới cuối
    function checkAndAddImage() {
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
            // Thêm ảnh mới vào cuối container
            addImage(images[currentIndex % images.length]);
        }
    }

    // Tự động cuộn
    let scrollSpeed = 1; // Tốc độ cuộn
    setInterval(() => {
        container.scrollLeft += scrollSpeed;
        checkAndAddImage(); // Kiểm tra để thêm ảnh mới
    }, 30);

    // Cập nhật ảnh hiển thị
    setInterval(updateDisplayPhoto, 500);

    // Hiển thị ảnh đầu tiên mặc định
    if (imageElements.length > 0) {
        displayPhoto.src = imageElements[0].src;
    }

    // Hiển thị lá thư sau 30 giây
    setTimeout(() => {
        if (letterBox) {
            letterBox.classList.add('show');
        } else {
            console.error('Không tìm thấy letterBox');
        }
    }, 50000); // 30 giây
    // Thêm decorations
    addDecorations();
});
// Thêm decorations
function addDecorations() {
    const decorations = document.querySelector('.decorations');
    
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('i');
        heart.className = 'fas fa-heart heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.animationDelay = Math.random() * 5 + 's';
        decorations.appendChild(heart);
    }
    
    for (let i = 0; i < 5; i++) {
        const duck = document.createElement('i');
        duck.className = 'fas fa-duck duck';
        duck.style.top = Math.random() * 80 + 10 + 'vh';
        duck.style.animationDelay = Math.random() * 10 + 's';
        decorations.appendChild(duck);
    }
}