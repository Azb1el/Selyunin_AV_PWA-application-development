document.addEventListener('DOMContentLoaded', function() {
    // Получение элементов по ID
    const heightElem = document.getElementById('height');
    const weightElem = document.getElementById('weight');
    const outputElem = document.getElementById('output');
    const btnElem = document.getElementById('btn');


    btnElem.addEventListener('click', function() {
    
        let h = +heightElem.value / 100; 
        let w = +weightElem.value;
        
   
        let imt = w / (h * h);
        
        if (isFinite(imt) && imt > 0) {
            outputElem.value = imt.toFixed(2);
        } else {
            outputElem.value = 'Ошибка';
        }
    });


    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(registration => {
                console.log('SW registered', registration);
            })
            .catch(error => {
                console.log('SW failed', error);
            });
    }
});