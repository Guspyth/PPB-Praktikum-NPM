import { Text, View, StyleSheet } from 'react-native';

export default function Praktikum1() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Selamat Datang di Praktikum Pemrograman Perangkat Bergerak
      </Text>

      <Text style={styles.text}>Nama: Agus Nurfajri</Text>
      <Text style={styles.text}>NIM: 242310032</Text>
      <Text style={styles.text}>Prodi: Teknologi Informasi</Text>
      <Text style={styles.text}>Angkatan: 2024</Text>
      <Text style={styles.text}>Kelas: TI-24-PA</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
  },
});