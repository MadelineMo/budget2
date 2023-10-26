
import React, { useState, useEffect, Component, Container } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ContentText, Header, Main, Wrapper } from './components/structure.js';
import { styles } from './styles/styles.js';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes.js'

class OutputText extends Component {
	render() {
		return(
			<Text>{ this.props.output }</Text>
		)
	}
}

class Heading extends Component {
	render() {
	  return (
		<Text style={styles.defaultHeading}>
		  {this.props.children}
		</Text>
  ); }
  }

class MainHeading extends Component {
	render() {
	  return (
		<Heading>
		  <Text style={styles.mainHeading}>
			{this.props.children}
		  </Text>
		</Heading>
  ); }
  }
  class SubHeading extends Component {
	render() {
	  return (
		<Heading>
  
  <Text style={styles.subHeading}>
			{this.props.children}
		  </Text>
		</Heading>
  ); }
  }

// screen components grouped in container...
class Screen extends Component {
	render() {
	  return (
		<NavigationContainer>
		  <Container>
		  <Header style={styles.screenHeader} type={styles.h1} heading="Home" />
			<Main style={styles.main}>
				<Text style={{ color: "#0378A6", fontSize: 24 }}>Hello World!</Text>
				<OutputText output="welcome to the basic tester... " />
			</Main>
			</Container>
		</NavigationContainer>
	  );
	}
}

const App = () => {
	const[name, setName] = useState('Daisy');
	return (
		<Wrapper style={styles.wrapper}>
			
			<Header style={styles.screenHeader} type={styles.h1} heading="Home" />
			<Main style={styles.main}>
				<Text style={{ color: "#0378A6", fontSize: 24 }}>Hello {name}</Text>
				<OutputText output="welcome to the basic tester... " />
			</Main>
			<View style={styles.headingGroup}>
				<MainHeading>Main Heading...</MainHeading>
				<SubHeading>Sub Heading... </SubHeading>
			</View>
		</Wrapper>
	);
};

export default Screen;
