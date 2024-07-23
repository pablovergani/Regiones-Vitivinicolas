document.addEventListener('DOMContentLoaded', () => {
    const regionElements = document.querySelectorAll('.region');
    const regionNames = document.querySelectorAll('.region-name');
    const closeButtons = document.querySelectorAll('.close');

    // Cierra todos los modales
    function closeAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    }

    // Abre el modal de una región específica y carga el contenido
    function openRegionModal(regionId) {
        const modal = document.getElementById(`modal-${regionId}`);
        if (modal) {
            fetch(`modal-${regionId}.html`)
                .then(response => response.text())
                .then(data => {
                    const modalContent = modal.querySelector('.modal-content');
                    modalContent.innerHTML = data;
                    modalContent.innerHTML += '<span class="close">&times;</span>'; // Agrega el botón de cerrar
                    modal.style.display = 'flex';
                    setupCloseEvent(); // Configura el evento de cierre
                })
                .catch(error => console.error('Error al cargar el contenido del modal:', error));
        }
    }

// Agregar el evento de clic en el botón "Ver más" de los modales
document.addEventListener('click', function(event) {
    if (event.target && event.target.tagName === 'A' && event.target.getAttribute('href')) {
        event.preventDefault();
        const href = event.target.getAttribute('href');
        window.location.href = href;
    }
});

    // Abre el modal de "Intro e Información General"
    document.getElementById('intro').addEventListener('click', function() {
        const modal = document.getElementById('modal-intro-info');
        fetch('modal-intro-content-italy.html')
            .then(response => response.text())
            .then(data => {
                const content = new DOMParser().parseFromString(data, 'text/html').querySelector('#modal-intro-content').innerHTML;
                const modalContent = modal.querySelector('.modal-content');
                modalContent.innerHTML = content;
                modalContent.innerHTML += '<span class="close">&times;</span>'; // Agrega el botón de cerrar
                modal.style.display = 'flex';
                setupCloseEvent(); // Configura el evento de cierre
            })
            .catch(error => console.error('Error al cargar el contenido del modal:', error));
    });

    // Configura los eventos de cierre para los botones de cierre
    function setupCloseEvent() {
        document.querySelectorAll('.close').forEach(button => {
            button.addEventListener('click', () => {
                const modal = button.closest('.modal');
                if (modal) {
                    modal.style.display = 'none';
                }
            });
        });
    }

    // Cerrar todos los modales al hacer clic fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            closeAllModals();
        }
    });

     // Manejo de eventos para cada nombre de región
     regionNames.forEach(name => {
        const regionId = name.getAttribute('data-region');
        const regionElement = document.getElementById(regionId);

        name.addEventListener('mouseover', () => {
            regionElement.classList.add('active');
            name.classList.add('active');
        });

        name.addEventListener('mouseout', () => {
            regionElement.classList.remove('active');
            name.classList.remove('active');
        });

        name.addEventListener('click', () => {
            closeAllModals();
            openRegionModal(regionId);
        });

        regionElement.addEventListener('mouseover', () => {
            name.classList.add('active');
            regionElement.classList.add('active');
        });

        regionElement.addEventListener('mouseout', () => {
            name.classList.remove('active');
            regionElement.classList.remove('active');
        });

        regionElement.addEventListener('click', () => {
            closeAllModals();
            openRegionModal(regionId);
        });
    });


    // Configura los eventos para los nombres de las regiones
    regionNames.forEach(name => {
        const regionId = name.getAttribute('data-region');
        const regionElement = document.getElementById(regionId);

        name.addEventListener('click', () => {
            closeAllModals();
            openRegionModal(regionId);
        });

        regionElement.addEventListener('click', () => {
            closeAllModals();
            openRegionModal(regionId);
        });
    });

    // Inicializa los eventos de cierre
    setupCloseEvent();
});