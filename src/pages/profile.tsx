import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserProfile, updateUserProfile, clearAllData, getOverallStats } from '@/lib/store';
import { User, ShieldAlert, Save, Trash2 } from 'lucide-react';
import type { UserProfile } from '@/lib/types';

export default function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState('');
  const [editAvatar, setEditAvatar] = useState('');
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [stats, setStats] = useState({ totalSessions: 0, overallAccuracy: 0, totalXP: 0 });

  useEffect(() => {
    const p = getUserProfile();
    setProfile(p);
    setEditName(p.name);
    setEditAvatar(p.avatar);
    setStats(getOverallStats());
  }, []);

  const handleSave = () => {
    updateUserProfile({ name: editName, avatar: editAvatar });
    setProfile({ ...profile!, name: editName, avatar: editAvatar });
    setIsEditing(false);
  };

  const handleClearData = () => {
    clearAllData();
    navigate('/');
    window.location.reload(); // Hard reload to reset all states globally
  };

  if (!profile) return null;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
        <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center">
          <User size={24} />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-900">User Profile</h1>
          <p className="text-slate-600">Manage your identity and local save data.</p>
        </div>
      </div>

      <div className="clean-card p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-32 h-32 bg-slate-100 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-6xl">
            {profile.avatar}
          </div>
          <div className="flex-1 w-full space-y-4">
            {!isEditing ? (
              <>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{profile.name}</h2>
                  <p className="text-sm text-slate-500">
                    Joined {new Date(profile.joined_at).toLocaleDateString()}
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-slate-50 border border-slate-200 rounded px-4 py-2">
                    <p className="text-xs text-slate-500 font-bold uppercase">Total XP</p>
                    <p className="text-xl font-black text-slate-800">{stats.totalXP}</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded px-4 py-2">
                    <p className="text-xs text-slate-500 font-bold uppercase">Cases Completed</p>
                    <p className="text-xl font-black text-slate-800">{stats.totalSessions}</p>
                  </div>
                </div>

                <button 
                  onClick={() => setIsEditing(true)}
                  className="btn-secondary mt-2"
                >
                  Edit Profile
                </button>
              </>
            ) : (
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Display Name</label>
                  <input 
                    type="text" 
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Avatar (Emoji)</label>
                  <input 
                    type="text" 
                    value={editAvatar}
                    onChange={(e) => setEditAvatar(e.target.value)}
                    maxLength={2}
                    className="w-20 text-center text-2xl px-3 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex gap-2">
                  <button onClick={handleSave} className="btn-primary flex items-center gap-2">
                    <Save size={16} /> Save Changes
                  </button>
                  <button onClick={() => setIsEditing(false)} className="px-4 py-2 text-slate-600 hover:text-slate-900 font-medium">
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="clean-card p-6 border-red-200 bg-red-50">
        <h3 className="text-lg font-bold text-red-800 mb-2 flex items-center gap-2">
          <ShieldAlert size={20} /> Danger Zone
        </h3>
        <p className="text-sm text-red-600 mb-4">
          Erasing your progress will permanently delete all your completed cases, scores, earned badges, and custom imported cases. This action cannot be undone.
        </p>

        {!showClearConfirm ? (
          <button 
            onClick={() => setShowClearConfirm(true)}
            className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded font-bold transition-colors flex items-center gap-2 border border-red-300"
          >
            <Trash2 size={16} /> Erase All Progress
          </button>
        ) : (
          <div className="p-4 bg-white border border-red-300 rounded-lg shadow-sm">
            <p className="font-bold text-slate-900 mb-3">Are you absolutely sure you want to wipe your local save?</p>
            <div className="flex gap-3">
              <button 
                onClick={handleClearData}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded font-bold transition-colors shadow-sm"
              >
                Yes, Erase Everything
              </button>
              <button 
                onClick={() => setShowClearConfirm(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded font-medium transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
