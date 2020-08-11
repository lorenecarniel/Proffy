import React, { useState } from 'react';
import logoImg from '../../assets/images/logo.svg';
import backPage from '../../assets/images/icons/back.svg';
import Input from '../../components/Input';
import './styles.css';

function ForgotPassword(){
	const [email, setEmail] = useState('');
	const [isLinkEnabled, setIsLinkEnabled] = useState('disabled');

	return (
		<div id='forgot-page'>
			<div className='input-container'>
				<div className="header">
					<img src={backPage} alt='Voltar' />
				</div>
				
				<form>
					<label htmlFor='senha'>Eita, esqueceu sua senha?</label>
					<a>Não esquenta, vamos dar um jeito nisso.</a>
					<div className='input-wrapper'>
						<Input
							name='email'
							type='email'
							placeholder='E-mail'
							value={email}
							onChange={(e) => {
								setIsLinkEnabled('');
								setEmail(e.target.value);
							}}
						/>
					</div>

					<button type='submit' className={isLinkEnabled} >
						Enviar
					</button>
				</form>
			</div>
			<div className='intro-container'>
				<div className='background'>
					<div className='wrapper'>
						<img src={logoImg} alt='Proffy' />
						<div className='description'>Sua plataforma de estudos online.</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
