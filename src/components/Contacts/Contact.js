import React, { useState } from 'react'
import styles from './Contact.module.scss'
import Title from '../Shared/Title/Title'
import axios from 'axios'

function Contact() {

	const [initialState, setInitialState] = useState({
		name: '',
		email: '',
		message: ''
	})

	const onSubmitForm = (e) => {
		e.preventDefault()
		// http://localhost:3010/sendMessage
		// https://gmail-smtp-nodejs-server.herokuapp.com/
		axios.post('https://gmail-smtp-nodejs-server.herokuapp.com/sendMessage', {
			name: e.target[0].value,
			email: e.target[1].value,
			message: e.target[2].value
		})
		alert('Message has been sent')
		setInitialState({
			name: '',
			email: '',
			message: ''
		})
	}

	const onChangeInputsValue = (e) => {
		e.persist()
		setInitialState((prev)=> ({
			...prev,
			[e.target.name]: e.target.value
		}))
	}

	return (
		<div className={styles['contacts']}>
			<div className="container">
				<div className={styles.contacts__inner}>
					<Title title="Contact"/>
					<form
						onSubmit={(e) => {
							onSubmitForm(e)
						}}
						action="#"
						method="Post"
						id={'contact-form'}
						className={styles.form}>
						<input
							value={initialState.name}
							type="text"
							placeholder="Name"
							name="name"
							required
							onChange={onChangeInputsValue}
						/>
						<input
							value={initialState.email}
							type="email"
							placeholder="Email"
							name="email"
							required
							onChange={onChangeInputsValue}
						/>
						<textarea
							value={initialState.message}
							name="message"
							placeholder="Message"
							required
							onChange={onChangeInputsValue}
						/>
						<input
							type="submit"
							value="Send"
						/>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Contact
