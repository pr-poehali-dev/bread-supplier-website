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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-4 ${
        isScrolled ? 'bg-white border-foreground' : 'bg-white/90 border-foreground/20'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary border-4 border-foreground p-2">
                <Icon name="Wheat" className="text-white" size={28} />
              </div>
              <span className="text-2xl font-bold text-foreground uppercase tracking-wider">Сибирские Просторы</span>
            </div>
            <div className="hidden md:flex gap-2">
              {[
                { id: 'hero', label: 'Главная' },
                { id: 'about', label: 'О нас' },
                { id: 'products', label: 'Продукция' },
                { id: 'contacts', label: 'Контакты' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`px-6 py-3 text-sm font-bold uppercase border-2 transition-all ${
                    activeSection === id 
                      ? 'bg-foreground text-white border-foreground' 
                      : 'bg-white text-foreground border-foreground hover:bg-foreground hover:text-white'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="relative pt-32 pb-20 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'repeating-linear-gradient(0deg, #000, #000 2px, transparent 2px, transparent 20px), repeating-linear-gradient(90deg, #000, #000 2px, transparent 2px, transparent 20px)'}}></div>
        
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary border-8 border-foreground rotate-12"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-secondary border-8 border-foreground -rotate-6"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-accent border-8 border-foreground rotate-45"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-foreground text-white px-6 py-3 border-4 border-foreground transform -rotate-2">
                <span className="text-sm font-bold uppercase">★ 25 лет на рынке ★</span>
              </div>
              <h1 className="text-7xl lg:text-8xl font-bold text-foreground leading-[0.9] uppercase">
                Всё для<br />
                <span className="text-primary">выпечки</span><br />
                <span className="text-secondary">и хлеба</span>
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-xl font-medium border-l-4 border-primary pl-6">
                Входим в Ассоциацию производителей хлебобулочных изделий. Поставляем качественную продукцию уже 25 лет.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-bold border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all uppercase"
                  onClick={() => scrollToSection('products')}
                >
                  Продукция
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-foreground font-bold border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all uppercase"
                  onClick={() => scrollToSection('contacts')}
                >
                  Контакты
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative border-8 border-foreground bg-gradient-to-br from-amber-100 via-yellow-100 to-orange-100 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
                <div className="h-[500px] flex items-center justify-center p-12">
                  <div className="text-center space-y-8">
                    <div className="text-9xl animate-bounce">🌾</div>
                    <div className="flex gap-6 justify-center">
                      <div className="text-7xl animate-pulse">🍞</div>
                      <div className="text-7xl animate-pulse" style={{animationDelay: '0.5s'}}>🥖</div>
                      <div className="text-7xl animate-pulse" style={{animationDelay: '1s'}}>🥐</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative py-24 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'}}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <h2 className="text-7xl font-bold text-white uppercase mb-4 border-b-8 border-primary inline-block pb-2">О нас</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white border-4 border-white shadow-[12px_12px_0px_0px_rgba(34,197,94,1)]">
                <CardContent className="p-8 space-y-4">
                  <div className="bg-primary border-4 border-foreground w-16 h-16 flex items-center justify-center mb-4">
                    <Icon name="Award" className="text-white" size={28} />
                  </div>
                  <p className="leading-relaxed text-foreground/80 font-medium">
                    Компания «Торговый дом «Сибирские Просторы» входит в Ассоциацию производителей и поставщиков хлебобулочных изделий при ТПП Ханты-Мансийского АО-Югры.
                  </p>
                  <p className="leading-relaxed text-foreground/80 font-medium">
                    Поставляем продукцию для хлебобулочных изделий более 25 лет.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-4 border-white shadow-[12px_12px_0px_0px_rgba(168,85,247,1)]">
                <CardContent className="p-8 space-y-4">
                  <div className="bg-secondary border-4 border-foreground w-16 h-16 flex items-center justify-center mb-4">
                    <Icon name="Users" className="text-white" size={28} />
                  </div>
                  <p className="leading-relaxed text-foreground/80 font-medium">
                    Среди наших клиентов мелкие, средние и крупные производители: пекарни, кулинарии, пиццерии.
                  </p>
                  <p className="font-bold text-foreground leading-relaxed text-lg">
                    Сотрудничаем только с проверенными поставщиками и гарантируем качество продукции.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-blue-50"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)', backgroundSize: '30px 30px'}}></div>
        
        <div className="absolute top-40 left-10 w-40 h-40 bg-primary border-8 border-foreground rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-accent border-8 border-foreground -rotate-6"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16">
            <h2 className="text-7xl font-bold text-foreground uppercase mb-4 border-b-8 border-secondary inline-block pb-2">Продукция</h2>
            <p className="text-muted-foreground text-lg font-medium mt-6 border-l-4 border-accent pl-6">
              Полный перечень продуктов для выпечки и хлеба
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { icon: 'Wheat', title: 'Мука', color: 'primary', items: ['Мука «Муза»', 'Мука «Макфа»', 'Мука «Бонжорно»', 'И другие производители'] },
              { icon: 'Package', title: 'Маргарин', color: 'secondary', items: ['Маргарин 72,5%', 'Маргарин 82,5%'] },
              { icon: 'Cookie', title: 'Дрожжи', color: 'accent', items: ['Дрожжи прессованные', 'Дрожжи сухие активные'] },
              { icon: 'Droplet', title: 'Масло', color: 'primary', items: ['Масло подсолнечное', 'Масло растительное'] },
              { icon: 'Milk', title: 'Молочная продукция', color: 'secondary', items: ['Молоко сухое обезжиренное', 'Молоко сухое цельное'] },
              { icon: 'Plus', title: 'Другое', color: 'accent', items: ['Соль поваренная', 'Сахар-песок', 'Улучшители вкуса'] }
            ].map((product, idx) => (
              <Card key={idx} className={`group hover:-translate-y-2 transition-all duration-300 bg-white border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]`}>
                <CardContent className="p-8 space-y-4">
                  <div className={`bg-${product.color} border-4 border-foreground w-20 h-20 flex items-center justify-center`}>
                    <Icon name={product.icon as any} className="text-white" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground uppercase">{product.title}</h3>
                  <ul className="space-y-2 text-sm text-foreground/70 font-medium">
                    {product.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-2xl leading-none">▸</span>
                        <span className="pt-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="relative py-24 bg-accent overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(90deg, #000 0px, #000 4px, transparent 4px, transparent 40px), repeating-linear-gradient(0deg, #000 0px, #000 4px, transparent 4px, transparent 40px)'}}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-7xl font-bold text-foreground uppercase mb-4 border-b-8 border-foreground inline-block pb-2">Контакты</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white border-4 border-foreground shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary border-4 border-foreground p-4">
                      <Icon name="MapPin" className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-foreground uppercase mb-2">Адрес</h3>
                      <p className="text-foreground/70 font-medium">
                        г. Сургут, ул. 30 лет Победы, 42, офис 27
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary border-4 border-foreground p-4">
                      <Icon name="Phone" className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-foreground uppercase mb-2">Телефон</h3>
                      <a href="tel:+73462522991" className="text-foreground/70 hover:text-primary transition-colors font-bold text-lg">
                        +7 (3462) 52-29-91
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-4 border-foreground shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary border-4 border-foreground p-4">
                      <Icon name="Mail" className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-foreground uppercase mb-2">Email</h3>
                      <a href="mailto:td-sp@mail.ru" className="text-foreground/70 hover:text-primary transition-colors font-bold text-lg">
                        td-sp@mail.ru
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary border-4 border-foreground p-4">
                      <Icon name="Clock" className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-foreground uppercase mb-2">Время работы</h3>
                      <p className="text-foreground/70 font-medium">
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

      <footer className="bg-foreground text-white py-12 border-t-8 border-primary">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-primary border-4 border-white p-3">
                <Icon name="Wheat" className="text-white" size={28} />
              </div>
              <div>
                <p className="font-bold text-xl uppercase">Торговый дом «Сибирские Просторы»</p>
                <p className="text-white/70 text-sm font-medium">★ 25 лет на рынке ★</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white/90 font-medium">© 2025 Все права защищены</p>
              <p className="text-white/60 text-sm mt-1">ИНН 8602174406 КПП 860201001</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
