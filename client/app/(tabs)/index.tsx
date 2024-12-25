import GenerateButton from '@/components/GenerateButton';
import MiniatureCard from '@/components/MiniatureCard';
import SearchBox from '@/components/SearchBox';
import FilterBox from '@/components/FilterBox';
import { View, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <>
      <View style={{marginTop: 40}}>
        <View style={styles.search_filter_box}>
          <SearchBox/>
          <FilterBox/>
        </View>
        <MiniatureCard/>
        <MiniatureCard/>
        <MiniatureCard/>
        <MiniatureCard/>
        <MiniatureCard/>
        <MiniatureCard/>
        <GenerateButton/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  search_filter_box: {
    margin: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})