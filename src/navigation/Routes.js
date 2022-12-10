import Home from '../Routes/Home'
import Favs from '../Routes/Favs'
import Detail from '../Routes/Detail'
import Contact from '../Routes/Contact'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';

export const routes = [
    { id: 1, path: "/", Element: Home, title: "Home" },
    { id: 2, path: "/favs", Element: Favs, title: "Favs" },
    { id: 3, path: "/contact", Element: Contact, title: "Contact" },
    { id: 4, path: "/dentist/:id", Element: Detail, title: "Detail" }    
]

export const socialNetwork = [
    { id: 1, path: "https://www.facebook.com/", Element: FacebookIcon, title: "Facebook" },
    { id: 2, path: "https://www.instagram.com/", Element: InstagramIcon, title: "Instagram" },
    { id: 3, path: "https://web.whatsapp.com/", Element: WhatsAppIcon, title: "Whatsapp" },
    { id: 4, path: "https://www.tiktok.com/es/", Element: AudiotrackIcon, title: "TikTok" }   
]


