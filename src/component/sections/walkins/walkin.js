import React from 'react';
//import FacebookStyle from './contentLoader';
import Api from '../../../utils/api';
import TreeView from 'treeview-react-bootstrap';
import Loader from '../loader';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
//import { SortableTreeWithoutDndContext as SortableTree } from 'react-sortable-tree'

const styles = {
    px_py: {
        paddingTop: '300px',
        backgroundColor: 'blue',
        marginTop: '50px'
    },
    image: {
        width: '450px',
        height: '450px',
        paddingTop: '50px'
    },
    container: {
        backgroundColor: 'blue',
        height: '600px'
    },
    bootstrap_container: {
        backgroundColor: 'blue',
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const formatDataForTree = (data) => {
    const treeData = data.map( value => {
        const { city, data, date, id } = value;
        return {
            title: `Freshers Walkins ${capitalizeFirstLetter(city.replace('dailywalkins', ''))} ${date}`,
            children: [
                // {
                //     title: data,
                //     subtitle: data,
                //     children: [],
                //     expanded: true,
                // }
            ],
            subtitle: data,
            expanded: true,
        }
    } );
    return treeData;
}

const Demo = (data) => {
    console.log(data)
    return (
        <div style={{width: '800px', height: '800px', overflow: 'scroll'}} ><pre>{data.node.subtitle}</pre></div>
    )
}

const AccordTree = ({walkins = []}) => {
    return (
        <div style={{paddingBottom:20}} >
            <Accordion defaultActiveKey="0">
            {
                walkins.map((maps, index) => {
                    return (
                        <Card border="light" key={index} style={{paddingBottom: 20, backgroundColor:'white', cursor: 'pointer'}} >
                            <Card.Header>
                            <Accordion.Toggle as={Card.Header} variant="link" eventKey={index}>
                                {maps.title}
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={index}>
                            <Card.Body>
                                <pre>
                                    {maps.subtitle}
                                </pre>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    )
                })
            }
            </Accordion>
        </div>
    )
}

class Walkins extends React.Component {
    state = {
        walkins: []
    }
    async componentDidMount(){
        const urlParams = new URLSearchParams(window.location.search);
        const locality = urlParams.get('locality') || 'bangalore';
        if (locality) {
            const url = `https://www.bjshub.com/${locality}-daily-walkins.php`;
            const api = new Api();api.get(url).then(data  => {
                this.setState({walkins: formatDataForTree(data)});
            });
        }
        const elem = document.getElementsByClassName('__KA__home_routes')[0];
        if (elem) {
            document.getElementsByClassName('__KA__home_routes')[0].style.paddingTop = '0px';
        }
    }
    render(){
        const { walkins } = this.state;
        return (
            <div className='__KA__walkins_bangalore' style={{padding: '30px', height: 1200}} >
                <div style={{width: '1400px', height: '1200px', overflow: 'scroll', paddingLeft: '15%'}} >
                    {/* {walkins.length >0 && <SortableTree treeData={walkins} onChange={()=>{}} style={{height:'500px', width: '1000px'}} nodeContentRenderer={Demo} rowHeight={800} />} */}
                    {walkins.length === 0 && <Loader />}
                    <AccordTree walkins={walkins} />
                    <br />
                    <br />
                </div>
            </div>
        )
    }
}



export default Walkins;
