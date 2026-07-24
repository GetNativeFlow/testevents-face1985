import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Page2() {
  const router = useRouter();
  const routeParams = useLocalSearchParams();

  return (
    <View style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.node_b5da7965_dd23_4d78_8569_16e00e11de5f} activeOpacity={0.7} onPress={() => { try { router.push('/page2'); } catch(e) { console.error('[Action Error]', e); } }}>
              <Text style={styles.node_05de67fa_207d_4619_b81a_947875230894}>ON TAP</Text>
              <TouchableOpacity style={[styles.node_1ea06a22_ae26_47df_873a_5fc98a70eee4, { backgroundColor: '#0077E6', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}> Navigation to</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_9e73d809_bbc8_4de3_a5ba_b778769a7c31, { backgroundColor: '#FF5963', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7} onPress={() => { try { router.back(); } catch(e) { console.error('[Action Error]', e); } }}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Go Back</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_1f564dc7_5fb5_402b_9dfc_28ad172222b5, { backgroundColor: '#39D2C0', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Open URL</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_ad409a23_5d5e_48cf_bf9a_0476c9ccfba0, { backgroundColor: '#000000', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>API Call</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_4678625c_11e9_4ea5_a8ff_90c1a9eea62b, { backgroundColor: '#F9CF58', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Set Variable</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_5a268ac1_26a7_47d1_be2d_8b855219e521, { backgroundColor: 'rgba(57, 6, 6, 0.00)', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#000000', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Show Alert</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_7f7e03d2_5d74_4791_8097_892824f10e79, { backgroundColor: '#4B39EF', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Show Toast</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_04509152_2870_4db8_a0d3_95e3d019d86e, { backgroundColor: '#39D2C0', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Haptic Feedback</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_021b387d_1a62_4d00_87b4_f255b775db80, { backgroundColor: '#FF5963', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Copy to Clipboard</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_f7b5bda1_1cba_4248_a1ae_a825565bf89e, { backgroundColor: '#000000', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Toggle Overlay</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_31985e12_32f9_4690_b727_7ad2b3c9582c, { backgroundColor: '#000000', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Share</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_f7f172b4_b61f_454e_b81b_905bbd999252, { backgroundColor: '#F9CF58', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Open Email</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_844d06d9_161f_443b_878e_341ede5dda77, { backgroundColor: '#4B39EF', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Run TypeScript</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_300cc641_d898_4fa4_9df9_0565d5b0771b, { backgroundColor: '#EE8B60', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Delay</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_cf8b8988_31d9_48e5_bb1d_78efcc1f04ca, { backgroundColor: '#D1D5DB', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#000000', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Console Log</Text>
              </TouchableOpacity>
      </TouchableOpacity>
      <Text style={styles.node_5790569a_855e_45dc_b620_0fc4b26bfac2}>Page 2</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenRoot: {
    flex: 1,
    height: '100%',
    width: '100%',
    minWidth: 0,
    alignSelf: 'stretch',
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    height: '100%',
    width: '100%',
    minWidth: 0,
    alignSelf: 'stretch',
  },
  containerContent: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    width: '100%',
    alignSelf: 'stretch',
  },
  node_b5da7965_dd23_4d78_8569_16e00e11de5f: {
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  node_05de67fa_207d_4619_b81a_947875230894: {
    marginLeft: 150,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
  },
  node_9e73d809_bbc8_4de3_a5ba_b778769a7c31: {
    backgroundColor: '#FF5963',
  },
  node_1f564dc7_5fb5_402b_9dfc_28ad172222b5: {
    backgroundColor: '#39D2C0',
  },
  node_ad409a23_5d5e_48cf_bf9a_0476c9ccfba0: {
    backgroundColor: '#000000',
  },
  node_4678625c_11e9_4ea5_a8ff_90c1a9eea62b: {
    backgroundColor: '#F9CF58',
  },
  node_5a268ac1_26a7_47d1_be2d_8b855219e521: {
    color: '#000000',
    backgroundColor: 'rgba(57, 6, 6, 0.00)',
  },
  node_7f7e03d2_5d74_4791_8097_892824f10e79: {
    backgroundColor: '#4B39EF',
  },
  node_04509152_2870_4db8_a0d3_95e3d019d86e: {
    backgroundColor: '#39D2C0',
  },
  node_021b387d_1a62_4d00_87b4_f255b775db80: {
    backgroundColor: '#FF5963',
  },
  node_f7b5bda1_1cba_4248_a1ae_a825565bf89e: {
    backgroundColor: '#000000',
  },
  node_31985e12_32f9_4690_b727_7ad2b3c9582c: {
    backgroundColor: '#000000',
  },
  node_f7f172b4_b61f_454e_b81b_905bbd999252: {
    backgroundColor: '#F9CF58',
  },
  node_844d06d9_161f_443b_878e_341ede5dda77: {
    backgroundColor: '#4B39EF',
  },
  node_300cc641_d898_4fa4_9df9_0565d5b0771b: {
    backgroundColor: '#EE8B60',
  },
  node_cf8b8988_31d9_48e5_bb1d_78efcc1f04ca: {
    color: '#000000',
    backgroundColor: '#D1D5DB',
  },
  node_5790569a_855e_45dc_b620_0fc4b26bfac2: {
    fontSize: 16,
  },
});

