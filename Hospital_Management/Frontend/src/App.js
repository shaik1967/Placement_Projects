import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import BookAppointment from './pages/BookAppointment/BookAppointment';
import Footer from './components/Footer/Footer';
import './App.css';
import LoginPopup from './components/LoginPopup/LoginPopup';
import DoctorProfile from './components/doctor_profile/DoctorProfile';
import PatientForm from './components/doctor_profile/patientAppointInfo';
import Profile from './components/doctor_profile/profile';
import { useSelector } from 'react-redux';
import Spinner from './components/spinner/spinner';
import ProtectedRoute from './components/Protectedroute';
import PublicRoute from './components/Publicroute';

const App = () => {
  const [showLogin, setshowLogin] = useState(false);
  const loading = useSelector(state => state.alerts.loading);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {showLogin && <LoginPopup setshowLogin={setshowLogin} />}
          <div className="app">
            <Navbar setshowLogin={setshowLogin} />
            <Routes>
            <Route 
                path="/" 
                element={
                  <PublicRoute>
                <Home />
                </PublicRoute>
                } 
            />
            <Route 
                path="/BookAppointment" 
                element={
                    <PublicRoute>
                        <BookAppointment />
                    </PublicRoute>
                } 
            />
            <Route 
                path="/doctorProfile" 
                element={
                    <ProtectedRoute>
                        <DoctorProfile />
                    </ProtectedRoute>
                } 
            />
            <Route 
                path="/profile" 
                element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                } 
            />
            <Route 
                path="/patientAppointInfo" 
                element={
                    <PublicRoute>
                        <PatientForm />
                    </PublicRoute>
                } 
            />
        </Routes>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
