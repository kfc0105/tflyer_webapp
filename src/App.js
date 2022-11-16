import logo from './logo.svg';
import './App.css';
import Header from './Header'

import styles from "./Background.module.css";
import background1 from "./main_images/tokyo.jpg"
import background2 from "./main_images/tokyo_sakura.jpg"
import tshirt from "./main_images/tshirt.png"

//Three features
import feature1 from "./main_images/スクリーンショット 2022-10-28 17.58.05.png"
import feature2 from "./main_images/undraw_Landscape_photographer_re_18se (1).png"
import feature3 from "./main_images/undraw_Followers_re_6k3g.png"


//import Button from '@mui/material/Button';
//import Stack from '@mui/material/Stack';
import {Stack, Button, Box, Typography, CardContent, Card} from "@mui/material";

function App() {
  return (
    <div className='App' style={{backgroundColor: "#f4f4f6"}}>
      <Header/>
      <article className={styles.article} style={{ backgroundImage: `url(${background1})` }}>
        <h1 className={styles.header}>
          Tシャツで稼いでみませんか？
        </h1>
      </article>
      <text>
        <h1 style={{color: 'purple', fontSize: "60px"}}>
          SERVICES
        </h1>
      </text>
      <hr
        style={{
          background: 'black',
          color: 'black',
          borderColor: 'back',
          height: '3px',
          width: '500px',
        }}
      />
      <text　style={{fontSize: "60px"}}>
        Tシャツ広告
      </text>
      <article className={styles.article} style={{ backgroundImage: `url(${background2})` }}>
        <h1 className={styles.header}>
        Tシャツで広告する新しい選択肢
        </h1>
      </article>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 50}}>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" href="/client">
          広告主 
        </Button>
        <Button variant="contained" href="/influencer">
          インフルエンサー
        </Button>
      </Stack>
      </div>

      <div style={{display: 'flex', justifyContent: 'start', alignItems: 'start', margin: 50}}>
        <Stack direction="row" spacing={5}>
          <Card style={{width:350, height:500,  backgroundColor: "white", borderRadius:30}}>
            <CardContent>
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 10}}>
                <img style={{width: 200, height: 150}} src={feature1} alt="feature1"/>
              </div>
              <Typography variant='h5' component="h2" >
                特徴１
              </Typography>
              <br></br>
              <Typography variant='h7' component="h2" >
                画面中央のポジショニングと長時間表示で抜群の視認性
              </Typography>
              <br></br>
              <Typography variant='h10' component="h6">
                必ず視聴者の目に入る位置に広告が配置される為、全てのインプレッション（広告表示）が視認とイコールに。

              </Typography>
            </CardContent>
          </Card>
          <Card style={{width:350, height:500,  backgroundColor: "white", borderRadius:30}}>
            <CardContent>
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 10}}>
                <img style={{width: 200, height: 150}} src={feature2} alt="feature2"/>
              </div>
              <Typography variant='h5' component="h2" >
                特徴２              
              </Typography>
              <br></br>
              <Typography variant='h7' component="h2" >
                動画内での広告に対する視線の集中を確保
              </Typography>
              <br></br>
              <Typography variant='h10' component="h6">
                “人間”と“文字”という動画内でも最も注目される２要素を、Tシャツによってかけ合わせ、視聴者の広告への視線の集中を確保。
              </Typography>
            </CardContent>
          </Card>
          <Card style={{width:350, height:500,  backgroundColor: "white", borderRadius:30}}>
            <CardContent>
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 10}}>
                <img style={{width: 200, height: 150}} src={feature3} alt="feature3"/>
              </div>
              <Typography variant='h5' component="h2" >
                特徴３            
              </Typography>
              <br></br>
              <Typography variant='h7' component="h2" >
                SNS統計などから商品・サービスに合わせたターゲット設定が可能
              </Typography>
              <br></br>
              <Typography variant='h10' component="h6">
                クライアント様の商品・サービスにあった消費者のターゲティングをご提案。SNSのアナリティクスを利用し、性別、年齢、趣向、時間帯、プラットフォーム別のターゲティングが可能です。

              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </div>

    </div>
  );
}

export default App;
