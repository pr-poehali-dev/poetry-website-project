import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Index = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [poems, setPoems] = useState([]);
  const [siteSettings, setSiteSettings] = useState({
    siteName: 'Поэзия',
    authorName: '',
    tagline: 'Слова, рождённые в тишине',
    bio: 'Добро пожаловать в мой поэтический мир, где каждое стихотворение — это попытка поймать мгновение и превратить его в вечность.',
    theme: 'minimal',
    fontStyle: 'serif'
  });
  const [newPoem, setNewPoem] = useState({ title: '', content: '', date: '' });
  const [showAddPoem, setShowAddPoem] = useState(false);
  
  const addPoem = () => {
    if (newPoem.title && newPoem.content) {
      setPoems([...poems, { ...newPoem, id: Date.now(), date: newPoem.date || new Date().toLocaleDateString('ru-RU') }]);
      setNewPoem({ title: '', content: '', date: '' });
      setShowAddPoem(false);
    }
  };
  
  const deletePoem = (id) => {
    setPoems(poems.filter(poem => poem.id !== id));
  };
  
  const updateSiteSettings = (key, value) => {
    setSiteSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 py-6">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Icon name="Feather" size={24} className="text-gray-700" />
            <h1 className="text-2xl font-light tracking-wide text-gray-800">{siteSettings.siteName}</h1>
          </div>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors font-light">Стихи</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors font-light">О себе</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors font-light">Контакты</a>
            </nav>
            
            {/* Admin Panel Toggle */}
            <Button 
              onClick={() => setIsEditMode(!isEditMode)}
              variant={isEditMode ? "default" : "ghost"}
              size="sm"
              className="flex items-center space-x-2"
            >
              <Icon name={isEditMode ? "Eye" : "Settings"} size={16} />
              <span className="hidden sm:inline">{isEditMode ? 'Просмотр' : 'Редактировать'}</span>
            </Button>
            
            <Button variant="ghost" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-light text-gray-800 mb-6 leading-tight">
            Слова, рождённые
            <br />
            <span className="text-gray-600">в тишине</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
            Добро пожаловать в мой поэтический мир, где каждое стихотворение — 
            это попытка поймать мгновение и превратить его в вечность.
          </p>
          <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-light tracking-wide">
            Читать стихи
          </Button>
        </div>
      </section>

      {/* Featured Poems */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-light text-gray-800">Избранные стихи</h3>
            <div className="flex items-center space-x-4">
              {isEditMode && (
                <Dialog open={showAddPoem} onOpenChange={setShowAddPoem}>
                  <DialogTrigger asChild>
                    <Button className="bg-gray-800 hover:bg-gray-700 text-white">
                      <Icon name="Plus" size={16} className="mr-2" />
                      Добавить стих
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Добавить новое стихотворение</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="title">Название</Label>
                        <Input 
                          id="title"
                          value={newPoem.title}
                          onChange={(e) => setNewPoem(prev => ({ ...prev, title: e.target.value }))}
                          placeholder="Название стихотворения"
                        />
                      </div>
                      <div>
                        <Label htmlFor="content">Текст стихотворения</Label>
                        <Textarea 
                          id="content"
                          value={newPoem.content}
                          onChange={(e) => setNewPoem(prev => ({ ...prev, content: e.target.value }))}
                          placeholder="Напишите ваше стихотворение..."
                          rows={12}
                          className="font-serif"
                        />
                      </div>
                      <div>
                        <Label htmlFor="date">Дата (необязательно)</Label>
                        <Input 
                          id="date"
                          value={newPoem.date}
                          onChange={(e) => setNewPoem(prev => ({ ...prev, date: e.target.value }))}
                          placeholder="дд.мм.гггг"
                        />
                      </div>
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" onClick={() => setShowAddPoem(false)}>Отмена</Button>
                        <Button onClick={addPoem}>Добавить</Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              )}
              
              {!isEditMode && (
                <Button variant="ghost" className="text-gray-600 hover:text-gray-800">
                  Все стихи
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              )}
            </div>
          </div>
          
          {poems.length === 0 ? (
            <div className="text-center py-12">
              <Icon name="BookOpen" size={48} className="text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg font-light">
                {isEditMode ? 'Добавьте первое стихотворение' : 'Здесь будут ваши стихотворения'}
              </p>
              <p className="text-gray-400 text-sm mt-2">
                {isEditMode ? 'Нажмите "Добавить стих" чтобы начать' : 'Добавьте первое стихотворение, чтобы начать делиться творчеством'}
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:gap-12">
              {poems.map((poem) => (
                <Card key={poem.id} className="border-none shadow-none hover:shadow-lg transition-all duration-300 cursor-pointer group relative">
                  <CardContent className="p-8">
                    {isEditMode && (
                      <Button 
                        onClick={() => deletePoem(poem.id)}
                        variant="ghost" 
                        size="sm"
                        className="absolute top-4 right-4 text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    )}
                    <div className="flex items-start justify-between mb-4 pr-12">
                      <h4 className="text-2xl font-light text-gray-800 group-hover:text-gray-600 transition-colors">
                        {poem.title}
                      </h4>
                      <span className="text-sm text-gray-400 font-light">{poem.date}</span>
                    </div>
                    <p className={`text-gray-600 leading-relaxed font-light whitespace-pre-line mb-6 ${siteSettings.fontStyle === 'serif' ? 'font-serif' : 'font-sans'}`}>
                      {poem.content}
                    </p>
                    {!isEditMode && (
                      <div className="flex items-center justify-between">
                        <Button variant="ghost" className="text-gray-600 hover:text-gray-800 p-0 h-auto font-light">
                          Читать полностью
                        </Button>
                        <div className="flex space-x-4">
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                            <Icon name="Heart" size={16} />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                            <Icon name="Share2" size={16} />
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Icon name="Quote" size={32} className="text-gray-400 mx-auto mb-6" />
          <blockquote className="text-2xl font-light text-gray-700 leading-relaxed mb-8">
            "Поэзия — это музыка души, записанная словами на бумаге времени."
          </blockquote>
          <p className="text-gray-600 font-light leading-relaxed">
            Я верю, что каждый момент жизни достоин того, чтобы стать стихотворением. 
            В моих работах переплетаются городская суета и природная тишина, 
            современность и вечность, личное и универсальное.
          </p>
        </div>
      </section>

      {/* Settings Panel */}
      {isEditMode && (
        <section className="py-16 bg-gray-50 border-t-2 border-dashed border-gray-300">
          <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-3xl font-light text-gray-800 mb-8">Настройки сайта</h3>
            
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="general">Общие</TabsTrigger>
                <TabsTrigger value="appearance">Внешний вид</TabsTrigger>
                <TabsTrigger value="content">Контент</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general" className="space-y-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="siteName">Название сайта</Label>
                    <Input 
                      id="siteName"
                      value={siteSettings.siteName}
                      onChange={(e) => updateSiteSettings('siteName', e.target.value)}
                      placeholder="Название вашего сайта"
                    />
                  </div>
                  <div>
                    <Label htmlFor="authorName">Имя автора</Label>
                    <Input 
                      id="authorName"
                      value={siteSettings.authorName}
                      onChange={(e) => updateSiteSettings('authorName', e.target.value)}
                      placeholder="Ваше имя"
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="appearance" className="space-y-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="theme">Тема оформления</Label>
                    <Select value={siteSettings.theme} onValueChange={(value) => updateSiteSettings('theme', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тему" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="minimal">Минимализм</SelectItem>
                        <SelectItem value="classic">Классика</SelectItem>
                        <SelectItem value="modern">Современный</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="fontStyle">Стиль шрифта</Label>
                    <Select value={siteSettings.fontStyle} onValueChange={(value) => updateSiteSettings('fontStyle', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите шрифт" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="serif">С засечками (для поэзии)</SelectItem>
                        <SelectItem value="sans">Без засечек (современный)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="content" className="space-y-6 mt-6">
                <div className="bg-white p-6 rounded-lg border">
                  <h4 className="text-lg font-medium mb-4">Управление стихотворениями</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Всего стихотворений: {poems.length}</span>
                      <Button onClick={() => setShowAddPoem(true)} size="sm">
                        <Icon name="Plus" size={16} className="mr-2" />
                        Добавить новое
                      </Button>
                    </div>
                    <div className="text-sm text-gray-600">
                      Добавляйте, редактируйте и удаляйте стихотворения прямо в режиме редактирования
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      )}
      
      {/* Newsletter */}
      {!isEditMode && (
        <section className="py-16">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-light text-gray-800 mb-4">Оставайтесь на связи</h3>
            <p className="text-gray-600 mb-8 font-light">
              Подпишитесь на уведомления о новых стихотворениях
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:border-gray-400 font-light"
              />
              <Button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-light">
                Подписаться
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Icon name="Feather" size={20} className="text-gray-600" />
              <span className="text-gray-600 font-light">© 2024 {siteSettings.siteName}{siteSettings.authorName && ` • ${siteSettings.authorName}`}</span>
            </div>
            <div className="flex space-x-6">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                <Icon name="Mail" size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                <Icon name="Twitter" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;