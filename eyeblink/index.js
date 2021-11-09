document.addEventListener('DOMContentLoaded',()=>{
    let observer = new IntersectionObserver((entries, observer) => { 
        entries.forEach(entry => {
        if(entry.isIntersecting) {
            console.log(entry.target.dataset.src);
            entry.target.src = entry.target.dataset.src;

            entry.target.addEventListener("load", () => {
                entry.target.classList.add("loaded");
                entry.target.closest(".signposts__item").classList.add("loaded");
            });
            observer.unobserve(entry.target);
        }
        });
    }, {
        threshold: 1
    });
    
    document.querySelectorAll('.signposts__items--grid img').forEach(img => { observer.observe(img) });
});

// signposts__item loaded image loaded