function getUser() {
    const userDiv = document.getElementById('user');
    userDiv.textContent = 'Loading...';
  
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        const user = data.results[0];
        userDiv.innerHTML = `
          <h2>${user.name.title} ${user.name.first} ${user.name.last}</h2>
          <p>Email: ${user.email}</p>
          <p>Location: ${user.location.city}, ${user.location.country}</p>
          <img src="${user.picture.medium}" alt="User Picture">
        `;
      })
      .catch(error => {
        console.error('Error:', error);
        userDiv.textContent = 'Failed to load user data.';
      });
  }
  