// adjustImages.js
document.addEventListener("DOMContentLoaded", function() {
    const rows = document.querySelectorAll('.row');

    rows.forEach(row => {
        const images = row.querySelectorAll('.img-fluid');
        let minHeight = Infinity;

        // 找到这一行中最矮的图片高度
        images.forEach(img => {
            const imgHeight = img.naturalHeight / img.naturalWidth * img.clientWidth;
            if (imgHeight < minHeight) {
                minHeight = imgHeight;
            }
        });

        // 将所有图片的高度设置为最矮的图片高度
        images.forEach(img => {
            img.style.height = `${minHeight}px`;
            img.style.objectFit = 'cover';
        });
    });
});