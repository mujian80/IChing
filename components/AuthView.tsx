
import React, { useState } from 'react';
import { User, Language } from '../types';
import { UI_STRINGS } from '../i18n';

interface AuthViewProps {
  onLogin: (user: User) => void;
  onClose: () => void;
  currentLang?: Language;
}

const AuthView: React.FC<AuthViewProps> = ({ onLogin, onClose, currentLang = 'zh' }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [prefLang, setPrefLang] = useState<Language>(currentLang);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');

  const t = UI_STRINGS[prefLang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.username || !formData.password || (!isLogin && !formData.email)) {
      setError(prefLang === 'en' ? 'Please fill all fields' : '请完整填写信息');
      return;
    }
    const mockUser: User = {
      username: formData.username,
      email: formData.email || `${formData.username}@iching.com`,
      avatar: '☯',
      preferredLanguage: prefLang
    };
    onLogin(mockUser);
  };

  return (
    <div className="max-w-md mx-auto my-12 animate-in fade-in zoom-in-95 duration-500">
      <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-stone-200 overflow-hidden relative">
        <div className="h-32 bg-stone-900 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 flex items-center justify-center pointer-events-none">
             <span className="text-[120px] leading-none text-white chinese-font select-none">{prefLang === 'en' ? 'I' : '易'}</span>
          </div>
          <div className="z-10 bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-2 border-amber-200">
            <span className="text-3xl">☯</span>
          </div>
        </div>

        <div className="p-8 md:p-10 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold chinese-font text-stone-800">
              {isLogin ? t.authLogin : t.authRegister}
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-1.5 ml-1">{t.username}</label>
              <input type="text" value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})} className="w-full px-5 py-3 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-amber-500 outline-none transition-all font-serif" />
            </div>
            {!isLogin && (
              <div>
                <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-1.5 ml-1">{t.email}</label>
                <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-5 py-3 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-amber-500 outline-none transition-all font-serif" />
              </div>
            )}
            <div>
              <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-1.5 ml-1">{t.password}</label>
              <input type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full px-5 py-3 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-amber-500 outline-none transition-all font-serif" />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-1.5 ml-1">{t.langPref}</label>
              <div className="flex gap-4">
                <button type="button" onClick={() => setPrefLang('zh')} className={`flex-1 py-2 rounded-xl border transition-all ${prefLang === 'zh' ? 'bg-stone-900 text-amber-400 border-stone-900' : 'bg-white text-stone-400 border-stone-200'}`}>中文</button>
                <button type="button" onClick={() => setPrefLang('en')} className={`flex-1 py-2 rounded-xl border transition-all ${prefLang === 'en' ? 'bg-stone-900 text-amber-400 border-stone-900' : 'bg-white text-stone-400 border-stone-200'}`}>English</button>
              </div>
            </div>

            <button type="submit" className="w-full py-4 bg-stone-900 text-amber-400 rounded-2xl font-bold text-lg shadow-xl hover:bg-stone-800 active:scale-[0.98] transition-all">
              {isLogin ? t.login : t.authRegister}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col gap-4 text-center">
            <button onClick={() => setIsLogin(!isLogin)} className="text-stone-500 text-sm hover:text-amber-600">
              {isLogin ? (prefLang === 'en' ? "Need an account? Register" : "尚无账号？点击注册新缘分") : (prefLang === 'en' ? "Have an account? Login" : "已有道缘？立即登录")}
            </button>
            <button onClick={onClose} className="text-stone-400 text-xs hover:underline">{t.guestMode}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthView;
