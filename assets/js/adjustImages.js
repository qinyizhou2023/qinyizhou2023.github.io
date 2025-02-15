// adjustImages.js
document.addEventListener("DOMContentLoaded", function() {
    const rows = document.querySelectorAll('.row');

    rows.forEach(row => {
        const images = row.querySelectorAll('.img-fluid');
        let minHeight = Infinity;
        let maxWidth = 0;

        // 找到这一行中最矮的图片高度和最大宽度
        images.forEach(img => {
            const imgHeight = img.naturalHeight / img.naturalWidth * img.clientWidth;
            if (imgHeight < minHeight) {
                minHeight = imgHeight;
            }
            if (img.clientWidth > maxWidth) {
                maxWidth = img.clientWidth;
            }
        });

        // 将所有图片的高度设置为最矮的图片高度，宽度设置为最大宽度
        images.forEach(img => {
            img.style.height = `${minHeight}px`;
            img.style.width = `${maxWidth}px`;
            img.style.objectFit = 'cover';
        });
    });
});