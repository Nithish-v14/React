import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Import CSS file for styling

function App() {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState('');
    const [rollNo, setRollNo] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState(''); // Changed from Phone to phone
  
    const handleAddStudent = () => {
      const newStudent = {
        name: name,
        rollNo: rollNo,
        city: city,
        phone: phone, // Changed from Phone to phone
        attendance: 'Present' // Default to 'Present' when adding a student
      };
  
      setStudents([...students, newStudent]);
      setName('');
      setRollNo('');
      setCity('');
      setPhone('');
    };
  
    const toggleAttendance = (index) => {
      const updatedStudents = [...students];
      updatedStudents[index].attendance =
        updatedStudents[index].attendance === 'Present' ? 'Absent' : 'Present';
      setStudents(updatedStudents);
    };
  
    return (
      <div className="App">
        <h1>Attendance Management System</h1>
        <div className="form">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '300px', padding: '10px' }} // Increase width and padding
          />
          <input
            type="text"
            placeholder="Roll No"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            style={{ width: '150px', padding: '10px' }} // Increase width and padding
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{ width: '200px', padding: '10px' }} // Increase width and padding
          />
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)} // Changed from Phone to phone
            style={{ width: '200px', padding: '10px' }} // Increase width and padding
          />
          <button onClick={handleAddStudent}>Add Student</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll No</th>
              <th>City</th>
              <th>Phone</th> {/* Changed from phone to Phone */}
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.rollNo}</td>
                <td>{student.city}</td>
                <td>{student.phone}</td> {/* Changed from Phone to phone */}
                <td>
                  <button
                    className={student.attendance === 'Present' ? 'present' : 'absent'}
                    onClick={() => toggleAttendance(index)}
                  >
                    {student.attendance}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
       <center><Link to='/'>Login</Link></center>
      </div>
      
    );
  }

export default App;
