import React from 'react';

const useIsInViewport = (refArray: React.RefObject<Element>[]) => {
  const [inViewport, setInViewport] = React.useState('');

  const observer = React.useMemo(
    () =>
      new IntersectionObserver(
        (entryArr) => {
          entryArr.forEach((entry) => {
            if (entry.isIntersecting) {
              setInViewport(entry.target.id);
            }
          });
        },
        { threshold: 0.5 }
      ),
    []
  );

  React.useEffect(() => {
    refArray.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [refArray, observer]);

  return inViewport;
};

export default useIsInViewport;
