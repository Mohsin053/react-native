import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { AuthContext } from './AuthContext';
import Loader from '../components/Loader';

const AppNav = () => {
	const { loading, user } = useContext(AuthContext);

	if (loading) {
		return <Loader />;
	}
	return (
		<>
			<NavigationContainer>
				{ <MainStack /> }
			</NavigationContainer>
			<Toast />
		</>
	);
};

export default AppNav;
