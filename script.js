document.addEventListener('DOMContentLoaded', () => {
    const submit = document.getElementById('submit');
    const outputParagraph = document.getElementById('output');

    submit.addEventListener('click', () => {
        outputParagraph.textContent = "Hello World!";
    });
});