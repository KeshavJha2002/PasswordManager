import CardInfoContainer from '@/components/ui/CardInfoContainer';
import CardListContainer from '@/components/ui/CardListContainer';
import SearchAndFilterBar from '@/components/ui/SearchAndFilterBar';
import { View } from 'react-native';

export default function HomeScreen() {
  // TODO: get the data
  // TODO: send the count of data to the CardInfoContainer
  return (
    <>
      <View style={{marginTop: 40}}>
        <CardInfoContainer/>
        <SearchAndFilterBar/>
        <CardListContainer/>
      </View>
    </>
  );
};
