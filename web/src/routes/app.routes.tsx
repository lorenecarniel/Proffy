import React from 'react';
import Landing from '../pages/Landing';
import TeacherList from '../pages/TeacherList';
import TeacherForm from '../pages/TeacherForm';
import { BrowserRouter, Route } from 'react-router-dom';
import ForgotPassword from '../pages/ForgotPassword';
import Register from '../pages/Register';
import PasswordSent from '../pages/PasswordSent';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Route exact path='/' component={Landing} />  
			<Route path='/study' component={TeacherList} />
			<Route path='/give-classes' component={TeacherForm} />
		</BrowserRouter>
	);
};

export default AppRoutes;
