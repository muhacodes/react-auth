import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Profile({ onLogout, userProfile }) {
 
  const { name, address, phone, email } = userProfile;

  

  if (!userProfile) {
    return <div>Loading...</div>; // You can customize this message or behavior
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-10 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <i className="fas fa-user-circle text-4xl mr-2"></i>
          <h2 className="text-xl font-semibold">{name}</h2>
        </div>
        <div className="flex mb-2">
          <div className="w-6">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <p className="ml-2">{address}</p>
        </div>
        <div className="flex mb-2">
          <div className="w-6">
            <i className="fas fa-phone text-black bg-black"></i>
          </div>
          <p className="ml-2">{phone}</p>
        </div>
        <div className="flex">
          <div className="w-6">
            <i className="fas fa-envelope"></i>
          </div>
          <p className="ml-2">{email}</p>
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
