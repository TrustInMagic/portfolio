import React from 'react';
// next
import Image from 'next/image';
// framer motion
import { motion } from 'framer-motion';
// ------------------------------------------------ //

const EmailCopyPopUp = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className='fixed top-3 left-3 notification-box-shadow p-3 rounded-xl items-center
                    bg-[var(--background-light)] text-[var(--text-dark)] flex gap-3 
                    max-1000:bottom-3 max-1000:right-3 max-1000:top-auto max-1000:left-auto
                    max-650:text-sm max-410:text-xs'
    >
      <Image
        src='/assets/email.svg'
        alt=''
        height={25}
        width={25}
        className='max-650:h-[20px] max-410:h-[15px]'
      />
      <div>Email Copied!</div>
    </motion.div>
  );
};

export default EmailCopyPopUp;
