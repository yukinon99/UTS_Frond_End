document.querySelectorAll('.icon-wrapper').forEach(icon => {

    icon.addEventListener('mouseenter', function () {
        const tooltip = this.querySelector('.tooltip');
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';


    });

    icon.addEventListener('mouseleave', function () {
        const tooltip = this.queryselector('.tooltip');
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
    });
});