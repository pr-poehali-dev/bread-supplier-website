import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ['hero', 'about', 'products', 'contacts'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg border-b border-border' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary rounded-lg p-2">
                <Icon name="Wheat" className="text-secondary" size={24} />
              </div>
              <span className="text-lg font-bold text-secondary tracking-tight">Сибирские Просторы</span>
            </div>
            <div className="hidden md:flex gap-1 bg-muted rounded-full p-1">
              {[
                { id: 'hero', label: 'Главная' },
                { id: 'about', label: 'О нас' },
                { id: 'products', label: 'Продукция' },
                { id: 'contacts', label: 'Контакты' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                    activeSection === id 
                      ? 'bg-primary text-secondary shadow-md' 
                      : 'text-foreground hover:bg-white'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="relative pt-32 pb-20 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-white to-muted"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-secondary">25 лет лидерства на рынке</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-extrabold text-secondary leading-[1.1] tracking-tight">
                Всё для выпечки<br />
                <span className="text-primary">и хлеба</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Входим в Ассоциацию производителей хлебобулочных изделий. Поставляем качественную продукцию уже 25 лет.
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-secondary font-semibold shadow-lg"
                  onClick={() => scrollToSection('products')}
                >
                  Наша продукция
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 font-semibold"
                  onClick={() => scrollToSection('contacts')}
                >
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop" 
                  alt="Свежий хлеб и выпечка"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 text-white">О нас</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-8 space-y-4 text-white/90">
                  <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Award" className="text-primary" size={24} />
                  </div>
                  <p className="leading-relaxed">
                    Компания «Торговый дом «Сибирские Просторы» входит в Ассоциацию производителей и поставщиков хлебобулочных изделий при ТПП Ханты-Мансийского АО-Югры.
                  </p>
                  <p className="leading-relaxed">
                    Поставляем продукцию для хлебобулочных изделий более 25 лет.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-8 space-y-4 text-white/90">
                  <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Users" className="text-primary" size={24} />
                  </div>
                  <p className="leading-relaxed">
                    Среди наших клиентов мелкие, средние и крупные производители: пекарни, кулинарии, пиццерии.
                  </p>
                  <p className="font-semibold text-primary leading-relaxed">
                    Сотрудничаем только с проверенными поставщиками и гарантируем качество продукции.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="relative py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-secondary">Продукция</h2>
            <p className="text-muted-foreground text-lg">
              Полный перечень продуктов для выпечки и хлеба
            </p>
            <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-8 space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Wheat" className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-secondary">Мука в ассортименте</h3>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Мука «Муза» высший сорт, первый сорт, ржаная</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Мука «Макфа» высший сорт, первый сорт</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Мука «Бонжорно» высший сорт, первый сорт</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>И другие производители</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-8 space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Package" className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-secondary">Маргарин</h3>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Маргарин 72,5%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Маргарин 82,5%</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-8 space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Cookie" className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-secondary">Дрожжи</h3>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Дрожжи хлебопекарные прессованные</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Дрожжи сухие активные</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-8 space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Droplet" className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-secondary">Масло</h3>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Масло подсолнечное рафинированное</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Масло растительное</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-8 space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Milk" className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-secondary">Молочная продукция</h3>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Молоко сухое обезжиренное</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Молоко сухое цельное</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-8 space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Plus" className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-secondary">Другая продукция</h3>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Соль поваренная</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Сахар-песок</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Улучшители вкуса</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="relative py-24 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 text-secondary">Контакты</h2>
              <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-secondary mb-2">Адрес</h3>
                      <p className="text-foreground/70">
                        г. Сургут, ул. 30 лет Победы, 42, офис 27
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-secondary mb-2">Телефон</h3>
                      <a href="tel:+73462522991" className="text-foreground/70 hover:text-primary transition-colors">
                        +7 (3462) 52-29-91
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-secondary mb-2">Email</h3>
                      <a href="mailto:td-sp@mail.ru" className="text-foreground/70 hover:text-primary transition-colors">
                        td-sp@mail.ru
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Icon name="Clock" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-secondary mb-2">Время работы</h3>
                      <p className="text-foreground/70">
                        Пн-Пт: 9:00 - 18:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-primary rounded-lg p-2">
                <Icon name="Wheat" className="text-secondary" size={24} />
              </div>
              <div>
                <p className="font-bold text-lg">Торговый дом «Сибирские Просторы»</p>
                <p className="text-white/60 text-sm">25 лет на рынке</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white/80">© 2025 Все права защищены</p>
              <p className="text-white/60 text-sm mt-1">ИНН 8602174406 КПП 860201001</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
