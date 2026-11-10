// Configuración pública de Firebase para "Mi Dieta" (no es una contraseña).
// La seguridad la dan las reglas de Firestore: solo se puede leer/escribir
// en la colección cuyo nombre es el código secreto de abajo ("fam").
window.APP_CONFIG = {
  firebase: {
    apiKey: "AIzaSyBve9uaeS0Gg00KLwLSwPgnVm7pPMGtYS4",
    authDomain: "mi-dieta-1d4b4.firebaseapp.com",
    projectId: "mi-dieta-1d4b4",
    storageBucket: "mi-dieta-1d4b4.firebasestorage.app",
    messagingSenderId: "313941172640",
    appId: "1:313941172640:web:953c518995cac3bf9444c5"
  },
  fam: "dieta_2cldwmaa7b4uebt8"
};
