# AdHood - Setup & Quick Start Guide

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Navigate to the project directory**
   ```bash
   cd AdHood
   ```

2. **Install dependencies** (already done!)
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - The application will be running at: `http://localhost:5173`
   - The URL will be displayed in the terminal

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📱 Website Features & Usage

### 1. Home Page (`/`)

**What you'll see:**
- Hero section with tagline "Turn Your Space Into An Income Source"
- Three feature cards explaining how AdHood works
- 10 advertising space cards with:
  - High-quality images
  - Location details
  - Weekly rental rates
  - Visitor impressions
  - Nearby landmarks
  - "View Details" button

**Actions you can take:**
- Click "Start Earning Now" to list your space
- Click "Browse Spaces" to scroll to available spaces
- Click "View Details" on any space card to see full details

### 2. Property Detail Page (`/property/:id`)

**What you'll see:**
- Large property image
- Comprehensive information:
  - Location and description
  - Weekly rental rate
  - Daily visitor count
  - Space dimensions
  - City information
  - Nearby landmarks (filterable tags)
  - Interactive Google Maps embed

**Booking Form includes:**
- Full Name
- Email Address
- Phone Number
- Start Date (calendar picker)
- End Date (calendar picker)
- Submit button

**After submission:**
- Success page with confirmation
- Summary of booking details
- Next steps information
- Options to browse more spaces or make another booking

### 3. Rent Your Space Page (`/rent-your-space`)

**What you'll see:**
- Hero section with earnings statistics
- "How It Works" section with 4 steps
- Comprehensive space listing form

**Form fields:**
- **Personal Information:**
  - Full Name
  - Email Address
  - Phone Number

- **Space Information:**
  - City
  - Location/Area
  - Full Address
  - Space Type (dropdown):
    - Building Front Wall
    - Rooftop
    - Billboard/Hoarding
    - Compound Wall
    - Shop Front
    - Other
  - Approximate Size
  - Description & Additional Details

**After submission:**
- Success confirmation page
- Summary of submitted details
- "What's Next?" checklist
- Options to list another space or go home

### 4. About Us Page (`/about`)

**Content includes:**
- Mission statement
- What AdHood does
- How it works (3-step process)
- MVP notice with upcoming features
- Platform statistics

### 5. Contact Page (`/contact`)

**What you'll see:**
- Contact form with fields:
  - Name
  - Email
  - Message (textarea)
- Contact information:
  - Email addresses
  - Phone number (with business hours)
  - Physical address
- Quick FAQ section

**After submission:**
- Success confirmation
- Copy of your message
- Option to send another message

## 🎨 Design Features

### Color Scheme
- **Primary Blue**: Professional trust and reliability
- **Accent Green**: Growth and earning potential
- **Clean White**: Modern and spacious layout

### UI Elements
- **Cards**: Rounded corners with hover effects
- **Buttons**: Shadow effects and smooth transitions
- **Forms**: Clean input fields with focus states
- **Typography**: Clear hierarchy with modern fonts

### Responsive Design
- **Mobile**: Optimized for phones (< 768px)
- **Tablet**: Adapted for medium screens (768px - 1024px)
- **Desktop**: Full layout for large screens (> 1024px)

## 🔧 Customization

### Modifying Sample Data

Edit `src/data/adSpaces.js` to:
- Change property details
- Update pricing
- Modify locations
- Replace image URLs
- Update Google Maps coordinates

### Changing Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: { /* your colors */ },
  accent: { /* your colors */ }
}
```

### Adding New Pages

1. Create new page component in `src/pages/`
2. Add route in `src/App.jsx`:
```javascript
<Route path="/your-page" element={<YourPage />} />
```
3. Add navigation link in `src/components/Header.jsx`

## 📊 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🌐 Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Import repository on Vercel
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Upload `dist` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Other Platforms
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Any static hosting service

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is busy, Vite will automatically use the next available port.

### Build Errors
1. Delete `node_modules` folder
2. Delete `package-lock.json`
3. Run `npm install` again

### Images Not Loading
- Check internet connection
- Unsplash URLs might need updating
- Replace with local images if needed

## 📞 Support

For issues or questions:
- Email: info@adhood.co
- Phone: +91 8890240404

## 🎯 Next Steps

### For Development:
1. Replace placeholder images with real property photos
2. Add backend API integration
3. Implement user authentication
4. Add payment processing
5. Create admin dashboard

### For Production:
1. Add real Google Maps API key
2. Set up analytics (Google Analytics)
3. Configure SEO metadata
4. Add favicon and PWA support
5. Implement error tracking (Sentry)

---

**Happy Building! 🚀**

