import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './components/Layout/SharedLayout';
import UserRoles from './pages/UserRoles';
import EditRole from './pages/EditRole';
import CreateRole from './pages/CreateRole';

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/home" element={<UserRoles />} />
            <Route path="/edit/:id" element={
                <EditRole />
            } />
            <Route path="/create" element={
                <CreateRole />
            } />
            <Route path="/create/:id" element={
                <CreateRole />
            } />
            <Route path="/page3" element={
                <SharedLayout title="Page3">
                    <h1>Page 3</h1>
                </SharedLayout>
            } />
            <Route path="/page3" element={
                <SharedLayout title="Page3">
                    <h1>Page 3</h1>
                </SharedLayout>
            } />
            <Route path="/page4" element={
                <SharedLayout title="Page4">
                    <h1>Page 4</h1>
                </SharedLayout>
            } />
            <Route path="/page5" element={
                <SharedLayout title="Page5">
                    <h1>Page 5</h1>
                </SharedLayout>
            } />
            <Route path="/page6" element={
                <SharedLayout title="Page6">
                    <h1>Page 6</h1>
                </SharedLayout>
            } />
            <Route path="/page7" element={
                <SharedLayout title="Page7">
                    <h1>Page 7</h1>
                </SharedLayout>
            } />
            <Route path="/page8" element={
                <SharedLayout title="Page8">
                    <h1>Page 8</h1>
                </SharedLayout>
            } />
        </Routes>
    );
};

export default Router;