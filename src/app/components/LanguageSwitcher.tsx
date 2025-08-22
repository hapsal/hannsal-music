import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
        {language === 'en' ? '🇬🇧 EN' : '🇫🇮 FI'}
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36">
        <li className='font-inter'>
          <button 
            onClick={() => setLanguage('en')} 
            className={language === 'en' ? 'active font-bold font-inter' : 'font-inter'}
          >
            🇬🇧 English
          </button>
        </li>
        <li className='font-inter'>
          <button 
            onClick={() => setLanguage('fi')} 
            className={language === 'fi' ? 'active font-bold font-inter' : 'font-inter'}
          >
            🇫🇮 Suomi
          </button>
        </li>
      </ul>
    </div>
  );
}