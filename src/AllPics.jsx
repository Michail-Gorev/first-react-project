import {Card, Col, Form, ListGroup, Row} from "react-bootstrap";
import {useState} from "react";

const pics = [
    {url: 'https://sunpik.ru/wp-content/uploads/2023/11/otkrytka-dobroe-utro-prekrasnogo-voskresnogo-dnya.jpg',
        title: 'Sunday', author: 'Елена Бобровская', id: 7},
    {url: 'https://sunpik.ru/wp-content/uploads/2023/08/s-nachalom-rabochey-nedeli.jpg', title: 'Monday',
        author:'Катерина Мезенцева', id: 1},
    {url: 'https://sunpik.ru/wp-content/uploads/2022/10/kartinka-s-vtornikom-s-pozhelaniyami.jpg', title: 'Tuesday',
        author: 'Елена Бобровская', id: 2},
    {url: 'https://kartinki.pics/pics/uploads/posts/2022-09/thumbs/1662671390_1-kartinkin-net-p-otkritki-khoroshego-vtornika-1.jpg',
    title: 'Tuesday', author:'Елена Бобровская', id: 22},
    {url: 'https://sunpik.ru/wp-content/uploads/2021/07/morning-devushka-i-koshka.jpg', title: 'Wednesday',
        id: 3},
    {url: 'https://sunpik.ru/wp-content/uploads/2022/10/s-dobrym-utrom-chetverga-i-horoshego-nastroeniya.jpg',
        title: 'Thursday', author:'Катерина Мезенцева', id: 4},
    {url: 'https://sunpik.ru/wp-content/uploads/2022/09/kartinka-ura-pyatnitsa.jpg', title: 'Friday', author:
        'Елена Бобровская', id: 5},
    {url: 'https://sunpik.ru/wp-content/uploads/2022/03/dobroe-utro-subbota.jpg', title: 'Saturday', author:
            'Катерина Мезенцева', id: 6},
];

function Search() {
    const[searchTitle, setSearchTitle] = useState('');
    const[filterAuthor, setFilterAuthor] = useState('')
    const searchPics = pics.filter(function (pic) {
        return filterAuthor !== "" ? pic.title.includes(searchTitle) & pic.author === filterAuthor :
            pic.title.includes(searchTitle)
    });
    const handleChange = (event) => {
        setSearchTitle(event.target.value);
    }

    const filterChange = (event) => {
        setFilterAuthor(event.target.value)
    }
    return(
        <div>
            <Row>
                <Col>
                    <Form>
                        <Form.Label htmlFor='search'>
                            Поиск картинки по дню недели:
                        </Form.Label>
                        <Form.Control id='search' type='text' onChange={handleChange}>
                        </Form.Control>
                    </Form>
                </Col>
                <Col>
                    <Form.Label>
                        Фильтр по автору:
                    </Form.Label>
                    <Form.Select onChange={filterChange}>
                        <option value={'Елена Бобровская'}>Елена Бобровская</option>
                        <option value={'Катерина Мезенцева'}>Катерина Мезенцева</option>
                        <option value={''}>Любой</option>
                    </Form.Select>
                    <p>
                        Выполняется поиск картинки для: <strong>{searchTitle} от автора {filterAuthor}</strong>
                    </p>
                </Col>
            </Row>
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

