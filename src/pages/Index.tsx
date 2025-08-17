import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedBike, setSelectedBike] = useState(null);

  const bikes = [
    {
      id: 1,
      name: 'Городской велосипед',
      type: 'Комфорт',
      price: '250₽/день',
      rating: 4.8,
      reviews: 124,
      image: '/img/de01e660-3b39-44c3-bfd7-486492264dc3.jpg',
      features: ['7 скоростей', 'Корзина', 'LED фары']
    },
    {
      id: 2,
      name: 'Горный велосипед',
      type: 'Спорт',
      price: '250₽/день',
      rating: 4.9,
      reviews: 89,
      image: '/img/de01e660-3b39-44c3-bfd7-486492264dc3.jpg',
      features: ['21 скорость', 'Амортизация', 'Дисковые тормоза']
    },
    {
      id: 3,
      name: 'Электровелосипед',
      type: 'Электро',
      price: '250₽/день',
      rating: 4.7,
      reviews: 67,
      image: '/img/de01e660-3b39-44c3-bfd7-486492264dc3.jpg',
      features: ['Электромотор', '50км пробег', 'USB зарядка']
    },
    {
      id: 4,
      name: 'Лыжный комплект',
      type: 'Лыжи',
      price: '250₽/день',
      rating: 4.6,
      reviews: 52,
      image: '/img/de01e660-3b39-44c3-bfd7-486492264dc3.jpg',
      features: ['Лыжи + палки', 'Крепления', 'Ботинки в комплекте']
    },
    {
      id: 5,
      name: 'Фэтбайк',
      type: 'Экстрим',
      price: '250₽/день',
      rating: 4.9,
      reviews: 73,
      image: '/img/de01e660-3b39-44c3-bfd7-486492264dc3.jpg',
      features: ['Широкие покрышки', 'Зимняя резина', '18 скоростей']
    }
  ];

  const locations = [
    {
      id: 1,
      name: 'Центральный офис',
      address: 'ул. Тверская, 12',
      hours: '9:00 - 21:00',
      phone: '+7 (495) 123-45-67'
    },
    {
      id: 2,
      name: 'Парк Сокольники',
      address: 'Сокольнический Вал, 1с1',
      hours: '8:00 - 22:00',
      phone: '+7 (495) 234-56-78'
    },
    {
      id: 3,
      name: 'Воробьевы горы',
      address: 'Косыгина, 28',
      hours: '7:00 - 23:00',
      phone: '+7 (495) 345-67-89'
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Анна К.',
      rating: 5,
      text: 'Отличный сервис! Велосипед в идеальном состоянии, персонал очень дружелюбный.',
      date: '15 августа 2025'
    },
    {
      id: 2,
      name: 'Дмитрий М.',
      rating: 5,
      text: 'Удобное бронирование, быстрая выдача. Рекомендую!',
      date: '12 августа 2025'
    },
    {
      id: 3,
      name: 'Елена С.',
      rating: 4,
      text: 'Хорошие велосипеды, приятные цены. Единственный минус - мало точек выдачи.',
      date: '10 августа 2025'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon 
        key={i} 
        name={i < Math.floor(rating) ? "Star" : "StarHalf"} 
        size={16} 
        className={i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <header className="bg-card shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Bike" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-card-foreground">Здоровяк</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#catalog" className="text-muted-foreground hover:text-card-foreground transition-colors">Каталог</a>
              <a href="#pricing" className="text-muted-foreground hover:text-card-foreground transition-colors">Тарифы</a>
              <a href="#locations" className="text-muted-foreground hover:text-card-foreground transition-colors">Адреса</a>
              <a href="#reviews" className="text-muted-foreground hover:text-card-foreground transition-colors">Отзывы</a>
              <Button className="animate-scale-in">Забронировать</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6 animate-fade-in">
            Спортивно-оздоровительный центр<br />«Здоровяк»
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto animate-fade-in">
            Исследуйте город на качественных велосипедах. Удобное бронирование, доступные цены, отличный сервис.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Icon name="Calendar" size={20} className="mr-2" />
              Забронировать сейчас
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
              <Icon name="MapPin" size={20} className="mr-2" />
              Найти точку выдачи
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12 text-card-foreground">Наш каталог</h3>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8">
            {bikes.map((bike, index) => (
              <Card key={bike.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="p-0">
                  <img src={bike.image} alt={bike.name} className="w-full h-48 object-cover rounded-t-lg" />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <CardTitle className="text-lg">{bike.name}</CardTitle>
                      <Badge variant="secondary" className="mt-1">{bike.type}</Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-primary">{bike.price}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2">{renderStars(bike.rating)}</div>
                    <span className="text-sm text-muted-foreground">
                      {bike.rating} ({bike.reviews} отзывов)
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    {bike.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="mr-2 text-secondary" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button className="w-full" onClick={() => setSelectedBike(bike.id)}>
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12 text-card-foreground">Тарифы и условия</h3>
          <Tabs defaultValue="hourly" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="hourly">Почасовая аренда</TabsTrigger>
              <TabsTrigger value="daily">Суточная аренда</TabsTrigger>
              <TabsTrigger value="weekly">Недельная аренда</TabsTrigger>
            </TabsList>
            
            <TabsContent value="hourly" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <h4 className="text-lg font-semibold mb-2">Городской</h4>
                      <div className="text-3xl font-bold text-primary mb-2">150₽</div>
                      <div className="text-muted-foreground">за час</div>
                    </div>
                    <div className="text-center">
                      <h4 className="text-lg font-semibold mb-2">Спортивный</h4>
                      <div className="text-3xl font-bold text-primary mb-2">200₽</div>
                      <div className="text-muted-foreground">за час</div>
                    </div>
                    <div className="text-center">
                      <h4 className="text-lg font-semibold mb-2">Электро</h4>
                      <div className="text-3xl font-bold text-primary mb-2">300₽</div>
                      <div className="text-muted-foreground">за час</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="daily">
              <Card>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <h4 className="text-lg font-semibold mb-2">Городской</h4>
                      <div className="text-3xl font-bold text-primary mb-2">500₽</div>
                      <div className="text-muted-foreground">за сутки</div>
                    </div>
                    <div className="text-center">
                      <h4 className="text-lg font-semibold mb-2">Спортивный</h4>
                      <div className="text-3xl font-bold text-primary mb-2">800₽</div>
                      <div className="text-muted-foreground">за сутки</div>
                    </div>
                    <div className="text-center">
                      <h4 className="text-lg font-semibold mb-2">Электро</h4>
                      <div className="text-3xl font-bold text-primary mb-2">1200₽</div>
                      <div className="text-muted-foreground">за сутки</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="weekly">
              <Card>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <h4 className="text-lg font-semibold mb-2">Городской</h4>
                      <div className="text-3xl font-bold text-primary mb-2">2800₽</div>
                      <div className="text-muted-foreground">за неделю</div>
                      <Badge className="mt-2">Скидка 20%</Badge>
                    </div>
                    <div className="text-center">
                      <h4 className="text-lg font-semibold mb-2">Спортивный</h4>
                      <div className="text-3xl font-bold text-primary mb-2">4500₽</div>
                      <div className="text-muted-foreground">за неделю</div>
                      <Badge className="mt-2">Скидка 20%</Badge>
                    </div>
                    <div className="text-center">
                      <h4 className="text-lg font-semibold mb-2">Электро</h4>
                      <div className="text-3xl font-bold text-primary mb-2">6700₽</div>
                      <div className="text-muted-foreground">за неделю</div>
                      <Badge className="mt-2">Скидка 20%</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12 text-card-foreground">Пункты выдачи</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card key={location.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-lg mb-2">{location.name}</CardTitle>
                      <div className="space-y-2">
                        <div className="flex items-center text-muted-foreground">
                          <Icon name="MapPin" size={16} className="mr-2" />
                          {location.address}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Icon name="Clock" size={16} className="mr-2" />
                          {location.hours}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Icon name="Phone" size={16} className="mr-2" />
                          {location.phone}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Icon name="Navigation" size={16} className="mr-2" />
                    Показать на карте
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12 text-card-foreground">Отзывы клиентов</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={review.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <div className="text-sm text-muted-foreground">{review.date}</div>
                    </div>
                    <div className="flex">{renderStars(review.rating)}</div>
                  </div>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Card className="inline-block">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-primary mb-2">4.8</div>
                <div className="flex justify-center mb-2">{renderStars(4.8)}</div>
                <div className="text-muted-foreground">Средний рейтинг из 280+ отзывов</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-6">Готовы к приключениям?</h3>
          <p className="text-xl mb-8 text-blue-100">
            Забронируйте велосипед прямо сейчас и начните исследовать город уже сегодня!
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
            <Icon name="Calendar" size={20} className="mr-2" />
            Забронировать велосипед
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Bike" size={24} className="text-primary" />
                <h4 className="text-lg font-bold">Здоровяк</h4>
              </div>
              <p className="text-muted-foreground">
                Спортивно-оздоровительный центр с широким выбором инвентаря. Качество, надежность, доступные цены.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>Прокат велосипедов</li>
                <li>Прокат электросамокатов</li>
                <li>Аксессуары</li>
                <li>Экскурсии</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Информация</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>О компании</li>
                <li>Условия аренды</li>
                <li>Контакты</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@bikerental.ru
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Москва, ул. Тверская, 12
                </div>
              </div>
            </div>
          </div>
          <div className="border-t pt-8 mt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Спортивно-оздоровительный центр «Здоровяк». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;