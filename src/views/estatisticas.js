import Card from '../components/card';

import '../custom.css';
import { Volleyball, HandPlatter } from 'lucide-react';

function Estatisticas() {
    return (
        <div className='container'>
            <Card title='Estatísticas'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='bs-component'>
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th scope='col'>Artilheiros</th>
                                        <th scope='col'>Garçons</th>
                                        <th scope='col'>Cartões Amarelos</th>
                                        <th scope='col'>Cartões Vermelhos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        <tr>
                                            <td><a href="#"><Volleyball /></a></td>
                                            <td><a href="#"><HandPlatter /></a></td>
                                            <td><a href="#"><HandPlatter /></a></td>
                                            <td><a href="#"><HandPlatter /></a></td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Estatisticas;
