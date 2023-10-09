import React from 'react';
import styles from './Contact.module.css';
// components
import SectionHeader from '../components/SectionHeader';
import CustomButton from '@/components/CustomButton/CustomButton';
import SocialButton from './components/SocialButton';
import EmailPopUp from '@/components/Notifications/EmailPopUp';
// framer motion
import { motion } from 'framer-motion';
// next
import { useRouter } from 'next/navigation';
// ------------------------------------------------ //

const Contact = () => {
  const [showPopUp, setShowPopUp] = React.useState(false);
  const router = useRouter();

  const commonStyle =
    'flex-1 bg-[var(--background-dark)] px-3 py-2 rounded-md border-2 text-[var(--text-light)] border-[var(--borders)] focus:border-[var(--fillings)] outline-none';

  const handleEmailCopy = () => {
    navigator.clipboard.writeText('timionescu@gmail.com');

    setShowPopUp(true);
    setTimeout(() => {
      setShowPopUp(false);
    }, 2000);
  };

  return (
    <div className='flex flex-col py-36 items-center'>
      <SectionHeader
        title='Contact'
        description='Reach out to me any way you want'
      />
      <div className='-mt-10 text-[var(--text-light)] text-center'>
        Fill in the form on the left with your information and I will get back
        to you as soon as possible. <br />
        Alternatively, you can find me on the platforms listed on the right.
      </div>
      <div className='grid grid-cols-[1fr_0.4fr] gap-5 mt-8 w-full'>
        <motion.form
          initial={{ x: -50, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              type: 'spring',
              duration: 2,
              bounce: 0.3,
            },
          }}
          viewport={{ once: true }}
          className={`${styles['custom-form-shadow']} p-5 rounded-2xl bg-[var(--background-light)]`}
        >
          <div className='flex gap-2'>
            <label htmlFor='name' style={{ display: 'none' }}></label>
            <input
              placeholder='Your name'
              id='name'
              type='text'
              className={commonStyle}
              required
            />
            <label htmlFor='email' style={{ display: 'none' }}></label>
            <input
              placeholder='Your email address'
              id='email'
              type='email'
              className={commonStyle}
              required
            />
          </div>
          <textarea
            className={`w-full mt-3 h-[250px] resize-none ${commonStyle} mb-2`}
            placeholder='Your message for me'
            required
          />
          <CustomButton content='Submit' size='large' />
        </motion.form>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              type: 'spring',
              duration: 2,
              bounce: 0.3,
            },
          }}
          viewport={{ once: true }}
          className={`${styles['custom-form-shadow']} p-5 rounded-xl bg-[var(--background-light)] w-full
                    flex flex-col gap-3`}
        >
          <SocialButton
            text='Linkedin'
            iconSrc='/assets/linkedin-gray.svg'
            onClick={() =>
              router.push('https://www.linkedin.com/in/tim-ionescu/')
            }
          />
          <SocialButton
            text='GitHub'
            iconSrc='/assets/github-gray.svg'
            onClick={() => router.push('https://github.com/TrustInMagic')}
          />
          <SocialButton
            text='WhatsApp'
            iconSrc='/assets/whatsapp-gray.svg'
            onClick={() =>
              router.push('https://wa.me/+40720039193?text=Hello%20Tim!')
            }
          />
          <div className='mt-auto'>
            <CustomButton
              content='Copy my email'
              size='large'
              onClick={handleEmailCopy}
            />
          </div>
        </motion.div>
      </div>
      {showPopUp && <EmailPopUp />}
    </div>
  );
};

export default Contact;
