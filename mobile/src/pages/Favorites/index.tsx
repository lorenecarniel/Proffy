import React, { useState } from 'react';
import styles from './styles';
import { View, ScrollView } from 'react-native';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

function Favorites() {
	const [favorites, setFavorites] = useState([]);

	function loadFavorites() {
		AsyncStorage.getItem('favorites').then((res) => {
			if (res) {
				const favoriteTeachers = JSON.parse(res);

				setFavorites(favoriteTeachers);
			}
		});
	}

	useFocusEffect(() => {
		React.useCallback(() => {
			loadFavorites();
		}, []);
	});

	return (
		<View style={styles.container}>
			<PageHeader title='Meus proffys favoritos' />

			<ScrollView
				style={styles.favoriteList}
				contentContainerStyle={{
					paddingHorizontal: 16,
					paddingBottom: 16,
				}}
			>
				{favorites.map((teacher: Teacher) => {
					return <TeacherItem key={teacher.id} teacher={teacher} isFavorite={true} />;
				})}
			</ScrollView>
		</View>
	);
}

export default Favorites;