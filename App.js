import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeCategory, setActiveCategory] = useState('Shows');

  const categories = ['Shows', 'Movies', 'Comedy', 'Music Videos'];
  
  const latestReleases = [
    { id: 1, title: 'Love Stories', free: true },
    { id: 2, title: 'Family Drama', free: true },
    { id: 3, title: 'Romance Special', free: true },
    { id: 4, title: 'Drama Series', free: false },
  ];

  const originals = [
    { id: 1, title: 'The Test Case', premium: true },
    { id: 2, title: 'Love Story', premium: true },
    { id: 3, title: 'Drama Special', premium: true },
    { id: 4, title: 'New Series', premium: true },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>spillTV</Text>
        </View>
        
        <TouchableOpacity style={styles.subscribeButton}>
          <Text style={styles.subscribeText}>Subscribe</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileIcon}>👤</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        
        {/* Hero Banner */}
        <View style={styles.heroBannerContainer}>
          <View style={styles.heroBanner}>
            <View style={styles.bannerContent}>
              <Text style={styles.bannerBadge}>STREAMING NOW</Text>
              <Text style={styles.bannerTitle}>Featured Show</Text>
            </View>
          </View>
          
          {/* Carousel Dots */}
          <View style={styles.carouselDots}>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((dot, index) => (
              <View 
                key={index} 
                style={[styles.dot, index === 0 && styles.activeDot]} 
              />
            ))}
          </View>
        </View>

        {/* Latest Release Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Latest Release</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
          >
            {latestReleases.map((item) => (
              <TouchableOpacity key={item.id} style={styles.contentCard}>
                {item.free && (
                  <View style={styles.freeBadge}>
                    <Text style={styles.freeBadgeText}>Free</Text>
                  </View>
                )}
                <View style={styles.cardImage}>
                  <Text style={styles.cardPlaceholder}>🎬</Text>
                </View>
                <View style={styles.logoWatermark}>
                  <Text style={styles.watermarkText}>क</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Originals Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Originals</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
          >
            {originals.map((item) => (
              <TouchableOpacity key={item.id} style={styles.contentCard}>
                {item.premium && (
                  <View style={styles.premiumBadge}>
                    <Text style={styles.premiumIcon}>👑</Text>
                  </View>
                )}
                <View style={styles.cardImage}>
                  <Text style={styles.cardPlaceholder}>📺</Text>
                </View>
                <View style={styles.logoWatermark}>
                  <Text style={styles.watermarkText}>क</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Category Tabs */}
        <View style={styles.categoryTabs}>
          {categories.map((cat, index) => (
            <TouchableOpacity 
              key={index}
              style={[
                styles.categoryTab,
                activeCategory === cat && styles.activeCategoryTab
              ]}
              onPress={() => setActiveCategory(cat)}
            >
              <Text style={[
                styles.categoryTabText,
                activeCategory === cat && styles.activeCategoryTabText
              ]}>
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* More Content Grid */}
        <View style={styles.gridSection}>
          {[1, 2, 3, 4].map((item) => (
            <TouchableOpacity key={item} style={styles.gridCard}>
              <View style={styles.gridImage}>
                <Text style={styles.cardPlaceholder}>🎭</Text>
              </View>
              <View style={styles.logoWatermark}>
                <Text style={styles.watermarkText}>क</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{height: 100}} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => setActiveTab('home')}
        >
          <Text style={[styles.navIcon, activeTab === 'home' && styles.activeNavIcon]}>
            🏠
          </Text>
          <Text style={[styles.navLabel, activeTab === 'home' && styles.activeNavLabel]}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => setActiveTab('search')}
        >
          <Text style={[styles.navIcon, activeTab === 'search' && styles.activeNavIcon]}>
            🔍
          </Text>
          <Text style={[styles.navLabel, activeTab === 'search' && styles.activeNavLabel]}>
            Search
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.microDramaButton}
        >
          <View style={styles.microDramaCircle}>
            <Text style={styles.microDramaIcon}>क</Text>
          </View>
          <Text style={styles.microDramaLabel}>Micro Drama</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => setActiveTab('download')}
        >
          <Text style={[styles.navIcon, activeTab === 'download' && styles.activeNavIcon]}>
            📥
          </Text>
          <Text style={[styles.navLabel, activeTab === 'download' && styles.activeNavLabel]}>
            Download
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => setActiveTab('watchlist')}
        >
          <Text style={[styles.navIcon, activeTab === 'watchlist' && styles.activeNavIcon]}>
            ☰
          </Text>
          <Text style={[styles.navLabel, activeTab === 'watchlist' && styles.activeNavLabel]}>
            Watchlist
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 50,
    paddingBottom: 12,
    backgroundColor: '#000',
  },
  menuButton: {
    padding: 8,
  },
  menuIcon: {
    color: '#fff',
    fontSize: 24,
  },
  logoContainer: {
    flex: 1,
    marginLeft: 15,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  subscribeButton: {
    borderWidth: 2,
    borderColor: '#FF9933',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginRight: 12,
  },
  subscribeText: {
    color: '#FF9933',
    fontSize: 14,
    fontWeight: '600',
  },
  profileButton: {
    width: 40,
    height: 40,
    backgroundColor: '#FF9933',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    fontSize: 20,
  },
  content: {
    flex: 1,
  },
  heroBannerContainer: {
    marginBottom: 20,
  },
  heroBanner: {
    height: 280,
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#1a1a1a',
  },
  bannerContent: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
  },
  bannerBadge: {
    fontSize: 12,
    color: '#FF9933',
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 8,
  },
  bannerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  carouselDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#333',
  },
  activeDot: {
    backgroundColor: '#FF0000',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  section: {
    marginBottom: 25,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  viewAll: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.7,
  },
  horizontalScroll: {
    paddingLeft: 15,
  },
  contentCard: {
    width: 140,
    marginRight: 12,
    position: 'relative',
  },
  freeBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#FF0066',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    zIndex: 10,
  },
  freeBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  premiumBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    zIndex: 10,
  },
  premiumIcon: {
    fontSize: 16,
  },
  cardImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  cardPlaceholder: {
    fontSize: 50,
  },
  logoWatermark: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  watermarkText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#1a1a1a',
    marginBottom: 20,
  },
  categoryTab: {
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  activeCategoryTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#FF9933',
  },
  categoryTabText: {
    color: '#999',
    fontSize: 14,
    fontWeight: '500',
  },
  activeCategoryTabText: {
    color: '#fff',
  },
  gridSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    gap: 12,
  },
  gridCard: {
    width: '48%',
    marginBottom: 12,
    position: 'relative',
  },
  gridImage: {
    width: '100%',
    height: 240,
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#0a0a0a',
    paddingTop: 8,
    paddingBottom: 25,
    borderTopWidth: 1,
    borderTopColor: '#1a1a1a',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 4,
  },
  navIcon: {
    fontSize: 22,
    marginBottom: 4,
    opacity: 0.5,
  },
  activeNavIcon: {
    opacity: 1,
  },
  navLabel: {
    color: '#999',
    fontSize: 11,
  },
  activeNavLabel: {
    color: '#fff',
  },
  microDramaButton: {
    flex: 1,
    alignItems: 'center',
    marginTop: -25,
  },
  microDramaCircle: {
    width: 56,
    height: 56,
    backgroundColor: '#FF9933',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
    borderWidth: 4,
    borderColor: '#000',
  },
  microDramaIcon: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  microDramaLabel: {
    color: '#fff',
    fontSize: 10,
  },
});