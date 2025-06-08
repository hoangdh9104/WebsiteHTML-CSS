document.addEventListener("DOMContentLoaded", function () {
    function setupVideoObserver(videoId, threshold = 0.1) {
        const video = document.getElementById(videoId);
        if (!video) {
            console.log(`Video ${videoId} không tồn tại`);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        video.play().catch(error => {
                            console.log(`Lỗi video ${videoId}:`, error);
                        });
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: threshold }
        );

        observer.observe(video);
    }

    setupVideoObserver('bg-video', 0.1);
    setupVideoObserver('tea-video', 0.5);
});