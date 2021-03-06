/**
 * @returns Promise<Response>
 */
export default () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 10000
      });
      return;
    }

    reject('Geolocation not supported or accepted');
  });
};
