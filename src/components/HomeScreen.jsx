
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';
import NutritionCard from './NutritionCard';
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <View style={styles.header}>
          <Text style={styles.logo}>🌿</Text>
          <View style={styles.brandContainer}>
            <Text style={styles.brand}>FoodScan</Text>
            <Text style={styles.brandSubtitle}>
              NUTRITION & WELLNESS
            </Text>
          </View>
          <Pressable style={styles.languageButton} onPress={() =>Alert.alert('Language', 'Language selection coming soon.')}>
            <Text style={styles.languageText}>EN ▾</Text>
          </Pressable>
        </View>
        <View style={styles.welcome}>
          <Text style={styles.greeting}>Namaste!</Text>
          <Text style={styles.heading}>
            Nourishing you,{'\n'}nurturing your baby.
          </Text>
          <Text style={styles.description}>
            Let's care for you, one meal at a time.
          </Text>
        </View>
        <View style={styles.pregnancyCard}>
          <Text style={styles.eyebrow}>YOUR JOURNEY</Text>
          <View style={styles.pregnancyRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.pregnancyTitle}>
                Your pregnancy
              </Text>
              <Text style={styles.pregnancyDescription}>
                Your personal nutrition companion
              </Text>
            </View>
            <Text style={styles.pregnancyEmoji}>🤰🏽</Text>
          </View>
          <Pressable style={styles.setupButton} onPress={() => Alert.alert('Pregnancy details','Pregnancy setup will be added next.')}>
            <Text style={styles.setupButtonText}>
              Set up your pregnancy
            </Text>
          </Pressable>
        </View>
        <Text style={styles.sectionTitle}>
          Your food, understood
        </Text>
        <View style={styles.scanCard}>
          <View style={styles.cameraIcon}>
            <Text style={{ fontSize: 32 }}></Text>
          </View>
          <Text style={styles.scanTitle}>
            What's on your plate?
          </Text>
          <Text style={styles.scanDescription}>
            Take a photo of your meal to explore its
            estimated nutrition and food groups.
          </Text>
          <Pressable style={styles.scanButton} onPress={() =>Alert.alert('FoodScan','Camera integration will be added next.')}>
            <Text style={styles.scanButtonText}>
              Scan My Food
            </Text>
          </Pressable>
          <Pressable onPress={() => Alert.alert('Meal entry', 'Manual meal entry coming soon.')}>
            <Text style={styles.manualEntry}>
              Enter meal manually
            </Text>
          </Pressable>
        </View>
        <Text style={styles.sectionTitle}>
          Nutrition essentials
        </Text>
        <Text style={styles.sectionSubtitle}>
          Learn about nutrients in everyday foods.
        </Text>
        <View style={styles.nutritionGrid}>
          <NutritionCard title="Iron" description="Supports healthy blood" color="#FBE9DE" onPress={() => showNutrient('Iron')}/>
          <NutritionCard
            title="Calcium"
            description="Supports bones and teeth"
            color="#E4F0FA"
            onPress={() => showNutrient('Calcium')}
          />

          <NutritionCard
            title="Protein"
            description="Supports growth and repair"
            color="#F6EBCB"
            onPress={() => showNutrient('Protein')}
          />

          <NutritionCard
            title="Folate"
            description="Important during pregnancy"
            color="#E3F0DF"
            onPress={() => showNutrient('Folate')}
          />
        </View>


        <View style={styles.tipCard}>
          <Text style={styles.tipLabel}>
             HEALTHY HABIT
          </Text>

          <Text style={styles.tipTitle}>
            Make every meal count
          </Text>

          <Text style={styles.tipDescription}>
            Enjoy a variety of grains, pulses, vegetables,
            fruits and suitable protein sources.
          </Text>

          <Text style={styles.tipNote}>
            Follow your healthcare worker's advice for
            your individual nutrition needs.
          </Text>
        </View>

        <View style={styles.bottomNav}>
          <NavItem label="Home" active />
          <NavItem
            label="Food Scan"
            onPress={() =>
              Alert.alert('FoodScan', 'Scanner coming soon.')
            }
          />
          <NavItem
            label="Learn"
            onPress={() =>
              Alert.alert('Learn', 'Nutrition lessons coming soon.')
            }
          />
          <NavItem
            label="Profile"
            onPress={() =>
              Alert.alert('Profile', 'Profile screen coming soon.')
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function showNutrient(nutrient) {
  Alert.alert(
    nutrient,
    `Learn about ${nutrient.toLowerCase()} and its role in a balanced diet.`
  );
}

function NavItem({ emoji, label, active, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={styles.navItem}
    >
      <Text style={{ fontSize: 21 }}>{emoji}</Text>

      <Text
        style={[
          styles.navLabel,
          active && styles.activeNavLabel,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F8F0',
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    fontSize: 32,
    backgroundColor: '#DDEBD9',
    overflow: 'hidden',
    borderRadius: 15,
    padding: 8,
  },
  brandContainer: {
    flex: 1,
    marginLeft: 12,
  },
  brand: {
    fontSize: 23,
    fontWeight: '800',
    color: '#234B38',
  },
  brandSubtitle: {
    fontSize: 9,
    letterSpacing: 1.2,
    color: '#64816A',
    marginTop: 3,
  },
  languageButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DCE5D7',
    padding: 11,
    borderRadius: 12,
  },
  languageText: {
    color: '#234B38',
    fontWeight: '700',
  },
  welcome: {
    marginBottom: 24,
  },
  greeting: {
    fontSize: 17,
    fontWeight: '700',
    color: '#527B53',
    marginBottom: 8,
  },
  heading: {
    fontSize: 30,
    lineHeight: 38,
    fontWeight: '800',
    color: '#203F30',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    lineHeight: 23,
    color: '#647368',
  },
  pregnancyCard: {
    backgroundColor: '#DCEBDD',
    borderRadius: 22,
    padding: 18,
    marginBottom: 28,
  },
  eyebrow: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.5,
    color: '#527451',
    marginBottom: 8,
  },
  pregnancyRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pregnancyTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#254B34',
  },
  pregnancyDescription: {
    fontSize: 12,
    color: '#55705A',
    marginTop: 6,
  },
  pregnancyEmoji: {
    fontSize: 43,
    marginLeft: 8,
  },
  setupButton: {
    backgroundColor: '#FFFFFF',
    padding: 13,
    borderRadius: 12,
    marginTop: 18,
    alignItems: 'center',
  },
  setupButtonText: {
    color: '#28533A',
    fontWeight: '800',
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 21,
    color: '#243F30',
    fontWeight: '800',
    marginBottom: 14,
  },
  sectionSubtitle: {
    fontSize: 13,
    color: '#718071',
    marginTop: -8,
    marginBottom: 14,
  },
  scanCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#E7EBDD',
    padding: 20,
    alignItems: 'center',
    marginBottom: 30,
  },
  cameraIcon: {
    width: 68,
    height: 68,
    backgroundColor: '#E7F1E3',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  scanTitle: {
    fontSize: 21,
    fontWeight: '800',
    color: '#254531',
    textAlign: 'center',
  },
  scanDescription: {
    fontSize: 14,
    lineHeight: 22,
    color: '#6B796D',
    textAlign: 'center',
    marginTop: 9,
    marginBottom: 18,
  },
  scanButton: {
    width: '100%',
    minHeight: 54,
    backgroundColor: '#286442',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
  },
  manualEntry: {
    color: '#286442',
    fontSize: 13,
    fontWeight: '700',
    marginTop: 15,
    padding: 5,
  },
  nutritionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 26,
  },
  tipCard: {
    backgroundColor: '#254D38',
    padding: 20,
    borderRadius: 22,
    marginBottom: 26,
  },
  tipLabel: {
    color: '#C8E5BC',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 12,
  },
  tipTitle: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '800',
    marginBottom: 9,
  },
  tipDescription: {
    color: '#E1EBDD',
    fontSize: 14,
    lineHeight: 22,
  },
  tipNote: {
    color: '#C8DCC7',
    fontSize: 12,
    lineHeight: 19,
    marginTop: 12,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingVertical: 13,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: '#E6EBDD',
    justifyContent: 'space-around',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  navLabel: {
    color: '#788477',
    fontSize: 10,
    fontWeight: '600',
    marginTop: 5,
  },
  activeNavLabel: {
    color: '#286442',
    fontWeight: '800',
  },
});
