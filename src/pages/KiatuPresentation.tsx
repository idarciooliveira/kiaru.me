import React, { useState } from 'react';
import { Monitor, Palette, User, Settings, LogOut, Chrome, QRCode, BarChart3, FileDown, Play, ArrowRight, Check } from 'lucide-react';

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

  const companies = [
    { name: 'Sonangol', width: 'w-20' },
    { name: 'BAI', width: 'w-16' },
    { name: 'Unitel', width: 'w-18' },
    { name: 'BFA', width: 'w-14' },
    { name: 'Multichoice', width: 'w-22' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1600px] mx-auto p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">Kiatu</h1>
          <p className="text-xl text-gray-600 font-medium">Product Design Presentation</p>
        </div>

        {/* Main Presentation Container */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 xl:grid-cols-2 min-h-[800px]">
            
            {/* Panel 1: Full Landing Page */}
            <div className="bg-white overflow-y-auto max-h-[800px]">
              <div className="space-y-0">
                
                {/* Header */}
                <div className="bg-white px-8 py-6 border-b border-gray-100 sticky top-0 z-10">
                  <div className="flex items-center justify-between max-w-6xl mx-auto">
                    <div className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
                      Kiatu
                    </div>
                    <button className="px-6 py-2 text-gray-700 hover:text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                      Login
                    </button>
                  </div>
                </div>

                {/* Hero Section */}
                <div className="px-8 py-16 bg-gradient-to-br from-gray-50 to-white">
                  <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                      O Seu Perfil Profissional,<br />
                      <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
                        Reinventado
                      </span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                      Crie, personalize e partilhe uma página impressionante que une o seu CV, portfólio e contactos. Sem precisar de código.
                    </p>

                    {/* Device Mockups */}
                    <div className="mb-12 flex justify-center items-end space-x-8">
                      {/* Phone Mockup */}
                      <div className="relative">
                        <div className="w-56 h-[480px] bg-black rounded-[3rem] p-3 shadow-2xl transform rotate-3">
                          <div 
                            className="w-full h-full rounded-[2.5rem] overflow-hidden relative"
                            style={{ background: themes[selectedTheme].preview }}
                          >
                            <div className="p-6 text-white">
                              <div className="w-20 h-20 bg-white/20 rounded-full mb-4 mx-auto"></div>
                              <div className="text-center space-y-3">
                                <div className="h-5 bg-white/30 rounded mb-2"></div>
                                <div className="h-4 bg-white/20 rounded mb-6 w-3/4 mx-auto"></div>
                                <div className="grid grid-cols-4 gap-2 mb-6">
                                  <div className="aspect-square bg-white/20 rounded-lg"></div>
                                  <div className="aspect-square bg-white/20 rounded-lg"></div>
                                  <div className="aspect-square bg-white/20 rounded-lg"></div>
                                  <div className="aspect-square bg-white/20 rounded-lg"></div>
                                </div>
                                <div className="space-y-2">
                                  <div className="h-3 bg-white/20 rounded"></div>
                                  <div className="h-3 bg-white/20 rounded w-4/5 mx-auto"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Laptop Mockup */}
                      <div className="relative">
                        <div className="w-80 h-52 bg-gray-800 rounded-t-2xl p-2 shadow-2xl transform -rotate-2">
                          <div 
                            className="w-full h-full rounded-xl overflow-hidden"
                            style={{ background: themes[selectedTheme].preview }}
                          >
                            <div className="p-4 text-white">
                              <div className="flex items-start space-x-4">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex-shrink-0"></div>
                                <div className="flex-1 space-y-2">
                                  <div className="h-4 bg-white/30 rounded w-3/4"></div>
                                  <div className="h-3 bg-white/20 rounded w-1/2"></div>
                                  <div className="h-2 bg-white/20 rounded w-full"></div>
                                  <div className="h-2 bg-white/20 rounded w-4/5"></div>
                                </div>
                              </div>
                              <div className="grid grid-cols-6 gap-1 mt-4">
                                {[...Array(6)].map((_, i) => (
                                  <div key={i} className="aspect-square bg-white/20 rounded"></div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-80 h-4 bg-gray-700 rounded-b-2xl shadow-lg"></div>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="space-y-4">
                      <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-semibold py-4 px-12 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg">
                        Comece Grátis
                      </button>
                      <div>
                        <button className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-8 rounded-xl border border-gray-300 transition-colors flex items-center justify-center gap-3 mx-auto">
                          <Chrome className="w-5 h-5" />
                          Inscreva-se com Google
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Proof */}
                <div className="px-8 py-12 bg-gray-50 border-y border-gray-100">
                  <div className="max-w-6xl mx-auto text-center">
                    <p className="text-sm text-gray-600 mb-8 font-medium">
                      A confiança de profissionais e empresas de topo em Angola
                    </p>
                    <div className="flex justify-center items-center space-x-12 opacity-60">
                      {companies.map((company, index) => (
                        <div key={index} className={`${company.width} h-8 bg-gray-300 rounded flex items-center justify-center`}>
                          <span className="text-xs font-medium text-gray-500">{company.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Feature Showcase A */}
                <div className="px-8 py-20">
                  <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                      <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                          Mostre o seu<br />Melhor Trabalho
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          Faça o upload de imagens, adicione links de projectos e inclua vídeos do YouTube para criar um portfólio visualmente rico que prova as suas competências.
                        </p>
                        <div className="flex items-center space-x-2 text-emerald-600">
                          <Check className="w-5 h-5" />
                          <span className="font-medium">Upload ilimitado de imagens</span>
                        </div>
                        <div className="flex items-center space-x-2 text-emerald-600">
                          <Check className="w-5 h-5" />
                          <span className="font-medium">Integração com YouTube</span>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-xl">
                          <div className="space-y-4">
                            <div className="grid grid-cols-3 gap-3">
                              <div className="aspect-square bg-gradient-to-br from-emerald-400 to-blue-500 rounded-lg"></div>
                              <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg"></div>
                              <div className="aspect-square bg-gradient-to-br from-orange-400 to-red-500 rounded-lg relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <Play className="w-6 h-6 text-white" />
                                </div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature Showcase B */}
                <div className="px-8 py-20 bg-gray-50">
                  <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                      <div className="relative order-2 lg:order-1">
                        <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-700 mb-3">Pré-visualização ao Vivo</h4>
                            <div 
                              className="h-32 rounded-xl p-4 text-white relative overflow-hidden"
                              style={{ background: themes[selectedTheme].preview }}
                            >
                              <div className="text-center">
                                <div className="w-12 h-12 bg-white/20 rounded-full mb-2 mx-auto"></div>
                                <div className="h-3 bg-white/30 rounded mb-1 w-3/4 mx-auto"></div>
                                <div className="h-2 bg-white/20 rounded w-1/2 mx-auto"></div>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-4 gap-2">
                            {themes.map((theme, index) => (
                              <button
                                key={index}
                                onClick={() => setSelectedTheme(index)}
                                className={`aspect-square rounded-lg ${theme.gradient} transition-all duration-300 ${
                                  selectedTheme === index ? 'ring-2 ring-emerald-500 scale-110' : 'hover:scale-105'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6 order-1 lg:order-2">
                        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                          Personalização<br />Total
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          Escolha entre temas de cores deslumbrantes, ajuste a tipografia e organize as secções para criar um perfil que reflete verdadeiramente a sua identidade profissional.
                        </p>
                        <div className="flex items-center space-x-2 text-emerald-600">
                          <Check className="w-5 h-5" />
                          <span className="font-medium">Temas de cores premium</span>
                        </div>
                        <div className="flex items-center space-x-2 text-emerald-600">
                          <Check className="w-5 h-5" />
                          <span className="font-medium">Pré-visualização em tempo real</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Kiatu Section */}
                <div className="px-8 py-20">
                  <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                      <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Tudo o Que Precisa Para Se Destacar
                      </h2>
                      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Ferramentas profissionais que fazem a diferença no seu networking e carreira
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Card 1 */}
                      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                          <QRCode className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Contacto Instantâneo</h3>
                        <p className="text-gray-600 leading-relaxed">
                          O seu perfil gera um QR Code único. Perfeito para partilhar em cartões de visita físicos ou em eventos de networking.
                        </p>
                      </div>

                      {/* Card 2 */}
                      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                          <BarChart3 className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Veja Quem o Viu</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Saiba quantas pessoas visitaram o seu perfil e de onde vêm, para entender o seu alcance profissional.
                        </p>
                      </div>

                      {/* Card 3 */}
                      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                          <FileDown className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">CV para Download</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Permita que recrutadores descarreguem uma versão PDF do seu CV directamente do seu perfil Kiatu.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final CTA */}
                <div className="px-8 py-20 bg-gradient-to-r from-emerald-500 to-blue-600">
                  <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                      Pronto para criar o seu Kiatu?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                      Junte-se a milhares de profissionais que já transformaram a sua presença digital
                    </p>
                    <button className="bg-white hover:bg-gray-100 text-gray-900 font-semibold py-4 px-12 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg flex items-center gap-3 mx-auto">
                      Comece Grátis
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2: User Dashboard */}
            <div className="bg-gray-50 border-l border-gray-200">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">User Dashboard</h2>
                
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                  <div className="flex h-[600px]">
                    {/* Sidebar */}
                    <div className="w-64 bg-gray-50 border-r border-gray-200 p-6">
                      <nav className="space-y-2">
                        <div className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
                          <User className="w-5 h-5" />
                          <span className="font-medium">Editar Perfil</span>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-700 rounded-lg cursor-pointer">
                          <Palette className="w-5 h-5" />
                          <span className="font-medium">Aparência</span>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
                          <Settings className="w-5 h-5" />
                          <span className="font-medium">Conta</span>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer mt-8 transition-colors">
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
                        <div className="border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm">
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
                                  ? 'ring-4 ring-emerald-500 ring-offset-2 shadow-lg' 
                                  : 'ring-2 ring-gray-200 hover:ring-gray-300 shadow-md'
                              }`}
                            >
                              {selectedTheme === index && (
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                                  </div>
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                        <p className="text-xs text-gray-500 mt-3 text-center">
                          {themes[selectedTheme].name}
                        </p>
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
          <p className="text-gray-500 font-medium">Professional Design Mockup - Kiatu Digital Business Card Platform</p>
        </div>
      </div>
    </div>
  );
};

export default KiatuPresentation;