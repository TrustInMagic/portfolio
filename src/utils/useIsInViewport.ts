import React from 'react';

const useIsInViewport = (refArray: React.RefObject<Element>[]) => {
  const [inViewport, setInViewport] = React.useState('');

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entryArr) => {
        entryArr.forEach((entry) => {
          if (entry.isIntersecting) {
            setInViewport(entry.target.id);
          }
        });
      },
      { rootMargin: '-50%' }
    );

    refArray.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [refArray]);

  return inViewport;
};

export default useIsInViewport;
