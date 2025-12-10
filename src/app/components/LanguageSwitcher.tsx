import { useLanguage } from '../contexts/LanguageContext';
import Image from 'next/image';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
      <Image src={language === 'fi' ? '/img/fi.svg' : '/img/gb.svg'} 
                    alt={language === 'fi' ? 'Finnish' : 'English'}
                    width={10}
                    height={10}
                    className="object-cover"
              />
         {language === 'fi' ? 'FI' : 'EN'}
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36">
        <li className='font-inter'>
          <button 
            onClick={() => setLanguage('fi')} 
            className={language === 'fi' ? 'active font-bold font-inter' : 'font-inter'}
          >
             <Image src={`/img/fi.svg`} 
                    alt="Finnish"
                    width={20}
                    height={20}
                    className="object-cover"
              />
            <label>Suomi</label>
          </button>
        </li>
        <li className='font-inter'>
          <button 
            onClick={() => setLanguage('en')} 
            className={language === 'en' ? 'active font-bold font-inter' : 'font-inter'}
          >
               <Image  src={`/img/gb.svg`} 
                        alt="English"
                        width={20}
                        height={20}
                        className="object-cover"
                 />
           <label>English</label>
          </button>
        </li>
      </ul>
    </div>
  );
}