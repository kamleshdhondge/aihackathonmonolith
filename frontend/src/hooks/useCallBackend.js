import axios from 'axios';

export const useCallBackend = async () => {
    try {
        const response = await axios.get('https://akhmedelnemer-fluffy-zebra-4xvj54x44qqcpwp-3000.preview.app.github.dev/upload');
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
}