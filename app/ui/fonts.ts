import { Inter, Lusitana } from 'next/font/google'; // Pastikan nama font diawali huruf besar

export const inter = Inter({ 
    subsets: ['latin'], 
    weight: ['400', '700'], // Sesuaikan bobot sesuai kebutuhan 
});

export const lusitana = Lusitana({ 
    subsets: ['latin'], 
    weight: ['400'], // Tambahkan varian berat lainnya jika diperlukan
});