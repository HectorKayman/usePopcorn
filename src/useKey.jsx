import { useEffect } from 'react';

export function useKey(pressedKey, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === pressedKey.toLowerCase()) {
          action();
        }
      }

      document.addEventListener('keydown', callback);

      return function () {
        document.removeEventListener('keydown', callback);
      };
    },
    [pressedKey, action]
  );
}
