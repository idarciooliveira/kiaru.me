import React, { useState } from 'react';
import { Monitor, Palette, User, Settings, LogOut, Chrome } from 'lucide-react';

const KiatuPresentation = () => {
  const [selectedTheme, setSelectedTheme] = useState(0);

  const themes = [
    {
      name: 'Vibrant Red to Black',
      gradient: 'bg-gradient-to-br from-red-500 via-red-600 to-black',
      preview: 'linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #000000 100%)'
    },
    {
      name: 'Deep Blue to Dark Grey',
      gradient: 'bg-gradient-to-br from-blue-600 via-blue-800 to-gray-900',
      preview: 'linear-gradient(135deg, #2563eb 0%, #1e40af 50%, #111827 100%)'
    },
    {
      name: 'Classic Navy Blue',
      gradient: 'bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900',
      preview: 'linear-gradient(135deg, #1e3a8a 0%, #0f172a 50%, #0f172a 100%)'
    },
    {
      name: 'Lush Green to Ocean Blue',
      gradient: 'bg-gradient-to-br from-emerald-500 via-teal-600 to-blue-700',
      preview: 'linear-gradient(135deg, #10b981 0%, #0d9488 50%, #1d4ed8 100%)'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Kiatu</h1>
          <p className="text-xl text-gray-600">Product Design Presentation</p>
        </div>

        {/* Main Presentation Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Panel 1: Landing Page */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Landing Page</h2>
              
              <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg">
                {/* Header */}
                <div className="bg-white px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                  <div className="text-2xl font-bold text-gray-900">Kiatu</div>
                  <button className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium">
                    Login
                  </button>
                </div>

                {/* Hero Section */}
                <div className="px-6 py-12 text-center bg-gradient-to-br from-blue-50 to-indigo-50">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    Crie o seu Cartão de<br />Visita Digital em Minutos
                  </h1>
                  <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
                    Impressione clientes e recrutadores com um perfil profissional que une o seu CV, portfólio e contactos.
                  </p>

                  {/* Phone Mockup */}
                  <div className="mb-8 flex justify-center">
                    <div className="relative">
                      <div className="w-48 h-96 bg-black rounded-3xl p-2 shadow-2xl">
                        <div 
                          className="w-full h-full rounded-2xl overflow-hidden"
                          style={{ background: themes[selectedTheme].preview }}
                        >
                          <div className="p-4 text-white">
                            <div className="w-16 h-16 bg-white/20 rounded-full mb-3 mx-auto"></div>
                            <div className="text-center">
                              <div className="h-4 bg-white/30 rounded mb-2"></div>
                              <div className="h-3 bg-white/20 rounded mb-4 w-3/4 mx-auto"></div>
                              <div className="space-y-2">
                                <div className="h-2 bg-white/20 rounded"></div>
                                <div className="h-2 bg-white/20 rounded w-4/5 mx-auto"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="space-y-3">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors shadow-lg">
                      Comece Grátis
                    </button>
                    <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-8 rounded-xl border border-gray-300 transition-colors flex items-center justify-center gap-3">
                      <Chrome className="w-5 h-5" />
                      Inscreva-se com Google
                    </button>
                  </div>
                </div>

                {/* Social Proof */}
                <div className="px-6 py-8 bg-gray-50 text-center">
                  <p className="text-sm text-gray-600 mb-4">Usado por profissionais em Angola e no mundo</p>
                  <div className="flex justify-center items-center space-x-6 opacity-60">
                    <div className="w-16 h-8 bg-gray-300 rounded"></div>
                    <div className="w-16 h-8 bg-gray-300 rounded"></div>
                    <div className="w-16 h-8 bg-gray-300 rounded"></div>
                    <div className="w-16 h-8 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2: User Dashboard */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">User Dashboard</h2>
              
              <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg">
                <div className="flex h-[600px]">
                  {/* Sidebar */}
                  <div className="w-64 bg-gray-50 border-r border-gray-200 p-6">
                    <nav className="space-y-2">
                      <div className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <User className="w-5 h-5" />
                        <span className="font-medium">Editar Perfil</span>
                      </div>
                      <div className="flex items-center gap-3 px-4 py-3 bg-blue-100 text-blue-700 rounded-lg cursor-pointer">
                        <Palette className="w-5 h-5" />
                        <span className="font-medium">Aparência</span>
                      </div>
                      <div className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <Settings className="w-5 h-5" />
                        <span className="font-medium">Conta</span>
                      </div>
                      <div className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer mt-8">
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium">Sair</span>
                      </div>
                    </nav>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Aparência do Perfil</h3>
                    
                    {/* Live Preview */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Pré-visualização</h4>
                      <div className="border-2 border-gray-200 rounded-xl overflow-hidden">
                        <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
                          <div className="flex gap-1">
                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          </div>
                          <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500 text-center">
                            kiatu.me/seu-perfil
                          </div>
                        </div>
                        <div 
                          className="h-48 p-6 text-white relative"
                          style={{ background: themes[selectedTheme].preview }}
                        >
                          <div className="text-center">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4 mx-auto flex items-center justify-center">
                              <User className="w-8 h-8 text-white/80" />
                            </div>
                            <h5 className="text-lg font-bold mb-1">João Silva</h5>
                            <p className="text-white/90 text-sm mb-3">Product Designer</p>
                            <div className="flex justify-center gap-2">
                              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full"></div>
                              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full"></div>
                              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Color Switcher */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-4">Selecione o seu Tema</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {themes.map((theme, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedTheme(index)}
                            className={`aspect-square rounded-xl ${theme.gradient} relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                              selectedTheme === index 
                                ? 'ring-4 ring-blue-500 ring-offset-2' 
                                : 'ring-2 ring-gray-200 hover:ring-gray-300'
                            }`}
                          >
                            {selectedTheme === index && (
                              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                </div>
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-500">Professional Design Mockup - Kiatu Digital Business Card Platform</p>
        </div>
      </div>
    </div>
  );
};

export default KiatuPresentation;