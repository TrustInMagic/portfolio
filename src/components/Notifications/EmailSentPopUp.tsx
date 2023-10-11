import React from 'react';
// next
import Image from 'next/image';
// framer motion
import { motion } from 'framer-motion';
// ------------------------------------------------ //

const EmailSentPopUp = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className='fixed top-3 left-3 notification-box-shadow p-3 rounded-xl 
                    bg-[var(--background-light)] text-[var(--text-dark)] flex gap-3'
    >
      <Image src='/assets/email-sent.svg' alt='' height={25} width={25} />
      <div>Email Sent!</div>
    </motion.div>
  );
};

export default EmailSentPopUp;
