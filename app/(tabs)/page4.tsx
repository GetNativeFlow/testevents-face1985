import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Page4() {
  const router = useRouter();
  const routeParams = useLocalSearchParams();

  return (
    <View style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.node_9dd957a9_e0d5_4812_93fe_42b250feda20} activeOpacity={0.7} onPress={() => { try { router.push('/page2'); } catch(e) { console.error('[Action Error]', e); } }}>
              <Text style={styles.node_e2fcda5a_e1a9_4015_91c7_802150d0400d}>ON TAP</Text>
              <TouchableOpacity style={[styles.node_b28af23e_28c9_4c0e_b85a_752561827b14, { backgroundColor: '#0077E6', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}> Navigation to</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_8bb3e8c0_0712_49c5_aab3_30bd270dc4de, { backgroundColor: '#FF5963', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7} onPress={() => { try { router.back(); } catch(e) { console.error('[Action Error]', e); } }}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Go Back</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_6488d6a9_68e8_407a_9485_c4350ed4a9f1, { backgroundColor: '#39D2C0', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Open URL</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_1094e1ce_c76d_4a94_9361_9492813612c8, { backgroundColor: '#000000', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>API Call</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_d1efbe95_936c_495a_96bd_59d034c98498, { backgroundColor: '#F9CF58', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Set Variable</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_d3e525a7_7527_4997_9083_70009988e781, { backgroundColor: 'rgba(57, 6, 6, 0.00)', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#000000', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Show Alert</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_cacee35e_6ffa_483b_8c77_9a66642adb14, { backgroundColor: '#4B39EF', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Show Toast</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_6f2f334c_3a29_4d0d_96a7_daaf11789f5a, { backgroundColor: '#39D2C0', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Haptic Feedback</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_7a647851_ed07_4506_b987_4f158f20ef74, { backgroundColor: '#FF5963', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Copy to Clipboard</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_1b4c40eb_dba1_4691_8ff9_4c1bbf119997, { backgroundColor: '#000000', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Toggle Overlay</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_a1c7772c_74d9_40c0_85ed_a05409684900, { backgroundColor: '#000000', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Share</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_aa700ef5_48ea_462d_a0d3_b64cc0e887e8, { backgroundColor: '#F9CF58', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Open Email</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_cc3da366_3a4a_456e_824a_2279fa2f828c, { backgroundColor: '#4B39EF', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Run TypeScript</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_d16d584a_f995_4cdc_a488_783d83754241, { backgroundColor: '#EE8B60', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Delay</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_5c0758ff_c69e_4afd_a1d8_914894f82b9a, { backgroundColor: '#D1D5DB', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#000000', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Console Log</Text>
              </TouchableOpacity>
      </TouchableOpacity>
      <Text style={styles.node_59c7fef2_6dca_46b8_90ef_3931e212de8a}>Page 4</Text>
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
  node_9dd957a9_e0d5_4812_93fe_42b250feda20: {
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  node_e2fcda5a_e1a9_4015_91c7_802150d0400d: {
    marginLeft: 150,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
  },
  node_8bb3e8c0_0712_49c5_aab3_30bd270dc4de: {
    backgroundColor: '#FF5963',
  },
  node_6488d6a9_68e8_407a_9485_c4350ed4a9f1: {
    backgroundColor: '#39D2C0',
  },
  node_1094e1ce_c76d_4a94_9361_9492813612c8: {
    backgroundColor: '#000000',
  },
  node_d1efbe95_936c_495a_96bd_59d034c98498: {
    backgroundColor: '#F9CF58',
  },
  node_d3e525a7_7527_4997_9083_70009988e781: {
    color: '#000000',
    backgroundColor: 'rgba(57, 6, 6, 0.00)',
  },
  node_cacee35e_6ffa_483b_8c77_9a66642adb14: {
    backgroundColor: '#4B39EF',
  },
  node_6f2f334c_3a29_4d0d_96a7_daaf11789f5a: {
    backgroundColor: '#39D2C0',
  },
  node_7a647851_ed07_4506_b987_4f158f20ef74: {
    backgroundColor: '#FF5963',
  },
  node_1b4c40eb_dba1_4691_8ff9_4c1bbf119997: {
    backgroundColor: '#000000',
  },
  node_a1c7772c_74d9_40c0_85ed_a05409684900: {
    backgroundColor: '#000000',
  },
  node_aa700ef5_48ea_462d_a0d3_b64cc0e887e8: {
    backgroundColor: '#F9CF58',
  },
  node_cc3da366_3a4a_456e_824a_2279fa2f828c: {
    backgroundColor: '#4B39EF',
  },
  node_d16d584a_f995_4cdc_a488_783d83754241: {
    backgroundColor: '#EE8B60',
  },
  node_5c0758ff_c69e_4afd_a1d8_914894f82b9a: {
    color: '#000000',
    backgroundColor: '#D1D5DB',
  },
  node_59c7fef2_6dca_46b8_90ef_3931e212de8a: {
    fontSize: 16,
  },
});

