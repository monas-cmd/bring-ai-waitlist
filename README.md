# Bring AI - Futuristic Waiting List

A sleek, modern, and futuristic waiting list signup page for Bring AI - an AI startup providing emotional comfort through digital replicas of loved ones.

## ✨ Features

- **Futuristic Design**: Glass morphism effects, neon accents, and holographic gradients
- **Animated Background**: Particle system with floating 3D shapes
- **Interactive Elements**: Glowing input fields, animated buttons, and micro-interactions
- **Real-time Social Proof**: Live signup counter and testimonial ticker
- **Supabase Integration**: Secure email collection and database storage
- **Responsive Design**: Works perfectly on all devices
- **TypeScript**: Full type safety and modern development experience

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom animations
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database**: Supabase
- **Particles**: Custom particle system

## 🎨 Design Elements

- **Color Palette**: Cool blues (#00d4ff), deep purples (#8b5cf6), and metallic gradients
- **Glass Morphism**: Frosted glass panels with backdrop blur effects
- **Neon Effects**: Glowing text and borders with CSS animations
- **Floating Elements**: 3D abstract shapes with smooth animations
- **Grid Patterns**: Subtle cyberpunk-inspired background grids

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bring-waiting-list
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` and add your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up Supabase Database**
   
   Create a new table in your Supabase database:
   ```sql
   CREATE TABLE waitlist (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     email TEXT UNIQUE NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected'))
   );
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ParticleBackground.tsx    # Animated particle system
│   ├── FloatingShapes.tsx        # 3D floating geometric shapes
│   ├── EmailSignup.tsx          # Main signup form with Supabase
│   └── SocialProof.tsx          # Live counter and testimonials
├── lib/
│   └── supabase.ts              # Supabase client configuration
├── App.tsx                      # Main application component
├── main.tsx                     # React entry point
└── index.css                    # Global styles and Tailwind
```

## 🎯 Key Components

### EmailSignup
- Animated input field with glowing effects
- Form validation and error handling
- Success state with confirmation message
- Integration with Supabase for email storage

### ParticleBackground
- Custom particle system with smooth animations
- Interactive hover effects
- Grid pattern overlay for depth

### SocialProof
- Real-time signup counter
- Animated testimonial ticker
- Star rating display

### FloatingShapes
- 3D geometric shapes with floating animations
- Holographic line effects
- Responsive positioning

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:
```javascript
colors: {
  'neon-blue': '#00d4ff',
  'neon-purple': '#8b5cf6',
  'deep-space': '#0a0a0f',
  // Add your custom colors here
}
```

### Animations
Modify animation timings in `src/index.css`:
```css
@keyframes glow {
  '0%': { boxShadow: '0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 15px #00d4ff' };
  '100%': { boxShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff' };
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Add environment variables in Netlify dashboard

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Tailwind CSS for styling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email support@bringai.com or create an issue in the repository.

---

**Bring AI** - The future of emotional companionship is here. 🌟 