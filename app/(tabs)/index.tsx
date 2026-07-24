import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, ActivityIndicator, Linking, Share, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Clipboard from 'expo-clipboard';
import * as Haptics from 'expo-haptics';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Page1() {
  const router = useRouter();
  const routeParams = useLocalSearchParams();

  return (
    <View style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
      <StatusBar style="auto" />
      <Text style={styles.node_a81ac4f5_52c4_446d_be7f_ce4adcb04ba0}>Hello World</Text>
      <TouchableOpacity style={[styles.node_5ff0f7cb_812a_4471_8290_c48767b8c167, { backgroundColor: '#0077E6', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
        <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Button</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.node_47c4923a_ec3e_4779_9306_de0fa60c534a} activeOpacity={0.7} onPress={() => { try { router.push('/page2'); } catch(e) { console.error('[Action Error]', e); } }}>
              <Text style={styles.node_d844791a_a2c3_4627_ae25_d3aa537efc45}>ON TAP</Text>
              <TouchableOpacity style={[styles.node_2f8d763b_a91a_477a_8304_361d5af78940, { backgroundColor: '#0077E6', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7} onPress={() => { try { router.push('/page2'); } catch(e) { console.error('[Action Error]', e); } }}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}> Navigation to</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_a65644b9_f92f_4443_8739_b9eb2b2ac732, { backgroundColor: '#FF5963', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7} onPress={() => { try { router.back(); } catch(e) { console.error('[Action Error]', e); } }}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Go Back</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_5528f80e_1c2d_4d8f_ab0b_898481864705, { backgroundColor: '#39D2C0', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7} onPress={async () => {
                  try {
                    await Linking.openURL('https://mail.google.com/');
                  } catch(e) {
                    console.error('[Action Error]', e);
                  }
                }}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Open URL</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_b5815606_7061_4970_afdd_9b70de4ff8c0, { backgroundColor: '#000000', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>API Call</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_a6d3b8ed_1912_4310_9e93_63c0a86f4074, { backgroundColor: '#F9CF58', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Set Variable</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_096383a3_09df_497c_9b6f_84b12ffea3c2, { backgroundColor: 'rgba(57, 6, 6, 0.00)', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7} onPress={() => { try { Alert.alert('INDIAN ARMED FORCES', 'JAI HIND'); } catch(e) { console.error('[Action Error]', e); } }}>
                <Text style={{ flex: 1, color: '#000000', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Show Alert</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_2d7ee9d0_ba6b_46c9_a960_90047d9a78ef, { backgroundColor: '#4B39EF', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7} onPress={() => { try { Alert.alert('', 'JAI HIND'); } catch(e) { console.error('[Action Error]', e); } }}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Show Toast</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_cb668576_461a_420d_8c93_080896ce479a, { backgroundColor: '#39D2C0', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7} onPress={() => { try { Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success) } catch(e) { console.error('[Action Error]', e); } }}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Haptic Feedback</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_e238214d_4a3d_4536_8731_6007a8050da8, { backgroundColor: '#FF5963', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7} onPress={async () => {
                  try {
                    await Clipboard.setStringAsync('INDIAN ARMED FORCES');
                  } catch(e) {
                    console.error('[Action Error]', e);
                  }
                }}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Copy to Clipboard</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_7486589a_ac88_4adf_93c0_b9bc9ca4da37, { backgroundColor: '#000000', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Toggle Overlay</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_f18ac986_c007_4a60_bdd4_ea3f7eff18c8, { backgroundColor: '#39D2C0', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7} onPress={async () => {
                  try {
                    await Share.share({ title: 'INDIAN ARMED FORCES', message: 'JAI HIND', url: 'google.com' });
                  } catch(e) {
                    console.error('[Action Error]', e);
                  }
                }}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Share</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_1de0a7cc_c921_409c_9cb7_e062bb7bfed5, { backgroundColor: '#F9CF58', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7} onPress={async () => {
                  try {
                    await Linking.openURL('mailto:kumar@getnativeflow.com?subject=INDIAN%20ARMED%20FORCES&body=JAI%20HIND');
                  } catch(e) {
                    console.error('[Action Error]', e);
                  }
                }}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Open Email</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_0dfe4b0e_ee0a_41e6_9032_87fbe66b5deb, { backgroundColor: '#4B39EF', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Run TypeScript</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_d6e12f7e_ec97_4cfb_b7b6_09a96b19702b, { backgroundColor: '#EE8B60', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7} onPress={async () => {
                  try {
                    await new Promise(r => setTimeout(r, 3000));
                  } catch(e) {
                    console.error('[Action Error]', e);
                  }
                }}>
                <Text style={{ flex: 1, color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Delay</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.node_ba9ae5c4_bd60_4497_a7d0_8a6d50c6825c, { backgroundColor: '#D1D5DB', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7} onPress={() => { try { console.log('INDIA'); } catch(e) { console.error('[Action Error]', e); } }}>
                <Text style={{ flex: 1, color: '#000000', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Console Log</Text>
              </TouchableOpacity>
      </TouchableOpacity>
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
  node_a81ac4f5_52c4_446d_be7f_ce4adcb04ba0: {
    fontSize: 16,
  },
  node_47c4923a_ec3e_4779_9306_de0fa60c534a: {
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  node_d844791a_a2c3_4627_ae25_d3aa537efc45: {
    marginLeft: 150,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
  },
  node_a65644b9_f92f_4443_8739_b9eb2b2ac732: {
    backgroundColor: '#FF5963',
  },
  node_5528f80e_1c2d_4d8f_ab0b_898481864705: {
    backgroundColor: '#39D2C0',
  },
  node_b5815606_7061_4970_afdd_9b70de4ff8c0: {
    backgroundColor: '#000000',
  },
  node_a6d3b8ed_1912_4310_9e93_63c0a86f4074: {
    backgroundColor: '#F9CF58',
  },
  node_096383a3_09df_497c_9b6f_84b12ffea3c2: {
    color: '#000000',
    backgroundColor: 'rgba(57, 6, 6, 0.00)',
  },
  node_2d7ee9d0_ba6b_46c9_a960_90047d9a78ef: {
    backgroundColor: '#4B39EF',
  },
  node_cb668576_461a_420d_8c93_080896ce479a: {
    backgroundColor: '#39D2C0',
  },
  node_e238214d_4a3d_4536_8731_6007a8050da8: {
    backgroundColor: '#FF5963',
  },
  node_7486589a_ac88_4adf_93c0_b9bc9ca4da37: {
    backgroundColor: '#000000',
  },
  node_f18ac986_c007_4a60_bdd4_ea3f7eff18c8: {
    backgroundColor: '#39D2C0',
  },
  node_1de0a7cc_c921_409c_9cb7_e062bb7bfed5: {
    backgroundColor: '#F9CF58',
  },
  node_0dfe4b0e_ee0a_41e6_9032_87fbe66b5deb: {
    backgroundColor: '#4B39EF',
  },
  node_d6e12f7e_ec97_4cfb_b7b6_09a96b19702b: {
    backgroundColor: '#EE8B60',
  },
  node_ba9ae5c4_bd60_4497_a7d0_8a6d50c6825c: {
    color: '#000000',
    backgroundColor: '#D1D5DB',
  },
});

