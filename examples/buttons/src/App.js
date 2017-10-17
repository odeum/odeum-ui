import React, { Component } from 'react'
// import logo from './logo.svg'
import { Logo, Header } from './AppStyles'
import { Button, ButtonPanel } from 'odeum-ui'
import { Heading } from 'odeum-primitives'


class App extends Component {
	render() {
		return (
			<div>
				<Header>					
					<Logo size={'100px'} rotate={true} />
					<Heading>ODEUM UI - Buttons Example</Heading>
				</Header>
				
				<p>ODEUM UI (odeum-ui) are a collection of simple visual component primitives build for ODEUM Code UI framework. All components are build with styled-components and ReactJS</p>
				<p>To get started, edit <b>src/App.js</b> and save to reload.</p>
				
				 
				<ButtonPanel justify='center' align='center' direction='row' wrap='wrap' height='auto'>
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
						active={false}
						inactiveColor={'#006CB2'}
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

				</ButtonPanel>
			</div>
		)
	}
}

export default App
