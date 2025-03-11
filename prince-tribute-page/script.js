document.addEventListener("scroll", function () {
    let counterSection = document.getElementById("tribute-numbers");
    let counters = document.querySelectorAll(".counter");

    let sectionPosition = counterSection.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3; // Adjust trigger point

    if (sectionPosition < screenPosition) {
        counters.forEach((counter) => {
        counter.innerText = '0'; 

        const updateCounter = setInterval(() => {
            const target = +counter.getAttribute('data-target');
            const increment_speed = target < 100 ? 200 : 50;
            const count = +counter.innerText;

            const increment = target / increment_speed;
            
            if (count < target) {
                counter.innerText = `${Math.ceil(count + increment)}`;
                setTimeout(updateCounter, 1);
            }else{
                counter.innerText = target
                clearInterval(updateCounter);
            }
            
        }, 20);
    });

        // Remove the event listener after triggering to prevent multiple executions
        document.removeEventListener("scroll", arguments.callee);
    }
});