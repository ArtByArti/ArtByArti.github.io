const panelHeader = document.getElementById('panel-header');
const panelContent = document.getElementById('panel-content');
const panel = document.getElementById('panel');

panelHeader.addEventListener('click', function () {
    if (panelContent.style.display === 'none') {
        panelContent.style.display = 'block';
        panel.classList.add('expanded');
    } else {
        panelContent.style.display = 'none';
        panel.classList.remove('expanded');
    }
});
