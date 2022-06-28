import './App.css';
import React from 'react';
import Cat from './components/Cat.js';

const cats = [
  {
  name: 'Мурзик',
  url: 'https://downloader.disk.yandex.ru/preview/c24aadca86f5c5282179ca62de862a5be6b594115cebb1a61550fad2188afdad/62bb7366/Vx8jZhfFbyX_AUlwN33EH4a5MAMvOJXT-RU8sPtkiRh31zIFLCWSBHxwB85EaRZEq_J6bpmRyOJonT3VoXnDag%3D%3D?uid=0&filename=%D0%9A%D0%BE%D1%828.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1131x947'
  }, {
    name: 'Васька',
    url: 'https://avatars.mds.yandex.net/get-altay/2755030/2a000001720e14d15a4a29db8a76197c5bd5/XXXL'
  }, {
    name: 'Пушок',
    url: 'https://avatars.mds.yandex.net/get-altay/2815220/2a000001720e13d98bb173408c359c612c5a/XXXL'
}
]
function App() {
  return (
    <div className="App">
    {/* <React.Fragment className="App"> */}
      {cats.map(cat => <Cat name={cat.name} url={cat.url}></Cat>
      )}
      {/* </React.Fragment> */}
    </div>
  );
}

export default App;
