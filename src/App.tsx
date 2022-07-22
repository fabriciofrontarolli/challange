import React, { useEffect, useState } from 'react';
import Autocomplete from './components/Autocomplete';
import axios from 'axios';
import './App.css';

interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

function App() {
  const [users, setUsers] = useState<IUser[]>([]) ;
  const [text, setText] = useState('');
  const [selectedUser, setSelectedUser] = useState<IUser>();

  useEffect(() => {
    const loadUsers = async () => {
      const usersResponse = await axios.get('https://reqres.in/api/users');
      const users = usersResponse.data.data;
      setUsers(users);
    }
    loadUsers();
  }, []);

  const onChange = (text: string) => {
    setText(text);
  }

  const onSelect = (user: IUser) => {
    setSelectedUser(user);
    setText(user.first_name);
  }

  return (
    <div className="App">
      <div className='autocomplete-content'>
        <Autocomplete
          items={users}
          value={text}
          selected={selectedUser}
          onChange={onChange}
          onSelect={onSelect}
        />
      </div>

      {
        selectedUser && (
          <section className='user-info'>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email Name</th>
                  <th>Avatar Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span>{ selectedUser?.id}</span>
                  </td>
                  <td>
                    <span>{ selectedUser?.first_name}</span>
                  </td>
                  <td>
                    <span>{ selectedUser?.last_name}</span>
                  </td>
                  <td>
                    <span>{ selectedUser?.email}</span>
                  </td>
                  <td>
                    <img src={selectedUser?.avatar} />
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        )
      }
    </div>
  );
}

export default App;
