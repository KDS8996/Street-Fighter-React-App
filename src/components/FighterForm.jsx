import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const FighterForm = ({ onSubmit, initialValues }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: initialValues || {
      name: '',
      specialMove: '',
      fightingStyle: '',
      easeOfUse: '',
      height: 0,
      weight: 0,
      likes: '',
      dislikes: '',
      birthplace: ''
    }
  });

  const handleFormSubmit = async (formData) => {
    try {
      if (initialValues) {
        // Update existing fighter
        await axios.put(`http://localhost:5000/api/fighters/${initialValues.id}`, formData);
        alert('Fighter updated successfully!');
      } else {
        // Add new fighter
        await axios.post('http://localhost:5000/api/fighters', formData);
        alert('Fighter added successfully!');
      }
      onSubmit(); // Notify parent component of form submission
      reset(); // Reset form fields after successful submission
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit fighter data. Please try again.');
    }
  };

  return (
    <div>
      <h2>{initialValues ? 'Edit Fighter' : 'Add Fighter'}</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <label>Name:</label>
        <input {...register('name', { required: true })} />
        <label>Special Move:</label>
        <input {...register('specialMove', { required: true })} />
        <label>Fighting Style:</label>
        <input {...register('fightingStyle')} />
        <label>Ease of Use:</label>
        <input {...register('easeOfUse')} />
        <label>Height (cm):</label>
        <input type="number" {...register('height')} />
        <label>Weight (kg):</label>
        <input type="number" {...register('weight')} />
        <label>Likes:</label>
        <input {...register('likes')} />
        <label>Dislikes:</label>
        <input {...register('dislikes')} />
        <label>Birthplace:</label>
        <input {...register('birthplace')} />
        <button type="submit">{initialValues ? 'Update Fighter' : 'Add Fighter'}</button>
      </form>
    </div>
  );
};

export default FighterForm;
