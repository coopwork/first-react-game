import './App.scss';
import Cities from "../Cities/Cities";
import CityStorage from "../CityStorage/CityStorage";
import Storage from "../Storage/Storage";
import Transportations from "../Transportations/Transportations";
import {useState} from "react";
import Stats from "../Stats/Stats";

function App() {
    const [currentCity, setCurrentCity] = useState(1);
    const [storages, setStorages] = useState([
        {
            cityId: 1,
            storage: [
                {
                    id: 1,
                    qty: 10
                },
                {
                    id: 2,
                    qty: 20
                },
                {
                    id: 3,
                    qty: 20
                },
                {
                    id: 4,
                    qty: 20
                },
                {
                    id: 5,
                    qty: 20
                },
                {
                    id: 6,
                    qty: 20
                },
                {
                    id: 7,
                    qty: 20
                },
                {
                    id: 8,
                    qty: 20
                },
                {
                    id: 9,
                    qty: 20
                },
                {
                    id: 10,
                    qty: 20
                },
                {
                    id: 11,
                    qty: 20
                },
                {
                    id: 12,
                    qty: 20
                },
                {
                    id: 13,
                    qty: 20
                },
                {
                    id: 14,
                    qty: 20
                }
            ]
        },
        {
            cityId: 2,
            storage: [
                {
                    id: 1,
                    qty: 5
                },
                {
                    id: 2,
                    qty: 10
                }
            ]
        },
        {
            cityId: 3,
            storage: [
                {
                    id: 1,
                    qty: 15
                },
                {
                    id: 2,
                    qty: 30
                }
            ]
        }
    ]);

    const [money, setMoney] = useState(1000);
    const [days, setDays] = useState(1);

    const goods = [
        {
            id: 1,
            title: 'Пиво'
        },
        {
            id: 2,
            title: 'Молоко'
        },
        {
            id: 3,
            title: 'Пшеница'
        },
        {
            id: 4,
            title: 'Грибы'
        },
        {
            id: 5,
            title: 'Клевер'
        },
        {
            id: 6,
            title: 'Лук'
        },
        {
            id: 7,
            title: 'Виноград'
        },
        {
            id: 8,
            title: 'Орехи'
        },
        {
            id: 9,
            title: 'Вилы'
        },
        {
            id: 10,
            title: 'Доски'
        },
        {
            id: 11,
            title: 'Коса'
        },
        {
            id: 12,
            title: 'Лопата'
        },
        {
            id: 13,
            title: 'Топор'
        },
        {
            id: 14,
            title: 'Кирка'
        }
    ];

    function getStorageByCity(){
        const store = storages.find((storage) => {
            return storage.cityId === currentCity;
        });
        if (store){
            return store.storage;
        } else {
            return []
        }
    }

    return (
    <div className="App">
        <h1 className="app-name">
        Барыга
        </h1>

        <Cities
            currentCity={currentCity}
            onChange={(city) => {
                setCurrentCity(city);
            }}
        />

        <div className="content">
            <div className="column">
                <div className="storage">
                    <Storage
                        currentCity={currentCity}
                        storage={getStorageByCity()}
                        goods={goods}
                    />
                </div>
                <div className="transportations"><Transportations/></div>
                <div className="stats">
                    <Stats
                        money={money}
                        days={days}
                    />
                </div>
            </div>
            <div className="column">
                <div className="city-storage"><CityStorage/></div>
            </div>
        </div>


    </div>
  );
}

export default App;
