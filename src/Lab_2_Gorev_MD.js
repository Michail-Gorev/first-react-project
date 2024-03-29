import React from 'react';
import PicForDay from './PicForDay';
import UserProfile from './UserProfile';
import Button from "react-bootstrap/Button";
import ListPictures from "./AllPics";
import AllPics from "./AllPics";


const Greeting = () => {
    const pics = [
        {url: 'https://sunpik.ru/wp-content/uploads/2023/11/otkrytka-dobroe-utro-prekrasnogo-voskresnogo-dnya.jpg',
            title: 'Sunday', id: 7},
        {url: 'https://sunpik.ru/wp-content/uploads/2023/08/s-nachalom-rabochey-nedeli.jpg', title: 'Monday',
        id: 1},
        {url: 'https://sunpik.ru/wp-content/uploads/2022/10/kartinka-s-vtornikom-s-pozhelaniyami.jpg', title: 'Tuesday',
        id: 2},
        {url: 'https://sunpik.ru/wp-content/uploads/2021/07/morning-devushka-i-koshka.jpg', title: 'Wednesday',
        id: 3},
        {url: 'https://sunpik.ru/wp-content/uploads/2022/10/s-dobrym-utrom-chetverga-i-horoshego-nastroeniya.jpg',
            title: 'Thursday', id: 4},
        {url: 'https://sunpik.ru/wp-content/uploads/2022/09/kartinka-ura-pyatnitsa.jpg', title: 'Friday', id: 5},
        {url: 'https://sunpik.ru/wp-content/uploads/2022/03/dobroe-utro-subbota.jpg', title: 'Saturday', id: 6},
    ];
    const user =
        {username: 'Test Old Woman', age: 65, email: 'test@oldwoman.old', friends_count: 256, sent_pics_for_today: 17,
            favourite_pic: 3,};

    function getNormalGreeting() {
        alert('Hello, user!');
    }
    return(
        <>
            <div id="buttons">
                <button type='button' className={'btn btn-danger'} onClick={getNormalGreeting}>Tap for normal hello</button>
            </div>
                <PicForDay pics = {pics}/>
                <UserProfile user = {user} pics = {pics}/>
                <AllPics/>
        </>
    );
};

export default Greeting;