import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Wheat" className="text-primary" size={28} />
              <span className="text-xl font-bold text-secondary">Всё для выпечки и хлеба</span>
            </div>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'hero', label: 'Главная' },
                { id: 'about', label: 'О нас' },
                { id: 'products', label: 'Продукция' },
                { id: 'contacts', label: 'Контакты' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === id ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="relative pt-24 pb-16 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-20 text-8xl">🌾</div>
          <div className="absolute top-40 right-32 text-6xl rotate-45">🌾</div>
          <div className="absolute bottom-32 left-1/4 text-7xl -rotate-12">🍞</div>
          <div className="absolute top-1/3 right-20 text-5xl rotate-12">🥖</div>
          <div className="absolute bottom-20 right-1/3 text-6xl">🌾</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block bg-secondary/10 px-4 py-2 rounded-full border-2 border-secondary/20">
                <span className="text-sm font-semibold text-secondary">25 лет на рынке</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-secondary leading-tight drop-shadow-sm">
                Всё для выпечки<br />и хлеба
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Компания «Торговый дом «Сибирские Просторы» входит в Ассоциацию производителей и поставщиков хлебобулочных изделий. Поставляем качественную продукцию для производства хлебобулочных изделий уже 25 лет.
              </p>
            </div>
            <div className="relative h-[400px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop" 
                alt="Свежий хлеб и выпечка"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative py-20 bg-gradient-to-b from-white to-amber-50/30">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-yellow-50 to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-secondary">О нас</h2>
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8 space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  Компания «Торговый дом «Сибирские Просторы» входит в Ассоциацию производителей и поставщиков хлебобулочных изделий, которая создана при Торгово-Промышленной палате Ханты-Мансийского автономного округа-Югры в августе 2019 года.
                </p>
                <p>
                  Наша компания занимается поставкой продукции, которая используется при производстве хлебобулочных изделий, уже более 25 лет.
                </p>
                <p>
                  Среди наших потребителей мелкие, средние и крупные производители: пекарни, кулинарии, пиццерии.
                </p>
                <p className="font-semibold text-secondary">
                  Мы сотрудничаем только с проверенными поставщиками и гарантируем качество продукции.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="products" className="relative py-20 bg-gradient-to-br from-orange-50/40 via-yellow-50/30 to-amber-50/40">
        <div className="absolute top-10 right-10 text-9xl opacity-5">🌾</div>
        <div className="absolute bottom-20 left-10 text-9xl opacity-5 rotate-180">🌾</div>
        <div className="absolute top-1/2 left-1/4 text-7xl opacity-5">🍞</div>
        <div className="relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-secondary">Продукция</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Полный перечень продуктов для выпечки и хлеба
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-primary/30">
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Icon name="Wheat" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-secondary">Мука в ассортименте</h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Мука «Муза» высший сорт, первый сорт, ржаная</li>
                  <li>• Мука «Макфа» высший сорт, первый сорт</li>
                  <li>• Мука «Бонжорно» высший сорт, первый сорт</li>
                  <li>• Мука «Рядна» высший сорт, первый сорт</li>
                  <li>• Мука «ТЕРЕК» высший сорт</li>
                  <li>• Мука «Черемушки» высший сорт</li>
                  <li>• Мука «Сигма» высший сорт</li>
                  <li>• Мука «Гранд» высший сорт</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-primary/30">
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Icon name="Package" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-secondary">Маргарин в ассортименте</h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Маргарин 72,5%</li>
                  <li>• Маргарин 82,5%</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-primary/30">
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Icon name="Sparkles" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-secondary">Дрожжи в ассортименте</h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Дрожжи сухие инстантные</li>
                  <li>• Дрожжи прессованные</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-primary/30">
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Icon name="Cookie" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-secondary">Специи в ассортименте</h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Мак</li>
                  <li>• Кунжут</li>
                  <li>• Сахарная пудра</li>
                  <li>• Ванилин</li>
                  <li>• Кардамон</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-primary/30">
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Icon name="Pizza" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-secondary">Сыры в ассортименте</h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Голландский классический (молокосодержащий продукт)</li>
                  <li>• Сыр «Голландский»</li>
                  <li>• Сыр «Российский»</li>
                  <li>• Сыр «Моцарелла»</li>
                  <li>• Сыр «Гауда»</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-primary/30">
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Icon name="Droplet" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-secondary">Масло подсолнечное</h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Масло подсолнечное рафинированное</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-primary/30">
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Icon name="Container" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-secondary">Соль в ассортименте</h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Соль йодированная</li>
                  <li>• Соль нейодированная</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-primary/30">
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Icon name="Candy" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-secondary">Сахар всегда в наличии</h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Сахар-песок</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        </div>
      </section>

      <section id="contacts" className="relative py-20 bg-gradient-to-b from-amber-100/50 via-orange-50/30 to-yellow-100/40">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 text-7xl">📧</div>
          <div className="absolute bottom-20 right-10 text-7xl">📞</div>
          <div className="absolute top-1/2 right-1/4 text-6xl">📍</div>
        </div>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary">Контакты</h2>
          <Card className="max-w-2xl mx-auto border-2 border-primary/20">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="MapPin" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-secondary">Адрес</h3>
                  <p className="text-foreground/80">
                    628401, ТЮМЕНСКАЯ ОБЛАСТЬ<br />
                    Г. СУРГУТ<br />
                    УЛ. СОСНОВАЯ, 3
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="Phone" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-secondary">Телефон</h3>
                  <div className="space-y-1 text-foreground/80">
                    <p>8 (3462) 23-62-15 — отдел продаж</p>
                    <p>23-60-29 — приёмная</p>
                    <p>26-14-19 — бухгалтерия</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="Mail" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-secondary">Почта</h3>
                  <a href="mailto:zakroma86@mail.ru" className="text-primary hover:underline">
                    zakroma86@mail.ru
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="relative bg-gradient-to-br from-amber-900 via-orange-900 to-yellow-900 text-white py-8">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Wheat" size={24} />
            <span className="font-bold">Всё для выпечки и хлеба</span>
          </div>
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} Торговый дом «Сибирские Просторы». Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;