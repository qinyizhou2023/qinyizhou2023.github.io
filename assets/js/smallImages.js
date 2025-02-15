// optimizeImages.js
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        // 设置图片的最大宽度和高度
        img.style.maxWidth = '100%'; // 确保图片不会超出其容器
        img.style.height = 'auto'; // 保持图片的纵横比

        // 监听图片加载事件以调整大小
        img.addEventListener('load', () => {
            const naturalWidth = img.naturalWidth;
            const naturalHeight = img.naturalHeight;

            // 根据图片的原始尺寸调整大小
            if (naturalWidth > 800) { // 假设800px是一个合理的最大宽度
                img.style.width = '800px';
            } else {
                img.style.width = `${naturalWidth}px`;
            }

            // 根据宽度调整高度
            img.style.height = 'auto';
        });
    });
});