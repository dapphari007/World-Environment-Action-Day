import React from 'react';
import { X, Facebook, Twitter, Instagram, Linkedin, Copy, Check } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'share' | 'download' | 'invite';
  title: string;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, type, title }) => {
  const [copied, setCopied] = React.useState(false);
  
  if (!isOpen) return null;

  const currentUrl = window.location.href;
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOptions = [
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-blue-600 hover:bg-blue-700',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'bg-sky-500 hover:bg-sky-600',
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=Join me in taking climate action! 🌍`
    },
    {
      name: 'Instagram',
      icon: Instagram,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
      url: '#'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'bg-blue-700 hover:bg-blue-800',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`
    }
  ];

  const downloadResources = [
    { name: 'Eco-Friendly Home Guide', size: '2.3 MB', format: 'PDF' },
    { name: 'Carbon Reduction Checklist', size: '1.8 MB', format: 'PDF' },
    { name: 'Sustainable Living Toolkit', size: '4.1 MB', format: 'ZIP' },
    { name: 'Climate Action Infographics', size: '3.2 MB', format: 'PNG' }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {type === 'share' && (
            <div className="space-y-4">
              <p className="text-gray-600 mb-6">Share your environmental journey and inspire others!</p>
              
              <div className="grid grid-cols-2 gap-3">
                {shareOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <a
                      key={option.name}
                      href={option.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${option.color} text-white p-4 rounded-2xl flex flex-col items-center space-y-2 transition-all duration-300 transform hover:scale-105`}
                    >
                      <Icon className="w-6 h-6" />
                      <span className="text-sm font-semibold">{option.name}</span>
                    </a>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-2xl">
                <p className="text-sm text-gray-600 mb-3">Or copy link to share:</p>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={currentUrl}
                    readOnly
                    className="flex-1 p-3 bg-white border border-gray-200 rounded-xl text-sm"
                  />
                  <button
                    onClick={handleCopyLink}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      copied ? 'bg-green-500 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                  >
                    {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>
          )}

          {type === 'download' && (
            <div className="space-y-4">
              <p className="text-gray-600 mb-6">Download comprehensive eco-guides and resources:</p>
              
              {downloadResources.map((resource, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-2xl hover:border-green-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-800">{resource.name}</h4>
                      <p className="text-sm text-gray-500">{resource.size} • {resource.format}</p>
                    </div>
                    <a
                      href="https://www.unep.org/ietc/resources"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl font-semibold transition-colors"
                    >
                      Download
                    </a>
                  </div>
                </div>
              ))}

              <div className="mt-6 p-4 bg-blue-50 rounded-2xl">
                <p className="text-blue-800 font-semibold mb-2">🌍 More Resources Available</p>
                <p className="text-blue-700 text-sm">Visit UNEP for additional environmental resources and toolkits.</p>
              </div>
            </div>
          )}

          {type === 'invite' && (
            <div className="space-y-4">
              <p className="text-gray-600 mb-6">Invite friends to join the climate action movement!</p>
              
              <div className="grid grid-cols-2 gap-3">
                {shareOptions.map((option) => {
                  const Icon = option.icon;
                  const inviteText = "🌍 Join me in taking climate action! Calculate your carbon footprint and make a real difference.";
                  const inviteUrl = option.name === 'Twitter' 
                    ? `https://twitter.com/intent/tweet?text=${encodeURIComponent(inviteText)}&url=${encodeURIComponent(currentUrl)}`
                    : `${option.url}&quote=${encodeURIComponent(inviteText)}`;
                  
                  return (
                    <a
                      key={option.name}
                      href={inviteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${option.color} text-white p-4 rounded-2xl flex flex-col items-center space-y-2 transition-all duration-300 transform hover:scale-105`}
                    >
                      <Icon className="w-6 h-6" />
                      <span className="text-sm font-semibold">{option.name}</span>
                    </a>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl">
                <h4 className="font-semibold text-gray-800 mb-2">🎁 Referral Rewards</h4>
                <p className="text-sm text-gray-600">Earn 50 eco-points for each friend who joins and completes their first carbon calculation!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShareModal;