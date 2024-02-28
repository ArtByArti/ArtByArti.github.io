function addPanelListener(panelNum) {
    const panelHeader = document.getElementById(`panel-header${panelNum}`);
    const panelContent = document.getElementById(`panel-content${panelNum}`);
    const panel = document.getElementById(`panel${panelNum}`);
  
    panelHeader.addEventListener('click', function () {
        if (panel.classList.contains('expanded')) {
            panel.classList.remove('expanded');
        } else {
            panel.classList.add('expanded');
        }
    });
}

for (let i = 1; i <= 15; i++) {
    addPanelListener(i);
}
