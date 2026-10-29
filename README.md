# Arda Senturk - Kişisel Portföy Web Sitesi

Modern, responsive kişisel portföy web sitesi - React, TypeScript ve Tailwind CSS ile geliştirilmiş. GitHub Pages üzerinde yayınlanmış.

🌐 **Canlı Site**: [ardasenturk.de](https://ardasenturk.de)

## ✨ Özellikler

- **Responsive Tasarım**: Masaüstü, tablet ve mobil cihazlarda mükemmel çalışır
- **Modern UI**: Temiz, profesyonel tasarım ve akıcı animasyonlar
- **İnteraktif Navigasyon**: Bölümler arası yumuşak geçiş ve aktif durum takibi
- **Mobil Dostu**: Mobil cihazlar için hamburger menü
- **İletişim Formu**: Entegre iletişim formu ve e-posta işlevselliği
- **Sosyal Medya Entegrasyonu**: Tüm sosyal profillere bağlantılar
- **Performans Odaklı**: Optimized build ve hızlı yükleme

## 🛠 Teknoloji Stack

- **React 19** - En son sürüm ve modern özellikler
- **TypeScript** - Type-safe geliştirme
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Hızlı build aracı ve development server
- **GitHub Pages** - Ücretsiz static site hosting

## 👨‍💻 Hakkımda

React-Native Developer olarak 3+ yıl deneyime sahibim. Güzel tasarım ile sağlam işlevselliği birleştiren dijital çözümler üretmeyi seviyorum. Modern teknolojiler kullanarak ölçeklenebilir mobil uygulamalar geliştirmeye odaklanıyorum.

**Konum**: München, Germany  
**E-posta**: hello@ardasnturk.com  
**Uzmanlık Alanları**: React-Native, TypeScript, JavaScript, Node.js

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler

- Node.js (v18 veya üzeri)
- npm veya yarn
- Git

### Adımlar

1. Repository'yi klonlayın:

   ```bash
   git clone https://github.com/ardasnturk/web-site.git
   cd web-site
   ```

2. Bağımlılıkları yükleyin:

   ```bash
   npm install
   ```

3. Development server'ı başlatın:

   ```bash
   npm run dev
   ```

4. Tarayıcınızda [http://localhost:5173](http://localhost:5173) adresini açın.

## 📁 Proje Yapısı

```
web-site/
├── public/
│   ├── vite.svg
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.tsx      # Navigasyon ve header
│   │   ├── Home.tsx        # Ana sayfa / Hero section
│   │   ├── About.tsx       # Hakkımda bölümü
│   │   ├── Projects.tsx    # Projeler (şu anda devre dışı)
│   │   └── Contact.tsx     # İletişim formu ve bilgileri
│   ├── App.tsx            # Ana uygulama komponenti
│   ├── App.css           # Custom stiller
│   ├── index.css         # Global stiller ve Tailwind imports
│   └── main.tsx          # React uygulamasının giriş noktası
├── package.json          # Proje bağımlılıkları ve scripts
├── tailwind.config.js    # Tailwind CSS konfigürasyonu
├── vite.config.ts        # Vite build konfigürasyonu
├── CNAME                 # Custom domain konfigürasyonu
└── README.md            # Bu dosya
```

## 🎨 Özelleştirme

### Renk Şeması

Proje, `tailwind.config.js` dosyasında tanımlı custom primary renk paleti kullanıyor:

```javascript
primary: {
  50: "#eff6ff",   // En açık
  100: "#dbeafe",  // Açık
  500: "#3b82f6",  // Ana renk (Mavi)
  600: "#2563eb",  // Koyu
  900: "#1e3a8a",  // En koyu
}
```

### İçerik Güncelleme

Ana bileşenlerdeki kişisel bilgileri güncellemek için:

1. **src/components/Home.tsx** - İsim, başlık ve tanıtım
2. **src/components/About.tsx** - Hakkımda metni ve yetenekler
3. **src/components/Contact.tsx** - E-posta ve sosyal medya linkleri

## 📱 Sosyal Medya Linkleri

- **LinkedIn**: [ardasnturk](https://linkedin.com/in/ardasnturk)
- **GitHub**: [ardasnturk](https://github.com/ardasnturk)
- **Twitter**: [ardasnturk](https://twitter.com/ardasnturk)
- **E-posta**: hello@ardasnturk.com

## 🚀 Deployment

### GitHub Pages (Otomatik)

Proje GitHub Actions ile otomatik deploy edilir:

1. `main` branch'e push yaptığınızda otomatik olarak build ve deploy edilir
2. Site [ardasenturk.de](https://ardasenturk.de) adresinde yayınlanır
3. Custom domain CNAME dosyası ile yapılandırılmıştır

### Manuel Deployment

```bash
# Build oluşturma
npm run build

# GitHub Pages'e deploy
npm run deploy
```

## 📊 Performans

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Modern React 19** features ile optimize edilmiş
- **Tree shaking** ile minimal bundle boyutu
- **Lazy loading** ve performans optimizasyonları

## 🔧 Kullanılabilir Scriptler

```bash
npm run dev      # Development server başlatma
npm run build    # Production build oluşturma
npm run lint     # ESLint çalıştırma
npm run preview  # Production build önizleme
npm run deploy   # GitHub Pages'e deploy
```

## 🌐 Browser Desteği

- Chrome (en son)
- Firefox (en son)
- Safari (en son)
- Edge (en son)

## 📄 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır - detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🙏 Teşekkürler

- Modern portföy web sitelerinden tasarım ilhamı
- React ve modern web teknolojileri ile geliştirilmiştir
- GitHub Pages üzerinde ücretsiz hosting

---

**Not**: Bu site sürekli güncellenmekte ve yeni özellikler eklenmektedir. Geri bildirimlerinizi [hello@ardasnturk.com](mailto:hello@ardasnturk.com) adresine gönderebilirsiniz!
