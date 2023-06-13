// Fetch user data from MongoDB
fetch('/users')
  .then(response => response.json())
  .then(users => {
    const userTable = document.getElementById('userTable');

    users.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.dob}</td>
        <td>${user.gender}</td>
      `;
      userTable.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Error occurred while fetching user data:', error);
  });
