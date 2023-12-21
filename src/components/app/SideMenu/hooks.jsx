import { useEffect } from 'react';

export const useSideMenu = () => {
  useEffect(() => {
    const btn = document.querySelector('.mobile-menu-button');
    const sidebar = document.querySelector('.sidebar');

    btn.addEventListener('click', () => {
      sidebar.classList.remove('translate-x-56');
    });

    document.addEventListener('click', (event) => {
      if (!btn.contains(event.target)) {
        sidebar.classList.add('translate-x-56');
        return;
      }
    });
  }, []);

  return null;
};
