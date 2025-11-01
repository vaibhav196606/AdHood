# AdHood - Turn Your Space Into An Income Source

A modern web platform that connects property owners with advertisers, enabling them to rent out empty physical spaces (building fronts, walls, land) for advertising purposes.

## 🚀 Features

- **Home Page**: Browse 10+ available advertising spaces across major Indian cities
- **Property Detail Pages**: Detailed information about each space including:
  - Location and pricing
  - Estimated visitor impressions
  - Nearby landmarks
  - Interactive Google Maps
  - Booking form
- **Rent Your Space**: Submit your own advertising space for listing
- **About Us**: Learn about AdHood's mission and how it works
- **Contact**: Get in touch with the team
- **Responsive Design**: Fully mobile and desktop friendly

## 🛠️ Tech Stack

- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Unsplash Images** - High-quality placeholder images

## 📦 Installation

1. **Install Dependencies**
```bash
npm install
```

2. **Start Development Server**
```bash
npm run dev
```

The application will open at `http://localhost:5173`

3. **Build for Production**
```bash
npm run build
```

4. **Preview Production Build**
```bash
npm run preview
```

## 📁 Project Structure

```
adhood/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── AdSpaceCard.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── PropertyDetail.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── RentYourSpace.jsx
│   ├── data/            # Sample data
│   │   └── adSpaces.js
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎨 Design Features

- **Modern UI**: Clean card-based design with rounded corners
- **Color Palette**: Professional blue (#4391fc) and white theme
- **Smooth Animations**: Hover effects and transitions
- **Responsive Layout**: Grid-based responsive design
- **Typography**: Clear hierarchy with modern fonts

## 📝 Sample Data

The application includes 10 sample advertising spaces across major areas in Hyderabad:
- HITEC City
- Banjara Hills
- Jubilee Hills
- Madhapur
- Gachibowli
- Kukatpally
- Secunderabad
- Ameerpet
- Begumpet
- LB Nagar

Each space includes realistic details like:
- Location and city
- Pricing (weekly rates)
- Visitor impressions
- Nearby landmarks
- Google Maps integration
- Space dimensions

## 🔄 MVP Status

This is the Minimum Viable Product (MVP) version. Upcoming features include:
- Advanced filtering and search
- Real-time availability calendar
- Integrated payment processing
- Analytics dashboard for space owners
- Mobile application
- User authentication
- Review and rating system

## 📱 Pages Overview

### Home (`/`)
- Hero section with call-to-action
- Feature highlights
- Grid of 10 available ad spaces
- CTA section

### Property Detail (`/property/:id`)
- Full property information
- Image gallery
- Pricing and visitor stats
- Nearby landmarks
- Google Maps embed
- Booking form

### About Us (`/about`)
- Company mission
- How it works
- Platform statistics
- MVP notice

### Contact (`/contact`)
- Contact form
- Contact information
- FAQ section

### Rent Your Space (`/rent-your-space`)
- How it works
- Space submission form
- Earnings information

## 🎯 Key Components

### AdSpaceCard
Reusable card component displaying:
- Space image
- Location
- Price
- Visitor count
- Nearby landmarks
- View Details button

### Header
- Responsive navigation
- Mobile menu
- Active route highlighting
- CTA button

### Footer
- Brand information
- Quick links
- Contact details
- Social links placeholder

## 💡 Usage Tips

1. **Browse Spaces**: Click on any space card to view detailed information
2. **Book a Space**: Fill out the booking form on the property detail page
3. **List Your Space**: Use the "Rent Your Space" page to submit your advertising space
4. **Get in Touch**: Use the contact form for any questions

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is part of an MVP demonstration.

## 👥 Contact

For questions or support:
- Email: info@adhood.co
- Phone: +91 8890240404

---

**Built with ❤️ in India**

