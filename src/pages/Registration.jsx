import { useState } from 'react';
import Subscribe from '../components/Subscribe';

const PERKS = [
  '15% off welcome offer',
  'Free shipping, returns and exchanges on all orders',
  '$10 off a purchase on your birthday',
  'Early access to products',
  'Exclusive offers & rewards',
];

function Registration() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    gender: 'male',
    email: '',
    password: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.password) {
      alert('Please fill in all fields');
      return;
    }
    if (form.password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }
    alert(`Welcome, ${form.firstName}! Registration successful.`);
    setForm({
      firstName: '',
      lastName: '',
      gender: 'male',
      email: '',
      password: '',
    });
  };

  return (
    <>
      <div className="page-banner">
        <div className="container page-banner-inner">
          <h1>Registration</h1>
        </div>
      </div>

      <div className="container registration-page">
        <div className="registration-layout">
          <form className="reg-form" onSubmit={onSubmit}>
            <p className="reg-label">Your Name</p>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={onChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={onChange}
            />

            <div className="reg-gender">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={form.gender === 'male'}
                  onChange={onChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={form.gender === 'female'}
                  onChange={onChange}
                />
                Female
              </label>
            </div>

            <p className="reg-label">Login details</p>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={onChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={onChange}
            />
            <p className="reg-hint">
              Please use 8 or more characters, with at least 1 number and a
              mixture of uppercase and lowercase letters
            </p>

            <button type="submit" className="btn-join">
              Join Now &nbsp;→
            </button>
          </form>

          <aside className="reg-perks">
            <h2>Loyalty has its perks</h2>
            <p className="reg-perks-intro">
              Get in on the loyalty program where you can earn points and unlock
              serious perks. Starting with these as soon as you join:
            </p>
            <ul>
              {PERKS.map((perk) => (
                <li key={perk}>
                  <span className="check">✓</span> {perk}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>

      <Subscribe />
    </>
  );
}

export default Registration;
