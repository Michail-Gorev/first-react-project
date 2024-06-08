import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import {
    Card,
    CardBody, CardImg,
    CardTitle,
    Col,
    Form,
    ListGroup,
    ListGroupItem, Nav, Navbar, Row
} from "react-bootstrap";
import {useLocalStorage} from "./hooks/useLocalStorage";
import Button from "react-bootstrap/Button";


const API_KEY = '29e9ad82082e4a3fa4d34e7568c191c9'
const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch?'




function GetMeals() {
    const[filterCuisine, setFilterCuisine] = useLocalStorage('', 'filterCuisine');
    const[filterEquipment, setFilterEquipment] = useLocalStorage('', 'filterEquipment');
    const[filterCalories, setFilterCalories] = useLocalStorage('','filterCalories')
    const[meals, setMeals] = useState([])

    const filterCuisineChange = (event) => {
        setFilterCuisine(event.target.value)
    }
    const filterEquipmentChange = (event) => {
        setFilterEquipment(event.target.value)
    }
    const filterCaloriesChange = (event) => {
        setFilterCalories(event.target.value)
    }
    function refreshPage(){
        window.location.reload();
    }
    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch(BASE_URL + "cuisine=" + filterCuisine
                    + "&equipment=" + filterEquipment + "&maxCalories=" + filterCalories + "&apiKey=" + API_KEY)
            const jsonData = await resp.json();
            setMeals(jsonData.results);
        }
        fetchData();
    }, []);
    return(
        <>
            <Navbar className={'fixed-bottom'} bg={"light"}>
                <h1>Генератор блюд:</h1>
                <Nav>
                    <Row>
                        <Col>
                            <Form.Label htmlFor={'cuisine'}>
                                Фильтр по стране:
                            </Form.Label>
                            <Form.Select id={'cuisine'} onChange={filterCuisineChange}>
                                <option value={''}>Выберите</option>
                                <option value={''}>Любая</option>
                                <option value={'american'}>Америка</option>
                                <option value={'italian'}>Италия</option>
                                <option value={'greek'}>Греция</option>
                                <option value={'russian'}>Россия</option>
                                <option value={'france'}>Франция</option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Label htmlFor={'equipment'}>
                                Фильтр по посуде:
                            </Form.Label>
                            <Form.Select id={'equipment'} onChange={filterEquipmentChange}>
                                <option value={''}>Выберите</option>
                                <option value={''}>Любая</option>
                                <option value={'pot'}>Сковорода</option>
                                <option value={'bowl'}>Миска</option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Label htmlFor={'cuisine'}>
                                Макс. калории:
                            </Form.Label>
                            <Form.Control type={'text'} onChange={filterCaloriesChange}>
                            </Form.Control>
                        </Col>
                        <Col>
                            <Button type={"submit"} onClick={refreshPage} className={"btn btn-success"}>Отобразить!</Button>
                        </Col>
                    </Row>
                </Nav>
            </Navbar>
            <div className={"row row-cols-4 row-cols-md-4"}>
            {meals.map(function (item) {
                return(
                    <Col className={"my-5"}>
                        <Card className={"h-100"} bg={"dark"} text={"light"}>
                            <CardImg variant={"top"} src={item.image}/>
                            <CardBody>
                                <CardTitle>
                                    {item.title}
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                )
            })}
            </div>
        </>
    )
}

export default GetMeals;



