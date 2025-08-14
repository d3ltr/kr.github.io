// Переключение вкладок
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

// Фильтрация проектов
document.querySelectorAll('.filters').forEach(filterBlock => {
    const buttons = filterBlock.querySelectorAll('.filter');
    const projects = filterBlock.nextElementSibling.querySelectorAll('.project');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');

            const filter = button.dataset.filter;
            projects.forEach(project => {
                if (filter === 'all' || project.classList.contains(filter)) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
}); 
// Раскрытие и сворачивание уровней roadmap
document.querySelectorAll('.roadmap-level').forEach(level => {
    level.addEventListener('click', () => {
        level.classList.toggle('open');
    });
});
