import React from 'react';
import { ScrollView } from 'react-native';
import MiniatureCard from '../MiniatureCard';

// TODO => this will get a prop with data and will render it accordingly
const CardListContainer: React.FC = () => {
  return (
    <ScrollView style={{ maxHeight: 570 }}> {/* Add maxHeight or adjust as needed */}
      <MiniatureCard />
      <MiniatureCard />
      <MiniatureCard />
    </ScrollView>
  );
};

export default CardListContainer;
