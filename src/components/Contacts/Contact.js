import React from 'react'
import styles from './Contact.module.scss'
import Title from '../Shared/Title/Title'
import axios from 'axios'

function Contact() {

	const onSubmitForm = (e) => {
		e.preventDefault()
		// http://localhost:3010/sendMessage
		// https://gmail-smtp-nodejs-server.herokuapp.com/
		axios.post('https://gmail-smtp-nodejs-server.herokuapp.com/sendMessage', {
			name: e.target[0].value,
			email: e.target[1].value,
			message: e.target[2].value
		})
			.then(() => {
				alert('Message has been sent')
			})
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
					<input type="text" placeholder="Name" name={'name'} required/>
					<input type="email" placeholder="Email" name={'email'} required/>
					<textarea type="text" name={'message'} placeholder="Message" required/>
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
