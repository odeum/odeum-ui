import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from 'odeum-ui'
import { Heading } from 'odeum-primitives'

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<Heading>ODEUM UI - Buttons Example</Heading>
				</header>
				<p className="App-intro">ODEUM UI is a UI primitives component library build for use with ODEUM Code. To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				
				<Button
					label={'Send Mail'}
					icon='mail_outline'
					iconSize={18}
					color={'#3B97D3'}
				/>

				<Button
					label={'Save'}
					icon='check_circle'
					iconSize={18}
					color={'#34495D'}
				/>

				<Button
					label={'Laptop Settings'}
					icon='laptop_mac'
					iconSize={18}
					color={'#81C1EA'}
				/>

				<Button
					label={''}
					icon='place'
					iconSize={18}
					color={'#5E5E5E'}
				/>

				<Button
					label={''}
					icon='view_list'
					iconSize={18}
					color={'#FF9600'}
				/>

				<Button
					label={''}
					icon='view_module'
					iconSize={18}
					color={'#764EB9'}
				/>

				<Button
					label={'Go to Dashboard'}
					icon='dashboard'
					iconSize={18}
					color={'#D42027'}
				/>

				<Button
					label={'Create new'}
					icon='add_circle'
					iconSize={18}
					color={'#F8BB31'}
				/>

				<Button
					label={'Upload Data'}
					icon='cloud_upload'
					iconSize={18}
					color={'#25B89A'}
				/>

				<Button
					label={'Reports'}
					icon='assignment_turned_in'
					iconSize={18}
					color={'#FF9600'}
				/>

				<Button
					label={'Card View'}
					icon='view_module'
					iconSize={18}
					color={'#764EB9'}
				/>

				<Button
					label={'Bug Report'}
					icon='bug_report'
					iconSize={18}
					color={'#3B97D3'}
				/>

				<Button
					label={'Add User'}
					icon='person_add'
					iconSize={18}
					color={'#E98832'}
					active={false}
					inactiveColor={'#006CB2'}
				/>

				<Button
					label={''}
					icon='input'
					iconSize={18}
					color={'#2AC639'}
				/>

				<Button
					label={'No Icon'}
					iconSize={18}
					color={'#EA228F'}
				/>

				<Button
					label={'Select Time'}
					icon='access_time'
					iconSize={18}
					color={'#D4CD11'}
				/>

				<Button
					label={'Disabled'}
					icon='visibility'
					iconSize={18}
					color={'#000'}
					isDisabled={true}
				/>

				<Button
					label={'Default Color'}
					icon='visibility_off'
					iconSize={18}
					active={false}
				/>

				<Button
					label={'Disabled'}
					iconSize={18}
					color={'#513085'}
					isDisabled={true}
				/>

				<Button
					label={''}
					icon='menu'
					iconSize={18}
					color={'#5E5E5E'}
					isDisabled={true}
				/>

				<Button
					label={'Create new'}
					icon='add_circle'
					iconSize={32}
					color={'#3B97D3'}
					size={'large'}
				/>

			</div>
		)
	}
}

export default App
