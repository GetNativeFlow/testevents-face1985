import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Page3() {
  const router = useRouter();
  const routeParams = useLocalSearchParams();

  return (
    <View style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.node_4e1c97c9_4850_4340_927a_3f44b9b2d3e1} activeOpacity={0.7} onPress={() => { try { router.push('/page2'); } catch(e) { console.error('[Action Error]', e); } }}>
              <Text style={styles.node_6ff952b0_8e6d_43f4_9946_35e77638806b}>ON TAP</Text>
              <TouchableOpacity style={[styles.node_bccb39dc_c8ad_42af_b478_3201cef002f2, { backgroundColor: '#0077E6', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}> Navigation to</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_633745b7_6f8a_4ac0_89a3_b21343a33a62, { backgroundColor: '#FF5963', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7} onPress={() => { try { router.back(); } catch(e) { console.error('[Action Error]', e); } }}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Go Back</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_582d941b_5af2_4e40_bcaa_3b8945c37366, { backgroundColor: '#39D2C0', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Open URL</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_c24c0809_e9ba_4a44_bf04_b4bea54e37c4, { backgroundColor: '#000000', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>API Call</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_02cbb791_06bd_42df_88fb_66802db31f91, { backgroundColor: '#F9CF58', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Set Variable</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_749d210b_8990_49bc_bfb8_99f50918ea16, { backgroundColor: 'rgba(57, 6, 6, 0.00)', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#000000', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Show Alert</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_f21e7003_1e1c_4048_8381_a47c21ac4a2e, { backgroundColor: '#4B39EF', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Show Toast</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_ae7d1306_9eef_412f_b2f0_3181fb59b6f8, { backgroundColor: '#39D2C0', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Haptic Feedback</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_9cc08182_33d5_434d_9a2e_4f19e0723c57, { backgroundColor: '#FF5963', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Copy to Clipboard</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_af85ffec_562a_4565_a9ba_f076056cea36, { backgroundColor: '#000000', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Toggle Overlay</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_883adee5_bb23_4f98_b2bb_f095ea1ed3ea, { backgroundColor: '#000000', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Share</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_9b7b0262_398f_4a1c_a040_4d50fd416843, { backgroundColor: '#F9CF58', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Open Email</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_d9a504de_1a39_453d_9a62_a5ad08fcc2d5, { backgroundColor: '#4B39EF', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Run TypeScript</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_4f18ac02_0ec0_4225_a31e_0e97554c4b1f, { backgroundColor: '#EE8B60', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Delay</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_53d325f5_7954_4a41_b9ad_ec96dde344f2, { backgroundColor: '#D1D5DB', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#000000', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Console Log</Text>
              </TouchableOpacity>
      </TouchableOpacity>
      <Text style={styles.node_5a398c00_26df_4219_8ca8_294226ee9859}>Page 3</Text>
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
  node_4e1c97c9_4850_4340_927a_3f44b9b2d3e1: {
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  node_6ff952b0_8e6d_43f4_9946_35e77638806b: {
    marginLeft: 150,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
  },
  node_633745b7_6f8a_4ac0_89a3_b21343a33a62: {
    backgroundColor: '#FF5963',
  },
  node_582d941b_5af2_4e40_bcaa_3b8945c37366: {
    backgroundColor: '#39D2C0',
  },
  node_c24c0809_e9ba_4a44_bf04_b4bea54e37c4: {
    backgroundColor: '#000000',
  },
  node_02cbb791_06bd_42df_88fb_66802db31f91: {
    backgroundColor: '#F9CF58',
  },
  node_749d210b_8990_49bc_bfb8_99f50918ea16: {
    color: '#000000',
    backgroundColor: 'rgba(57, 6, 6, 0.00)',
  },
  node_f21e7003_1e1c_4048_8381_a47c21ac4a2e: {
    backgroundColor: '#4B39EF',
  },
  node_ae7d1306_9eef_412f_b2f0_3181fb59b6f8: {
    backgroundColor: '#39D2C0',
  },
  node_9cc08182_33d5_434d_9a2e_4f19e0723c57: {
    backgroundColor: '#FF5963',
  },
  node_af85ffec_562a_4565_a9ba_f076056cea36: {
    backgroundColor: '#000000',
  },
  node_883adee5_bb23_4f98_b2bb_f095ea1ed3ea: {
    backgroundColor: '#000000',
  },
  node_9b7b0262_398f_4a1c_a040_4d50fd416843: {
    backgroundColor: '#F9CF58',
  },
  node_d9a504de_1a39_453d_9a62_a5ad08fcc2d5: {
    backgroundColor: '#4B39EF',
  },
  node_4f18ac02_0ec0_4225_a31e_0e97554c4b1f: {
    backgroundColor: '#EE8B60',
  },
  node_53d325f5_7954_4a41_b9ad_ec96dde344f2: {
    color: '#000000',
    backgroundColor: '#D1D5DB',
  },
  node_5a398c00_26df_4219_8ca8_294226ee9859: {
    fontSize: 16,
  },
});

