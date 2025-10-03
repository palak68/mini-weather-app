import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infobox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {
  const Int_URL ="https://timeskuwait3.bn/ .com/news/wp-content/uploads/2019/09/KUWAIT-DUST-STORM.jpg"

  const hot_URL ="https://th.bing.com/th/id/R.3c0ac60019122836ae170c61e817c3e8?rik=NJfMLCqGyfwmMw&riu=http%3a%2f%2fen.chinaculture.org%2ffocus%2ffocus%2f2010dasu%2fattachement%2fjpg%2fsite1%2f20100723%2f00221917dec40db3312401.jpg&ehk=Hpp7nHGLATrcVVZsfXRTio6PIZWmD94FHxTb0GVphUI%3d&risl=&pid=ImgRaw&r=0"
  const cold_URL="https://cdn.pixabay.com/photo/2023/12/06/08/53/winter-8433257_1280.jpg"
  const rain_URL="https://tse4.mm.bing.net/th/id/OIP.OxqIo_PZ3pGphf4iw85ZzgHaE8?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"


    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "b2eb5470e03070e799f1a04f9e77eb19"

    return (
        <div className="infoBox">
           
            <div className='cardContainer'>
             <Card sx={{ maxWidth: 500,width: 400, margin: 'auto' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?rain_URL:info.temp>20?hot_URL:cold_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' } }component="span">
        </Typography>
        <p>Temprature: {info.temp}&deg;C</p>
       <p>Humidity: {info.humidity}</p>
        <p>Feels Like: {info.feelsLike}&deg;C</p>
       <p>Max Temprature: {info.tempMax}&deg;C</p>
        <p>Min Temprature: {info.tempMin}&deg;C</p>



      </CardContent>
      
    </Card>
        </div>
        </div>
    );
}