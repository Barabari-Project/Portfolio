document.addEventListener('DOMContentLoaded', function() {
    // Select all .circle elements
    window.scrollTo(0, 0);
    const circles = document.querySelectorAll('.circle123');

    // Define CSS variable values for each circle in pixels
    const circleStyles = [
            {
                '--ani-duration': '1s',
                '--back-color': '#334499',
                '--ani-delay': '0s',
                '--half-opacity': '0',
                '--initial-width': '57.74vw',
                '--initial-height': '57.74vw',
                '--final-width': '64.25vw',
                '--final-height': '64.25vw',
                '--h-top': '-35.5vw',
                '--v-right': '-8.46vw',
            },
            {
                '--ani-duration': '0.5s',
                '--ani-delay': '1s',
                '--h-top': '-26.88vw',
                '--v-right': '-5.85vw',
                '--half-opacity': '0.5',
                '--back-color': 'rgba(255, 255, 255, 0.1)',
                '--initial-width': '49.02vw',
                '--initial-height': '49.02vw',
                '--final-width': '55.53vw',
                '--final-height': '55.53vw',
            },
            {
                '--ani-duration': '0.5s',
                '--ani-delay': '1.5s',
                '--h-top': '-22.78vw',
                '--v-right': '-6vw',
                '--half-opacity': '0.5',
                '--back-color': 'rgba(255, 255, 255, 0.07)',
                '--initial-width': '45.24vw',
                '--initial-height': '45.24vw',
                '--final-width': '51.75vw',
                '--final-height': '51.75vw',
            }
        ];
        

    // Apply styles to each circle
    circles.forEach((circle, index) => {
        Object.entries(circleStyles[index]).forEach(([property, value]) => {
            circle.style.setProperty(property, value);
        });
    });


    function setDynamicImageSize() {
        const screenWidth = screen.width;
        const screenHeight = screen.height;
        console.log(screenHeight,screenWidth);
        const image = document.getElementById('dynamicImage');
        const secondImage = document.getElementsByClassName('second-image123');
        const thirdImage = document.getElementsByClassName('third-image123');
        image.style.width = `${screenWidth}px`;
        image.style.height = `${screenWidth/2 + screenWidth*0.17}px`;
        console.log(secondImage[0]["style"])
        // alert("je")
        secondImage[0].style.width = `${(screenWidth*417)/1536}px`;
        secondImage[0].style.height = `${(screenWidth*374)/1536}px`;        

        thirdImage[0].style.width = `${(screenWidth*417)/1536}px`;
        thirdImage[0].style.height = `${(screenWidth*349)/1536}px`;   
    }

    // Set initial image size
    setDynamicImageSize();

    // Adjust image size on window resize
    window.addEventListener('resize', setDynamicImageSize);
});
