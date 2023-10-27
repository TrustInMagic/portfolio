import React from 'react';
// ------------------------------------------------ //

const CleanCode = () => {
  const commonStyle = 'text-[#b91c1c]';
  const commonIndent = 'ml-4';

  return (
    <div className='text-[var(--text-dark)] text-xl flex flex-col gap-2 tracking-widest
    max-1250:tracking-normal max-1250:text-lg whitespace-nowrap max-1000:tracking-widest max-1000:text-2xl
    max-650:tracking-normal max-650:text-xl max-500:text-lg max-410:text-sm max-350:tracking-tighter'>
      <div className={commonStyle}>{'<ul>'}</div>
      <div className={commonIndent}>
        <span className={commonStyle}>{'<li>'}</span>
        Separation of Concerns
        <span className={commonStyle}>{'</li>'}</span>
      </div>
      <div className={commonIndent}>
        <span className={commonStyle}>{'<li>'}</span>
        Testable Code
        <span className={commonStyle}>{'</li>'}</span>
      </div>
      <div className={commonIndent}>
        <span className={commonStyle}>{'<li>'}</span>
        Optimized for Performance
        <span className={commonStyle}>{'</li>'}</span>
      </div>
      <div className={commonStyle}>{'</ul>'}</div>
    </div>
  );
};

export default CleanCode;
