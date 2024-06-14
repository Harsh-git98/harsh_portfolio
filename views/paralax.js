window.onload = function() {
  window.addEventListener('scroll', function(e) {
    let s = this.scrollY;
    let w = this.outerWidth;
    let h = document.getElementsByClassName('paralax')[0].clientHeight;
    let h_b = document.getElementsByClassName('container')[0].clientHeight;
    let p = s / h * 100;
    let p_b = s / h_b * 100;
    let opas = 1 - (1 / 100 * p_b);
    let z_1 = 1 + (w / 10000 * p_b);
    document.getElementsByClassName('p-item4')[0].style = `transform: scale(${z_1}); opacity: ${opas}`;
    let z_2 = 1 + (w / 5000000 * p);
    let opas_1 = 1 - (p_b / 200);
    document.getElementsByClassName('p-item1')[0].style = `transform: scale(${z_2}); opacity: ${opas_1}`;
    let hr = w / 1000 * p_b;
    let z_3 = 1 + (w * 0.00005 * p_b);
    let opas_2 = 1 - (p_b / 40);
    document.getElementsByClassName('p-item2')[0].style = `transform: translate3d(0px, 0px, ${hr}px) scale(${z_3});opacity: ${opas_2}`;

    let hr_2 = w / 1500 * p_b;
    let z_4 = 1 + (w * 0.00001 * p_b);
    let opas_3 = 1 - (p_b / 80); // Opacity calculation for .p-item3

    document.getElementsByClassName('p-item3')[0].style = `transform: translate3d(${hr_2}px, 0, 0) scale(${z_4}); opacity: ${opas_3}`;
    
  });
}

