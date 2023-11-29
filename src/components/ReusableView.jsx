import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ReusableView = ({ onPress, title, description, additionalInfo }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.additionalInfo}>{additionalInfo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff', // Set the background color to white
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    textAlign: 'left',
    marginBottom: 8,
  },
  additionalInfo: {
    color: '#666',
  },
});

export default ReusableView;
