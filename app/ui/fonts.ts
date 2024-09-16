import { Inter, Lusitana } from 'next/font/google'; // To use Variable Fonts(Optimized Fonts by Google) use this and

export const inter = Inter({ subsets: ['latin'] }); // give Subsets.

export const lusitana = Lusitana({  //use this code when you will not use the variable font(Optimized Fonts by Google)
    weight: ['400', '700'],
    subsets: ['latin'],
});