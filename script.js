document.addEventListener('DOMContentLoaded', () => {
    const regionElements = document.querySelectorAll('.region');
    const regionNames = document.querySelectorAll('.region-name');
    const closeModal = document.querySelector('.close');
    
    // Cierra todos los modales
    function closeAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    }

    // Abre el modal de la región específica
    function openRegionModal(regionId) {
        const modal = document.getElementById(`modal-${regionId}`);
        if (modal) {
            modal.style.display = 'flex';
        }
    }

    // Mostrar el modal de "Intro e Información General"
    document.getElementById('intro').addEventListener('click', function() {
        const modal = document.getElementById('modal-intro-info');
        const modalContent = document.getElementById('modal-intro-info-content');
        modalContent.innerHTML = `
            <h2>Intro e Información General</h2>
            <p>Variedad más amplia del mundo de estilos de vinos, terruños y variedades de uvas autóctonas.</p>
            <p>Cuarto país con mayor superficie plantada, primer productor a nivel mundial.</p>
            <p>Clima difícil de generalizar, hacia el norte más continental y hacia el sur más mediterráneo. Apeninos como factor común en casi todo el territorio. Viticultura de calidad en las laderas.</p>
            <p>Vinos más admirados provienen de suelos calcáreos (Piemonte, Toscana). También hay predominancia de suelos volcánicos (Soave).</p>
            <h3>DOC vs DOCG</h3>
            <p>DOCG regulación más estricta. Más restrictiva en términos de variedades (suelen ser varietales o blends específicos). Tiene que haber sido DOC por 5 años.</p>
            <p>DOCG: bandita rosa. 🎀</p>
            <p>DOC: bandita verde. 🟢</p>
            <h3>Glosario</h3>
            <ul>
                <li><strong>Appasimento</strong>: proceso en el cual se secan las uvas sobre pajas para concentrar azúcares. Vinos resultantes en general dulces (algunos secos).</li>
                <li><strong>Classico</strong>: designa un área histórica dentro de una zona más grande.</li>
                <li><strong>Frizzante</strong>: espumante suave.</li>
                <li><strong>Passito</strong>: vino hecho con técnica de appasimento.</li>
                <li><strong>Recioto</strong>: vino dulce de uvas semisecas (Véneto).</li>
                <li><strong>Ripasso</strong>: técnica que agrega hollejos de vinos Amarone (Valpolicella), uvas que han sido dejadas secar, terminada la fermentación y antes de ser prensadas. Agrega sabor, alcohol, notas oxidadas y a botritis, y taninos.</li>
                <li><strong>Superiore</strong>: mayor graduación alcohólica.</li>
                <li><strong>Vin Santo</strong>: Vino dulce tradicional de la Toscana. Fermentación larga a partir de un mosto muy dulce de uvas deshidratadas.</li>
            </ul>
        `;
        modal.style.display = 'flex';
    });

    // Cerrar el modal de "Intro e Información General"
    document.getElementById('close-intro-info').addEventListener('click', function() {
        document.getElementById('modal-intro-info').style.display = 'none';
    });

    // Cerrar el modal de "Intro e Información General" al hacer clic fuera del contenido
    window.addEventListener('click', function(event) {
        if (event.target == document.getElementById('modal-intro-info')) {
            document.getElementById('modal-intro-info').style.display = 'none';
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

    // Cerrar todos los modales al hacer clic en el botón de cerrar
    closeModal.addEventListener('click', () => {
        closeAllModals();
    });

    // Cerrar todos los modales al hacer clic fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            closeAllModals();
        }
    });
});
