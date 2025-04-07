
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const container = document.getElementById('friends-list');
    users.forEach(user => {
      const div = document.createElement('div');
      div.className = 'friend-card'; 
      div.innerHTML = `
        <strong>${user.name}</strong> @${user.username}<br>
        City: ${user.address.city}<br>
        Website: <a href="http://${user.website}" target="_blank">${user.website}</a><br>
        Company: ${user.company.name}<br>
        <em>${user.company.catchPhrase}</em><br>
        <small>${user.company.bs}</small>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error('Error loading friends:', err));
