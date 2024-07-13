import axios from 'axios';

export const sendResetPasswordEmail = async (email: string): Promise<void> => {
  try {
    const response = await axios.post('/api/password/reset', { email });
    console.log('Correo de restablecimiento enviado:', response.data);
  } catch (error) {
    console.error('Error al enviar el correo de restablecimiento:', error);
    throw new Error('No se pudo enviar el correo de restablecimiento.');
  }
};
