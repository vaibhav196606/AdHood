# AdHood - Quick Reference Card

## 🚀 Get Started in 30 Seconds

```bash
# Your dev server is already running at:
http://localhost:5173

# If you need to start it again:
npm run dev

# To build for production:
npm run build
```

## 📄 5 Pages Created

| Page | URL | Purpose |
|------|-----|---------|
| **Home** | `/` | Browse 10 ad spaces |
| **Property Detail** | `/property/:id` | View details & book |
| **About Us** | `/about` | Learn about AdHood |
| **Contact** | `/contact` | Get in touch |
| **Rent Your Space** | `/rent-your-space` | List your space |

## 🎨 Color Palette

```css
Primary Blue:  #4391fc (Matches AdHood Logo)
White:         #ffffff (Clean & Professional)
```

## 📊 Sample Data

- **10 properties** across Hyderabad
- **Rates**: ₹17,000 - ₹28,000/week
- **Areas**: HITEC City, Banjara Hills, Jubilee Hills, Madhapur, Gachibowli, Kukatpally, Secunderabad, Ameerpet, Begumpet, LB Nagar

## 🛠️ Key Components

```
src/
├── components/
│   ├── Header.jsx          → Navigation bar
│   ├── Footer.jsx          → Site footer
│   └── AdSpaceCard.jsx     → Property cards
├── pages/
│   ├── Home.jsx            → Landing page
│   ├── PropertyDetail.jsx  → Property + booking
│   ├── About.jsx           → About page
│   ├── Contact.jsx         → Contact form
│   └── RentYourSpace.jsx   → Listing form
└── data/
    └── adSpaces.js         → Property data
```

## ⚡ Quick Edits

### Change a Property
Edit: `src/data/adSpaces.js`

### Change Colors
Edit: `tailwind.config.js`

### Add a Page
1. Create file in `src/pages/`
2. Add route in `src/App.jsx`
3. Add link in `src/components/Header.jsx`

### Modify Forms
- Contact: `src/pages/Contact.jsx`
- Booking: `src/pages/PropertyDetail.jsx`
- Listing: `src/pages/RentYourSpace.jsx`

## 📱 Responsive Design

- **Mobile**: < 768px → 1 column
- **Tablet**: 768-1024px → 2 columns
- **Desktop**: > 1024px → 3 columns

## ✨ Features

✅ Responsive navigation  
✅ Mobile hamburger menu  
✅ Property cards with hover effects  
✅ Booking form with validation  
✅ Contact form  
✅ Space listing form  
✅ Google Maps integration  
✅ Success confirmations  
✅ Smooth animations  
✅ Modern card design  

## 🚢 Deploy To

- **Vercel**: `vercel deploy`
- **Netlify**: Upload `dist` folder
- **GitHub Pages**: Configure in repo settings

## 📚 Documentation

- `README.md` → Overview & quick start
- `SETUP_GUIDE.md` → Detailed guide
- `PROJECT_SUMMARY.md` → Complete summary
- `QUICK_REFERENCE.md` → This file!

## 🎯 Test These Features

1. **Browse properties** on home page
2. **Click "View Details"** on any card
3. **Fill booking form** and submit
4. **List a space** via "Rent Your Space"
5. **Send a message** via Contact page
6. **Test mobile menu** (resize browser)

## 💡 Pro Tips

- Forms show success pages after submission
- All forms include validation
- Press ESC to close mobile menu
- Hover over cards for animations
- Click logo to return home

## 🐛 Troubleshooting

**Server won't start?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Port in use?**
Vite will auto-select next available port

**Build fails?**
Check Node.js version (need v16+)

## 📞 Support

- Check `SETUP_GUIDE.md` for help
- All code has comments
- Forms have validation messages

---

**Your website is ready!** Open http://localhost:5173 🎉

