
import { Container } from '../components/Container';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import './main.css'

import { Lists } from '../components/Lists';
import { useEffect, useState } from 'react';


const Main = () => {
    const [datas, setNewDatas] = useState("");
    const [dbdatas, setDbdatas] = useState([]);
    
    //for date
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    
    
    const savedata = (saveddata) => {
        setNewDatas(saveddata)
        const arry = [...dbdatas, datas]

        setNewDatas(arry);

    }

    const getApi = async () => {
        const response = await fetch('http://localhost:5600/api/get').then((response) => response.json())
        setDbdatas(response)
    }
    useEffect(() => {
        getApi();

    }, []);

    console.log(dbdatas)


    return (
        <div className='main-container'>
            <div className='header'><h2>To-Do-List</h2></div>
            <div style={{display:'flex',width:'100%'}}>
                <div style={{display:'flex',flexDirection:'column',width:'100%'}}>
                    <div className='sub-container2'>
                       <DensityMediumIcon fontSize="small"></DensityMediumIcon>
                        <div className='innerSub-container2'>
                            <h2 style={{ height: '10px', fontSize: '1.5vw' }}>My Day</h2>
                            <p style={{ fontSize: '10px' }}>{date}</p>
                        </div>
                    </div>
                    <Container senddata={savedata}
                        apifetch={getApi}></Container>
                    <div className='sub-container4'>
                        {/* <Lists item={dbdatas}></Lists> */}
                        {
                            dbdatas.map((item) => (
                                <Lists
                                    item={item}
                                    apifetch={getApi}
                                ></Lists>
                            ))
                        }
                    </div>

                </div>
                {/* <div className='hidden-div'>
                    <h1>helo</h1>

                </div> */}
            </div>
        </div>
    );
}

export default Main;