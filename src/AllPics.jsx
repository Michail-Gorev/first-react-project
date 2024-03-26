import {Card, Col, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import * as events from "events";
import {useState} from "react";

const pics = [
    {url: 'https://sunpik.ru/wp-content/uploads/2023/11/otkrytka-dobroe-utro-prekrasnogo-voskresnogo-dnya.jpg',
        title: 'Sunday', id: 7},
    {url: 'https://sunpik.ru/wp-content/uploads/2023/08/s-nachalom-rabochey-nedeli.jpg', title: 'Monday',
        id: 1},
    {url: 'https://sunpik.ru/wp-content/uploads/2022/10/kartinka-s-vtornikom-s-pozhelaniyami.jpg', title: 'Tuesday',
        id: 2},
    {url: 'https://kartinki.pics/pics/uploads/posts/2022-09/thumbs/1662671390_1-kartinkin-net-p-otkritki-khoroshego-vtornika-1.jpg',
    title: 'Tuesday', id: 22},
    {url: 'https://sunpik.ru/wp-content/uploads/2021/07/morning-devushka-i-koshka.jpg', title: 'Wednesday',
        id: 3},
    {url: 'https://sunpik.ru/wp-content/uploads/2022/10/s-dobrym-utrom-chetverga-i-horoshego-nastroeniya.jpg',
        title: 'Thursday', id: 4},
    {url: 'https://sunpik.ru/wp-content/uploads/2022/09/kartinka-ura-pyatnitsa.jpg', title: 'Friday', id: 5},
    {url: 'https://sunpik.ru/wp-content/uploads/2022/03/dobroe-utro-subbota.jpg', title: 'Saturday', id: 6},
];


function Search() {
    const[searchTitle, setSearchTitle] = useState('');
    const searchPics = pics.filter(function (pic) {
        return pic.title.includes(searchTitle);
    });
    const handleChange = (event) => {
        setSearchTitle(event.target.value);
    }
    return(
        <div>
            <label htmlFor='search'>
                Поиск картинки по дню недели:
            </label>
            <input id='search' type='text' onChange={handleChange}/>
            <h1>
                Выполняется поиск по запросу: <strong>{searchTitle}</strong>
            </h1>
            <ListPictures pics={searchPics}/>
        </div>
    )
}
const ListPictures = (props) => {
    return (
        <div>
            <Row>
                {props.pics.map(function (pic) {
                    return <Col key={pic.id} style={{alignItems: 'center'}}>
                        <Card.Body>
                            <Card.Title>{pic.title}</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <img style={{width: '100px', height: '100px'}} src={pic.url} alt="Can't load the picture"/>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Col>
                })}
            </Row>
        </div>
    );
}

export default Search;

