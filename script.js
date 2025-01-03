
const regulators = document.querySelectorAll('.regulator');

        regulators.forEach((regulator) => {
            regulator.addEventListener('click', () => {
                const burnerIndex = regulator.dataset.burner - 1;
                const flame = document.querySelectorAll('.flame')[burnerIndex];

                
                let currentRotation = regulator.style.transform || 'rotate(0deg)';

              
                if (currentRotation === 'rotate(0deg)') {
                    currentRotation = 'rotate(45deg)'; 
                    flame.style.display = 'block';
                    flame.style.height = '30px'; 
                } else if (currentRotation === 'rotate(45deg)') {
                    currentRotation = 'rotate(90deg)'; 
                    flame.style.display = 'block';
                    flame.style.height = '50px'; 
                } 
                else if (currentRotation === 'rotate(90deg)') {
                    currentRotation = 'rotate(135deg)'; 
                    flame.style.display = 'block';
                    flame.style.height = '70px'; }
                    else {
                    currentRotation = 'rotate(0deg)'; 
                    flame.style.display = 'none'; 
                }

                regulator.style.transform = currentRotation;
            });
        });