function fetchQuote() {
    fetch('https://dummyjson.com/quotes')
        .then(res => res.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.quotes.length);
            const randomQuote = data.quotes[randomIndex];

            const quoteTextElement = document.getElementById('quoteText');
            const quoteAuthorElement = document.getElementById('quoteAuthor');

            quoteTextElement.textContent = randomQuote.quote;
            quoteAuthorElement.textContent = `- ${randomQuote.author}`;
        })
}
fetchQuote();



function fetchTodos() {
    fetch('https://dummyjson.com/todos')
        .then(res => res.json())
        .then(data => {
            const todos = data.todos;
            const tbody = document.querySelector('#todosTable tbody');
            todos.forEach(todo => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${todo.id}</td>
                    <td>${todo.todo}</td>
                    <td>${todo.completed ? '✔️' : '❌'}</td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(err => {
            console.error('Error fetching todos:', err);
        });
}
fetchTodos();

