// src/data/UserData.js


// src/data/UserData.js
const usersData = [
    {
      id: 1,
      name: 'John Doe',
      username: 'john_doe',
      email: 'john@example.com',
      address: {
        street: '123 Main St',
        city: 'Cityville',
        zipCode: '12345',
      },
      phone: '555-1234',
      website: 'johndoe.com',
      company: {
        name: 'ABC Inc.',
        catchPhrase: 'Making things happen',
        bs: 'Best Service',
      },
    },
    {
      id: 2,
      name: 'Jane Doe',
      username: 'jane_doe',
      email: 'jane@example.com',
      address: {
        street: '456 Oak St',
        city: 'Townsville',
        zipCode: '67890',
      },
      phone: '555-5678',
      website: 'janedoe.com',
      company: {
        name: 'XYZ Corp.',
        catchPhrase: 'Innovate and Excel',
        bs: 'Top Quality',
      },
    },
    // Puedes agregar más usuarios según sea necesario
  ];
  
  const UserData = {
    async getUserInfo(userId) {
      try {
        // Simulamos una pequeña demora para emular una solicitud asíncrona
        await new Promise(resolve => setTimeout(resolve, 1000));
  
        // Buscamos el usuario por ID en el array
        const user = usersData.find(user => user.id === userId);
  
        if (user) {
          return user;
        } else {
          throw new Error('Usuario no encontrado');
        }
      } catch (error) {
        throw error;
      }
    },
  };
  
  export default UserData;