import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';

export default function EventDetailScreen({ route }) {
  const { event } = route.params;

  const handleRSVP = () => {
    Alert.alert('RSVP Confirmed', `You have registered for ${event.title}!`);
  };

  return (
    <ScrollView style={styles.container} bounces={false}>
      <Image source={{ uri: event.banner }} style={styles.bannerImage} />

      <View style={styles.detailsBody}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.organizer}>Organized by {event.organizer}</Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>📅 Date: {event.date}</Text>
          <Text style={styles.infoText}>⏰ Time: {event.time}</Text>
          <Text style={styles.infoText}>📍 Location: {event.location}</Text>
        </View>

        <Text style={styles.sectionHeader}>About Event</Text>
        <Text style={styles.descriptionText}>{event.description}</Text>

        <Text style={styles.sectionHeader}>Prerequisites & Requirements</Text>
        {event.prerequisites.map((req, index) => (
          <Text key={index} style={styles.bulletItem}>
            • {req}
          </Text>
        ))}

        <TouchableOpacity style={styles.rsvpButton} onPress={handleRSVP}>
          <Text style={styles.rsvpButtonText}>Register for Event</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  bannerImage: {
    width: '100%',
    height: 220,
  },
  detailsBody: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111827',
  },
  organizer: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
    marginBottom: 16,
  },
  infoBox: {
    backgroundColor: '#F8FAFC',
    borderRadius: 8,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 14,
    color: '#334155',
    marginVertical: 2,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginTop: 10,
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#4B5563',
    marginBottom: 16,
  },
  bulletItem: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 4,
  },
  rsvpButton: {
    backgroundColor: '#4F46E5',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 28,
  },
  rsvpButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
});