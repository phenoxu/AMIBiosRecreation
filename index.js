const selectible = document.querySelectorAll('.selectible');
const description = document.getElementById('description');

fetch('json/boot.description.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors du chargement du fichier JSON');
        }
        return response.json();
    })
    .then(data => {
        selectible.forEach(element => {
            element.addEventListener('mouseenter', function() {
                const elementId = this.id;
                const found = data.find(item => item.id === elementId);

                if (found) {
                    description.innerHTML = found.description;
                    description.classList.remove('defaultText');
                }
            });
            element.addEventListener('mouseleave', function() {
                description.innerHTML = '<span class="default-text">Hover over items to see their descriptions</span>';
            });
        });
    })
    .catch(error => {
        console.error('Error:', error);
        description.innerHTML = '<span style="color: red;">Error while loading...</span>';
    });
    