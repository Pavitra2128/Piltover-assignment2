import { useRouter } from 'next/router'; // Import useRouter hook
import { useForm } from 'react-hook-form';
import axios from 'axios';

const SignupForm = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter(); // Initialize useRouter hook

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/api/users/register', data);
      // Check if the signup was successful
      if (response.status === 201) {
        router.push('/'); // Replace '/' with the path of your index.js file
      }
    } catch (error) {
      console.error('There was an error registering the user:', error);
      alert('Error signing up');
    }
  };

  return (
    <>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 300px;
          margin: auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
        }
        h2 {
          margin-bottom: 1rem;
        }
        label {
          display: block;
          margin-bottom: 0.5rem;
        }
        input[type="text"],
        input[type="email"],
        input[type="date"],
        input[type="password"],
        input[type="tel"] {
          width: calc(100% - 20px);
          padding: 0.5rem;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          width: calc(100% - 20px);
          padding: 0.5rem 1rem;
          background-color: #114f8b;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #0e3e6f;
        }
      `}</style>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Signup</h2>
        <input {...register('name')} placeholder="Name" type="text" required />
        <input {...register('email')} placeholder="Email" type="email" required />
        <input {...register('phone')} placeholder="Phone" type="tel" required />
        <input {...register('address')} placeholder="Address" type="text" required />
        <input {...register('dateOfBirth')} placeholder="Date of Birth" type="date" required />
        <input {...register('course')} placeholder="Course" type="text" required />
        <input {...register('password')} placeholder="Password" type="password" required />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default SignupForm;
