import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const featuredPoems = [
    {
      title: "Тишина",
      excerpt: "В тишине утреннего сада\nЯ слышу голос времени,\nКак листья шепчут о прошлом\nИ ветер рассказывает будущее...",
      date: "15 июля 2024"
    },
    {
      title: "Звёзды над городом",
      excerpt: "Неоновые звёзды города\nОтражаются в лужах дождя,\nИ каждая капля хранит\nОтражение чьей-то мечты...",
      date: "8 июля 2024"
    },
    {
      title: "Память",
      excerpt: "Память — это океан,\nГде волны прошлого\nНакатывают на берег настоящего,\nОставляя ракушки воспоминаний...",
      date: "1 июля 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 py-6">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Icon name="Feather" size={24} className="text-gray-700" />
            <h1 className="text-2xl font-light tracking-wide text-gray-800">Поэзия</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors font-light">Стихи</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors font-light">О себе</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors font-light">Контакты</a>
          </nav>
          <Button variant="ghost" className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
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
            <Button variant="ghost" className="text-gray-600 hover:text-gray-800">
              Все стихи
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
          
          <div className="grid gap-8 md:gap-12">
            {featuredPoems.map((poem, index) => (
              <Card key={index} className="border-none shadow-none hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-2xl font-light text-gray-800 group-hover:text-gray-600 transition-colors">
                      {poem.title}
                    </h4>
                    <span className="text-sm text-gray-400 font-light">{poem.date}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-light whitespace-pre-line mb-6">
                    {poem.excerpt}
                  </p>
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
                </CardContent>
              </Card>
            ))}
          </div>
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

      {/* Newsletter */}
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

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Icon name="Feather" size={20} className="text-gray-600" />
              <span className="text-gray-600 font-light">© 2024 Поэзия</span>
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