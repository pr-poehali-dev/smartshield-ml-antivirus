import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [scanComplete, setScanComplete] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [messages, setMessages] = useState([
    { type: 'ai', content: 'Привет! Я ИИ-помощник SmartShield. Как могу помочь с вашей безопасностью?' }
  ]);

  const handleFileUpload = () => {
    setUploadProgress(0);
    setScanComplete(false);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setScanComplete(true);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const sendMessage = () => {
    if (chatMessage.trim()) {
      setMessages(prev => [...prev, 
        { type: 'user', content: chatMessage },
        { type: 'ai', content: 'Анализирую ваш запрос... SmartShield рекомендует регулярно обновлять базы данных угроз.' }
      ]);
      setChatMessage('');
    }
  };

  const stats = [
    { label: 'Файлов проверено', value: '2,547,832', trend: '+12%' },
    { label: 'Угроз заблокировано', value: '45,721', trend: '+8%' },
    { label: 'Активных пользователей', value: '127,458', trend: '+15%' },
    { label: 'Точность ИИ', value: '99.7%', trend: '+0.3%' }
  ];

  const features = [
    {
      icon: 'Brain',
      title: 'Машинное обучение',
      description: 'Предсказывает новые угрозы на основе поведенческого анализа'
    },
    {
      icon: 'Shield',
      title: 'Автоматическая изоляция',
      description: 'Мгновенно изолирует подозрительные файлы до анализа'
    },
    {
      icon: 'Activity',
      title: 'Анализ трафика',
      description: 'Мониторинг сетевого трафика в реальном времени'
    },
    {
      icon: 'Zap',
      title: 'Быстрое сканирование',
      description: 'Проверка файлов со скоростью до 10GB/мин'
    }
  ];

  const reviews = [
    {
      name: 'Александр Петров',
      role: 'IT-директор',
      rating: 5,
      text: 'SmartShield защитил нашу компанию от 15 неизвестных угроз за месяц. Невероятная точность!'
    },
    {
      name: 'Мария Иванова',
      role: 'Системный администратор',
      rating: 5,
      text: 'ИИ-помощник решает проблемы быстрее любой техподдержки. Очень довольна!'
    },
    {
      name: 'Дмитрий Сидоров',
      role: 'Владелец бизнеса',
      rating: 4,
      text: 'Простота использования и надежность. Рекомендую всем!'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-shield-green to-emerald-600 rounded-lg flex items-center justify-center">
                <Icon name="Shield" className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-shield-dark">SmartShield</h1>
                <p className="text-sm text-gray-600">ИИ Антивирус нового поколения</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#features" className="text-gray-700 hover:text-shield-green transition-colors">Функции</a>
              <a href="#scan" className="text-gray-700 hover:text-shield-green transition-colors">Сканирование</a>
              <a href="#reviews" className="text-gray-700 hover:text-shield-green transition-colors">Отзывы</a>
              <a href="#support" className="text-gray-700 hover:text-shield-green transition-colors">Поддержка</a>
            </nav>
            <Button className="bg-shield-green hover:bg-emerald-600 text-white">
              <Icon name="Download" className="w-4 h-4 mr-2" />
              Скачать
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-shield-light to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-shield overflow-hidden">
              <img src="/img/41703c4b-2710-4439-9ae4-f47ad06e7256.jpg" alt="SmartShield AI Protection" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-5xl font-bold text-shield-dark mb-6">
              Защита с <span className="text-shield-green">искусственным интеллектом</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              SmartShield использует машинное обучение для предсказания и блокировки неизвестных угроз. 
              Анализируйте поведение файлов, мониторьте трафик и получайте защиту следующего уровня.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-shield-green hover:bg-emerald-600 text-white px-8 py-6 text-lg">
                <Icon name="Download" className="w-5 h-5 mr-2" />
                Скачать бесплатно
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-shield-green text-shield-green hover:bg-shield-green hover:text-white">
                <Icon name="Play" className="w-5 h-5 mr-2" />
                Смотреть демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="animate-scale-in border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-shield-dark mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    {stat.trend}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-shield-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-shield-dark mb-4">Революционные возможности</h3>
            <p className="text-xl text-gray-600">ИИ-технологии для максимальной защиты</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="animate-fade-in border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-shield-green rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon} className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-shield-dark">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* File Scanner */}
      <section id="scan" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-shield-dark mb-4">Проверка файлов онлайн</h3>
            <p className="text-xl text-gray-600">Загрузите файл для мгновенного анализа ИИ</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-dashed border-shield-green">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-shield-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name="Upload" className="w-10 h-10 text-shield-green" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Перетащите файл сюда</h4>
                  <p className="text-gray-600 mb-6">или нажмите для выбора файла</p>
                  <Button onClick={handleFileUpload} className="bg-shield-green hover:bg-emerald-600 text-white">
                    Выбрать файл
                  </Button>
                </div>
                {uploadProgress > 0 && (
                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Сканирование...</span>
                      <span className="text-sm text-gray-600">{uploadProgress}%</span>
                    </div>
                    <Progress value={uploadProgress} className="h-2" />
                  </div>
                )}
                {scanComplete && (
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                      <Icon name="CheckCircle" className="w-6 h-6 text-green-600 mr-3" />
                      <div>
                        <p className="font-semibold text-green-800">Файл безопасен</p>
                        <p className="text-sm text-green-600">Угрозы не обнаружены</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 bg-shield-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-shield-dark mb-4">Отзывы пользователей</h3>
            <p className="text-xl text-gray-600">Что говорят о SmartShield</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="animate-fade-in border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback className="bg-shield-green text-white">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Support */}
      <section id="support" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-shield-dark mb-4">ИИ-поддержка 24/7</h3>
            <p className="text-xl text-gray-600">Получите мгновенную помощь от нашего ИИ-ассистента</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-shield-green text-white">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="MessageCircle" className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle>SmartShield ИИ-помощник</CardTitle>
                    <CardDescription className="text-green-100">Всегда готов помочь</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-64 overflow-y-auto p-4 space-y-4">
                  {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs px-4 py-2 rounded-lg ${
                        msg.type === 'user' 
                          ? 'bg-shield-green text-white' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {msg.content}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t p-4">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Задайте вопрос о безопасности..."
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    />
                    <Button onClick={sendMessage} className="bg-shield-green hover:bg-emerald-600">
                      <Icon name="Send" className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-r from-shield-green to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h3 className="text-4xl font-bold mb-4">Готовы к защите следующего уровня?</h3>
            <p className="text-xl mb-8 opacity-90">Скачайте SmartShield и защитите свои данные уже сегодня</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-shield-green hover:bg-gray-100 px-8 py-6">
                <Icon name="Download" className="w-5 h-5 mr-2" />
                Скачать для Windows
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-shield-green px-8 py-6">
                <Icon name="Download" className="w-5 h-5 mr-2" />
                Скачать для Mac
              </Button>
            </div>
            <p className="mt-4 text-sm opacity-75">Бесплатно для личного использования • Корпоративные лицензии доступны</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-shield-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-shield-green rounded-lg flex items-center justify-center">
                  <Icon name="Shield" className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">SmartShield</span>
              </div>
              <p className="text-gray-400">Защита с искусственным интеллектом для современного мира.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Функции</a></li>
                <li><a href="#" className="hover:text-white">Цены</a></li>
                <li><a href="#" className="hover:text-white">Скачать</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Документация</a></li>
                <li><a href="#" className="hover:text-white">Контакты</a></li>
                <li><a href="#" className="hover:text-white">ИИ-помощник</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">О нас</a></li>
                <li><a href="#" className="hover:text-white">Блог</a></li>
                <li><a href="#" className="hover:text-white">Карьера</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SmartShield. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}